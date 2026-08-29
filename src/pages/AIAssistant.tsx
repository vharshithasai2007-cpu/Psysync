import { useState } from "react";
import { Bot, Send, Sparkles, User } from "lucide-react";

type Message = {
  id: number;
  sender: "ai" | "user";
  text: string;
};

function AIAssistant() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hi! I'm Lenna, your personal wellness companion. How are you feeling today?",
    },
    {
      id: 2,
      sender: "user",
      text: "I have a lot of assignments and I'm feeling tired.",
    },
    {
      id: 3,
      sender: "ai",
      text: "Let's make today manageable. Start with your highest-priority task for 25 minutes, then take a short break.",
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newUserMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages((current) => [...current, newUserMessage]);
    setInput("");

    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: "That's understandable. Let's take it one step at a time. What's the most important thing you need to accomplish today?",
      };

      setMessages((current) => [...current, aiMessage]);
    }, 500);
  };

  const suggestedPrompts = [
    "How should I plan today?",
    "I'm feeling stressed",
    "Help me focus",
  ];

  return (
    <main className="assistant-page">
      <div className="assistant-header">
        <div className="assistant-title">
          <div className="assistant-icon">
            <Bot size={25} />
          </div>

          <div>
            <p className="eyebrow">AI WELLNESS COMPANION</p>
            <h1>Lenna AI</h1>
            <p>Your personal wellness companion.</p>
          </div>
        </div>

        <div className="ai-status">
          <span />
          Online
        </div>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-row ${message.sender}`}
            >
              <div className="message-avatar">
                {message.sender === "ai" ? (
                  <Sparkles size={16} />
                ) : (
                  <User size={16} />
                )}
              </div>

              <div className="message-bubble">
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="suggested-prompts">
          {suggestedPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => setInput(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Talk to Lenna..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button
            type="button"
            className="send-button"
            onClick={sendMessage}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>

        <p className="ai-disclaimer">
          Lenna is a prototype AI assistant. Responses shown here are for
          demonstration purposes.
        </p>
      </div>
    </main>
  );
}

export default AIAssistant;