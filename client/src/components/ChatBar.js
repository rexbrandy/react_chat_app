import React, { useState, useEffect } from "react";

const ChatBar = ({ socket }) => {
  const[users, setUsers] = useState([]);
  
  useEffect(() => {
    // When newUserResponse gets emmited this will updated the users
    // which will be reflected in the dom
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>
      <div>
        <h4 className="chat__header">Active Users</h4>
        <div className="chat__user">
          { users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatBar;