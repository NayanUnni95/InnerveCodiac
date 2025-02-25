import React from 'react';
import { Link } from 'react-router-dom';
import transition from '../../components/Transition/Transition';

function NotFound() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ color: 'blue' }}>404</h1>
      <h2>Page Not Found...</h2>
      <Link
        to={'/'}
        style={{
          backgroundColor: 'white',
          padding: '0.2rem 0.7rem',
          textDecoration: 'none',
          borderRadius: '3rem',
        }}
      >
        <h4 style={{ color: 'red',width:'50px' }}>Back to home</h4>
      </Link>
    </div>
  );
}

export default transition(NotFound);
