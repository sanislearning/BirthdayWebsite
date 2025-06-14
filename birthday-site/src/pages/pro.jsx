import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pro.css';

function Pro() {
  const navigate = useNavigate();

  return (
    <div className="real-frame">
      <div className="outline-frame">
        {/* Top Section */}
        <div className="top-section">
          <div className="top-wrapper">
            <div className="date-wrapper">
              <div className="date-number">24</div>
              <div>
                <div className="date-month">june 2025</div>
                <div className="wonderful-day">Truly a wonderful day</div>
              </div>
            </div>

            <button className="click-button" onClick={() => navigate('/cute')}>
              Click to be cute
            </button>

            <div className="panda-text">
              Gentle as a Panda, Fierce when needed, always adorable
            </div>
          </div>
        </div>


        {/* Thank You Section (Left) */}
        <div className="thank-you-section">
          <div className="thank-you-text">
            Thank you for being the insanely talented and kind person that you are.
          </div>
          <div className="rectangle1"></div>
        </div>

        {/* HAPPY Text (Right) */}
        <div className="happy-text">HAPPY</div>

        {/* BIRTHDAY Text (Center) */}
        <div className="birthday-text">BIRTHDAY</div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <div className="bottom-left">
            <div className="blessings-text">
              A thousand blessings for all that makes you yourself
            </div>
            <div className="neutral-pastel-text">
              In a world of neutrals, you are the pastel that makes everything glow.
            </div>
          </div>
          <div className="bottom-right">
            <div className="quote-text">
              In the End, it's not the years of life that counts, it's the life in your years.
            </div>
            <div className="quote-author">-Abraham Lincoln"</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pro;