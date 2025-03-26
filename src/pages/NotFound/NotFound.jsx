import React from 'react';
import { Link } from 'react-router-dom';
import transition from '../../components/Transition/Transition';
import FuzzyText from '../../components/FuzzyText/FuzzyText';

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
      <FuzzyText baseIntensity={0.2} enableHover={'enableHover'}>
        404
      </FuzzyText>
      <h2>Page Not Found...</h2>
      <Link to={'/'}>
        <h4>Back to Home</h4>
      </Link>
    </div>
  );
}

export default React.memo(transition(NotFound));
