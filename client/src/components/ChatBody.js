import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = () => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          Leave Chat
        </button>
      </header>

      {/* Your sent messages */}
      <div className="message__container">
        <div className="message__chats">
          <p className="sender__name">You</p>
          <div className="message__sender">
            <p>Hello There</p>
          </div>
        </div>
      </div>

      {/* Messages you recieved */}
      <div className="message__chats">
        <p>Other</p>
        <div className="message__recipient">
          <p>Hey, I'm good, you?</p>
        </div>
      </div>

      {/* This is when a user is typing */}
      <div className="messge__status">
        <p>Someone is typing</p>
      </div>
    </>
  );
};

export default ChatBody;