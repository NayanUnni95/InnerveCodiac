import React from 'react';
import transition from '../../components/Transition/Transition';

function Hackathon() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Coming Soon!</h1>
    </div>
  );
}

export default transition(Hackathon);
