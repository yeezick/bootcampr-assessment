// OnboardingPage.jsx

import React from 'react';
import './Congrats.scss';
import Icon from 'assets/welcome.gif';

const Congrats:React.FC = () => {
  return (
    <div className="onboarding-container">
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
