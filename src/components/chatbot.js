import React, { useState } from 'react';

const tips = [
  "Plan meals ahead to avoid buying extra food.",
  "Store leftovers properly to extend their shelf life.",
  "Use vegetable scraps to make broth.",
  "Freeze food that you won’t use immediately.",
  "Use an app to track expiration dates of products.",
  "Compost food scraps instead of throwing them in the trash.",
  "Repurpose leftovers into new meals."
];

const Chatbot = () => {
  const initialMessage = [{ text: "Hi! I'm your food waste reduction assistant. Ask me for tips!", isBot: true }];
  const [messages, setMessages] = useState(initialMessage);
  const [userInput, setUserInput] = useState("");
  const [isVisible, setIsVisible] = useState(false); // State to manage chatbot visibility

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (userInput.trim() === "") return;

    const newMessages = [...messages, { text: userInput, isBot: false }];
    setMessages(newMessages);

    // Bot response
    const botResponse = tips[Math.floor(Math.random() * tips.length)];
    setTimeout(() => {
      setMessages([...newMessages, { text: botResponse, isBot: true }]);
    }, 1000); // Simulate a delay in bot response

    setUserInput("");
  };

  const handleClearMessages = () => {
    setMessages(initialMessage); // Reset to the initial message
  };

  const toggleChatbotVisibility = () => {
    setIsVisible(!isVisible); // Toggle chatbot visibility
  };

  return (
    <div>
      <style>
        {`
          /* Chatbot Styles */
          .terminal-loader {
            border: 0.1em solid #ddd;
            background-color: #f5f5f5;
            color: #333;
            font-family: "Courier New", Courier, monospace;
            font-size: 1.2em;
            padding: 1em; /* Adjust padding for mobile */
            width: 90vw; /* Adjust width for mobile */
            max-width: 400px; /* Set max width for desktop */
            position: fixed;
            bottom: 30px;
            right: 30px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
            border-radius: 8px;
            z-index: 1001;
            display: ${isVisible ? 'block' : 'none'};
            overflow: hidden;
          }

          .terminal-header {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2em;
            background-color: #e0e0e0;
            padding: 0 0.4em;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
          }

          .terminal-title {
            color: #555;
            font-size: 1.1em;
          }

          .chatbot-container {
            background-color: #aad3e7;
            padding: 10px; /* Adjust padding for mobile */
            border-radius: 8px;
            border: 2px solid #323232;
            box-shadow: 4px 4px #323232;
          }

          .chatbot-message {
            background-color: #f7f5d2;
            border-radius: 5px;
            box-shadow: 4px 4px #323232;
            padding: 10px;
            color: #3d3d3d;
            margin-bottom: 10px; /* Adjust margin for mobile */
            font-size: 0.9rem; /* Adjust font size for mobile */
            position: relative;
          }

          .chatbot-input {
            width: 100%;
            background-color: #f7f5d2;
            border: 2px solid #323232;
            box-shadow: 4px 4px #323232;
            border-radius: 5px;
            font-size: 1rem;
            padding: 10px;
            margin-bottom: 10px;
            color: #3d3d3d;
            outline: none;
          }

          .chatbot-input::placeholder {
            color: #3d3d3d;
          }

          .chatbot-submit {
            width: 100%;
            background-color: #f7f5d2;
            color: #3d3d3d;
            border: 2px solid #323232;
            box-shadow: 4px 4px #323232;
            border-radius: 5px;
            padding: 10px;
            font-size: 1.1rem;
            cursor: pointer;
          }

          .chatbot-submit:hover {
            background-color: lightgray;
          }

          button.clear-button {
            background-color: #ff4d4d;
            color: white;
            border: none;
            padding: 10px;
            margin-top: 10px;
            width: 100%;
            border-radius: 5px;
            cursor: pointer;
          }

          button.clear-button:hover {
            background-color: #e60000;
          }

          /* Custom Button Styles */
          .button {
            --black-700: hsla(0 0% 12% / 1);
            --border_radius: 9999px;
            --transtion: 0.3s ease-in-out;
            --offset: 2px;
            cursor: pointer;
            position: fixed; /* Change to fixed positioning */
            bottom: 30px; /* Align to bottom */
            right: 30px; /* Align to right */
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transform-origin: center;
            padding: 1rem 2rem; /* Increased padding for a bigger button */
            background-color: Green; /* Set to beige color */
            border: none;
            border-radius: var(--border_radius);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Add box shadow */
            z-index: 1002; /* Ensure it's above the chat */
          }

          .button .text_button {
            font-size: 1.2rem; /* Increased font size for better visibility */
            color: #333; /* Set text color */
          }

          .button:hover {
            background-color: lightgreen; /* Change hover effect */
          }
        `}
      </style>

      {/* Custom Chatbot Toggle Button */}
      <button className="button" onClick={toggleChatbotVisibility}>
        <span className="text_button">{isVisible ? 'Close Chat' : 'Chat with us!'}</span>
      </button>

      <div className="terminal-loader">
        <div className="terminal-header">
          <span className="terminal-title">Chatbot</span>
        </div>

        <div className="chatbot-container">
          {messages.map((message, index) => (
            <div key={index} className={`chatbot-message ${message.isBot ? 'bot' : 'user'}`}>
              {message.isBot ? "🤖 " : "👤 "} {message.text}
            </div>
          ))}

          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chatbot-input"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button type="submit" className="chatbot-submit">Send</button>
          </form>

          <button onClick={handleClearMessages} className="clear-button">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
