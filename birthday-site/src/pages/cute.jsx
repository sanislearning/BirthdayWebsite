import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cute.css';
import Firework from '../assets/fireworks.gif';
import butterfly from '../assets/butterfly.gif';
import panda from "../assets/dancingPanda.gif";
function Cute() {
  const navigate = useNavigate();

  return (
    <div className="cute-page">
      <div className="Top-part">
        <div className="Thank-annoying">
          Thank you for being the daily dose of annoyance that truly makes all days complete
        </div>
        <div className="no-fireworks">
          Can't really blow up actual fireworks rn, the gif will have to do
        </div>
      </div>
      {/* Semicircle Text */}
      <div className="semi-circle-text"> 
      <svg viewBox="0 0 1200 800" width="1000" height="400">
        <defs>
          <path
            id="semiPath"
            d="M 200,600 A 400,400 0 0 1 1000,600"
            fill="transparent"
          />
        </defs>
        <text className="birthday-text">
          <textPath href="#semiPath" startOffset="50%" textAnchor="middle">
            Happy Birthday Siva
          </textPath>
        </text>
      </svg>


      </div>
      <img src={Firework} alt="fireworks" className='fireworks' />
      {/* Navigation Button */}
      <button className="cute-button" onClick={() => navigate('/pro')}>
        Click to be Professional 💼
      </button>
      <div class="initial-bottom">
        <div class="happy-20">
          Happy 20th birthday to the prettiest person I know
        </div>
      <img src={butterfly} alt="flying butterflies" className="butterfly"/>
      <img src={panda} alt="Dancing panda" className="pandas"/>
      </div>
    </div>
  );
}

export default Cute;
