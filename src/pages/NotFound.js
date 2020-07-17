import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router';

const NotFound = () => {
  let history = useHistory()
  const onClick = () => {
    history.push('/')
  }

  return (
    <>
      <button onClick={onClick}>Home</button>
      <h1 style={{ color: 'slategrey', marginTop: 30, textAlign: 'center' }}>404 - Page Does Not Exist</h1>
    </>
  );
};

export default NotFound;