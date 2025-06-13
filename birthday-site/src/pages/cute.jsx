import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cute.css';

function Cute() {
  const navigate = useNavigate();

  return (
    <div className="cute-page">
      <h1>You're the Cutest 🎀</h1>
      <img
        src="https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif"
        alt="Cute"
        className="cute-gif"
      />
      <p>Hope this page makes you smile!</p>
      <button className="cute-button" onClick={() => navigate('/pro')}>
        Click to be Professional 💼
      </button>
    </div>
  );
}

export default Cute;
