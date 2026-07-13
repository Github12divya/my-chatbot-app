// src/components/Chatbot.js
import React from 'react';

const Chatbot = () => {
  return (
    <div className="chatbot-container" style={{ textAlign: 'center', marginTop: '20px' }}>
      <iframe
        title="BharatMediBot"
        allow="microphone;"
        width="350"
        height="500"
        src=""
      />
    </div>
  );
};

export default Chatbot;