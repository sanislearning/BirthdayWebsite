import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cute.css';

function Cute() {
  const navigate = useNavigate();

  return (
    <div className="cute-page">
      {/* Semicircle Text */}
      <div className="semi-circle-text">
      <svg viewBox="0 0 1200 700" width="1000" height="300">
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

      {/* Navigation Button */}
      <button className="cute-button" onClick={() => navigate('/pro')}>
        Click to be Professional 💼
      </button>
    </div>
  );
}

export default Cute;
