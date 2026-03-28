import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get(`${API}/contact`);
      if (data.success) setMessages(data.data);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white p-8">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Admin Messages</h1>

      <div className="grid gap-6">
        {messages.map((msg) => (
          <div key={msg._id} className="glass rounded-[2rem] p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold">{msg.name}</h3>
                <p className="text-white/60">{msg.email}</p>
              </div>
              <p className="text-sm text-white/50">
                {new Date(msg.createdAt).toLocaleString()}
              </p>
            </div>

            <h4 className="mt-4 text-lg font-semibold">{msg.subject}</h4>
            <p className="mt-3 text-white/75 leading-8">{msg.message}</p>
          </div>
        ))}

        {messages.length === 0 && (
          <p className="text-white/60">No messages found.</p>
        )}
      </div>
    </div>
  );
}