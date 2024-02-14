import reach, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e)  => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    navigate('/chat');
  }

  return (
    <form className='home_container' onSubmit={handleSubmit}>
      <h2 className='home_header'>Sign in to chat</h2>
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        minLength={6}
        name='username'
        id='username'
        className='username_input'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}/>
        <button className='home_cta'>Sign in</button>
    </form>
  );
};

export default Home;