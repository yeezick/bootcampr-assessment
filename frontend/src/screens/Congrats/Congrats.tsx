// OnboardingPage.jsx

import React from 'react';
import './Congrats.scss';
import Icon from 'assets/welcome.gif';
import Confetti from 'react-confetti';

const Congrats:React.FC = () => {
    // const confettiConfig: ConfettiConfig = {
    //     angle: 90,
    //     spread: 360,
    //     startVelocity: 40,
    //     elementCount: 50,
    //     dragFriction: 0.12,
    //     duration: 3000,
    //     stagger: 0,
    //     width: '10px',
    //     height: '10px',
    //     colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
    //   };
  return (
    <div className="onboarding-container">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      <header>
        <h1>Congratulations on joining bootcampr🎉</h1>
        <p>Get the experience. Get the job.</p>
      </header>

       <div className="onboarding-image">
        <img src={Icon} alt="icon" height={250} width={250}/>
       </div>
      <button className="get-started-btn">Dashboard</button>
    </div>
  );
};

export default Congrats;
