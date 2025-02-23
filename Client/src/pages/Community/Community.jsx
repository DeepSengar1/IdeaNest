import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import axios from 'axios'
import { useUser, useAuth } from '@clerk/clerk-react'

const socket = io('http://localhost:3000')

export default function Community () {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const { user, isLoaded } = useUser()
  const { getToken } = useAuth()

  useEffect(() => {
    async function fetchMessages () {
      try {
        const token = await getToken()
        const response = await axios.get(
          'http://localhost:3000/api/chat/messages',
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        setMessages(response.data)
      } catch (error) {
        console.error('Error fetching messages:', error)
      }
    }
    if (isLoaded && user) {
      fetchMessages()
    }
  }, [isLoaded, user, getToken])

  useEffect(() => {
    socket.on('chat message', msg => {
      setMessages(prev => [...prev, msg])
    })
    return () => socket.off('chat message')
  }, [])

  const handleSendMessage = async e => {
    e.preventDefault()
    if (!message.trim()) return
    if (!isLoaded || !user) return

    const msgObj = {
      senderId: user.id,
      message: message.trim()
    }

    socket.emit('chat message', msgObj)
    setMessage('')
  }

  return (
    <div className='col-span-2 min-h-[90vh] rounded-xl bg-muted/50 pt-20 p-4'>
      <div className='bg-neutral-900 text-white flex flex-col h-full overflow-hidden rounded-xl shadow-lg'>
        {/* Chat Area */}
        <main className='flex-grow container mx-auto px-6 py-4 overflow-y-auto border border-neutral-700 rounded-lg bg-neutral-900 shadow-lg backdrop-blur-md'>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                msg.isSender ? 'justify-end' : 'justify-start'
              }`}
            >
              <div className='max-w-lg w-fit p-3 rounded-lg shadow-md flex items-start space-x-3 bg-opacity-90'>
                {!msg.isSender &&
                  (msg.sender && msg.sender.avatarUrl ? (
                    <img
                      src={msg.sender.avatarUrl}
                      alt='avatar'
                      className='w-9 h-9 rounded-full border border-neutral-600'
                    />
                  ) : (
                    <div className='w-9 h-9 rounded-full bg-neutral-600'></div>
                  ))}
                <div>
                  {!msg.isSender && (
                    <p className='text-sm font-medium text-blue-400'>
                      {msg.sender ? msg.sender.name : 'Unknown'}
                    </p>
                  )}
                  <p
                    className={`p-3 rounded-lg mt-1 shadow-md text-gray-200 ${
                      msg.isSender
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-neutral-800 rounded-bl-none'
                    }`}
                  >
                    {msg.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </main>

        {/* Message Input */}
        <form
          onSubmit={handleSendMessage}
          className='flex items-center gap-2 p-4 bg-neutral-800 border-t border-neutral-700 shadow-md'
        >
          <input
            type='text'
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder='Type your message...'
            className='flex-grow p-3 rounded-full border border-neutral-600 bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300 placeholder-gray-400'
          />
          <button
            type='submit'
            className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full transition duration-200 shadow-lg'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
