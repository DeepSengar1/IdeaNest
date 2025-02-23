import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import { useUser, useAuth } from "@clerk/clerk-react";

const socket = io("http://localhost:3000");

function GlobalChat() {
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
    <div>GlobalChat</div>
  )
}

export default GlobalChat