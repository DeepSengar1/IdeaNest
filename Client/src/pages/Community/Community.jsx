import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import { useUser, useAuth } from "@clerk/clerk-react";

const socket = io("http://localhost:3000");

export default function Community() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    async function fetchMessages() {
      try {
        const token = await getToken();
        const response = await axios.get(
          "http://localhost:3000/api/chat/messages",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
    if (isLoaded && user) {
      fetchMessages();
    }
  }, [isLoaded, user, getToken]);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.off("chat message");
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    if (!isLoaded || !user) return;

    const msgObj = {
      senderId: user.id,
      message: message.trim(),
    };

    socket.emit("chat message", msgObj);
    setMessage("");
  };

  return (
    <div className="h-screen bg-neutral-900 text-white flex flex-col overflow-hidden">
      {/* NavBar */}
      <nav className="bg-neutral-800 p-4 pl-16">
        <div className="container mx-auto">
          <h1 className="text-xl font-semibold">Community Chat</h1>
        </div>
      </nav>

      {/* Chat Area */}
      <main className="flex-grow container mx-auto p-4 m-4 mb-0 flex flex-col flex-1 overflow-y-scroll  border border-neutral-700 rounded-lg ">
        {messages.map((msg, index) => (
          <div key={index} className="mb-3">
            <div className="flex items-center space-x-2">
              {msg.sender && msg.sender.avatarUrl ? (
                <img
                  src={msg.sender.avatarUrl}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-neutral-600"></div>
              )}
              <p className="text-sm text-blue-300">
                {msg.sender ? msg.sender.name : "Unknown"}
              </p>
            </div>
            <p className="bg-neutral-800 p-2 rounded mt-1">{msg.message}</p>
          </div>
        ))}
      </main>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="mt-4 flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-3 rounded-l-lg border border-neutral-700 bg-neutral-800 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}
