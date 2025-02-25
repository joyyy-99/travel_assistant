import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import userAvatar from './assets/user_avatar.jpg';
import botAvatar from './assets/bot_avatar.webp';

const App = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    setChatHistory([...chatHistory, { user: userMessage, bot: '' }]);
    setUserMessage('');
    setIsBotTyping(true);

    try {
      const response = await axios.post('http://localhost:5000/chat', {
        message: userMessage
      });

      if (response.data && response.data.reply) {
        setChatHistory((prev) => [
          ...prev.slice(0, -1),
          { user: userMessage, bot: response.data.reply }
        ]);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error connecting to Flask backend:", error);
      alert("There was an error connecting to the server. Please try again later.");
    } finally {
      setIsBotTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Travel Assistant Chatbot</h1>
      </div>
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index}>
            {/* User Message */}
            <div className="message user-message">
              <img src={userAvatar} alt="User Avatar" className="avatar" />
              <div className="message-content">{chat.user}</div>
            </div>

            {/* Bot Message */}
            {chat.bot && (
              <div className="message bot-message">
                <img src={botAvatar} alt="Bot Avatar" className="avatar" />
                <div className="message-content">{chat.bot}</div>
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isBotTyping && (
          <div className="message bot-message">
            <img src={botAvatar} alt="Bot Avatar" className="avatar" />
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage} disabled={isBotTyping}>
          {isBotTyping ? 'Typing...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default App;
