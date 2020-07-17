import React from 'react';
import './Home.css';
import { useHistory } from 'react-router';

const Home = () => {
  let history = useHistory()
  const onClick = () => {
    history.push('/mainmap')
  }

  return (
    <>
      <button onClick={onClick}>U.S. Map</button>
      <h1 style={{ color: 'slategrey', lineHeight: '80vh', textAlign: 'center' }}>WhoPolitics</h1>
    </>
  );
};

export default Home;
