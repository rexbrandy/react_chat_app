import reach, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e)  => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    // Sends username and id to server
    socket.emit('newUser', { userName, socketID: socket.id});
    console.log('Stuff', userName, socket.id);
    navigate('/chat');
  }

  return (
    <form className='home__container' onSubmit={handleSubmit}>
      <h2 className='home__header'>Sign in to chat</h2>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        minLength={6}
        name='username'
        id='username'
        className='username_input'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}/>
        <button className='home__cta'>Sign in</button>
    </form>
  );
};

export default Home;