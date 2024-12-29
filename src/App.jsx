import React, { useState } from 'react';

    function App() {
      const [messages, setMessages] = useState([]);
      const [inputValue, setInputValue] = useState('');

      const handleSend = () => {
        if (inputValue.trim()) {
          setMessages([...messages, { text: inputValue, id: messages.length }]);
          setInputValue('');
        }
      };

      return (
        <div className="chat-container">
          <div className="messages">
            {messages.map((message) => (
              <div key={message.id} className="message">
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      );
    }

    export default App;
