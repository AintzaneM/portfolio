import React from 'react';
import { ChatEngine } from 'react-chat-engine';

const SupportAdmin = () => {
  return (
    <ChatEngine
      projectID = {process.env.REACT_APP_CE_PROJECT_ID}
      userName = "Aintzane"
      userSecret = "037529Ai!"
      height = "calc(100vh - 20px)"
    
    >

    </ChatEngine>
  );
}

export default SupportAdmin;