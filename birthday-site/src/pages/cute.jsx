import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cute.css';
import Firework from '../assets/fireworks.gif';
import butterfly from '../assets/butterfly.gif';
import panda from "../assets/dancingPanda.gif";
import mouse from "../assets/noodleMouse.gif";
import hearts from "../assets/Hearts.gif";
import stars from "../assets/Stars.gif";

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

      {/* Semicircle Text and Fireworks Container */}
      <div className="semi-circle-container">
        <svg viewBox="0 0 1000 500" width="100%" height="100%">
          <defs>
            <path
              id="semiPath"
              d="M 100,400 A 400,400 0 0 1 900,400"
              fill="transparent"
            />
          </defs>

          <text className="cute-birthday-text" fontSize="48">
            <textPath
              href="#semiPath"
              startOffset="50%"
              textAnchor="middle"
            >
              Happy Birthday Siva
            </textPath>
          </text>
        </svg>
        <img src={Firework} alt="fireworks" className="fireworks" />
      </div>


      

      <div className="initial-bottom">
        <img src={butterfly} alt="flying butterflies" className="butterfly"/>
        <div className="happy-20">
          Happy 20th birthday to the prettiest person I know
        </div>
        <img src={panda} alt="Dancing panda" className="pandas"/>
      </div>

      <div className="animal">
        Found this gif while I was trying to design the site, this is you as an animal
      </div>
      
      {/*The noodle mouse section*/}
      <img src={mouse} alt="A mouse eating noodles" className='noodles'/>
      <div className='noodleMouse'>
        literally you
      </div>

      {/*Middle Center Text*/}
      <div className="you">
        You are quite honestly the kind of person, who, when life gives her lemons, looks awkwardly at life and smiles because you can’t really decide what exactly you wish to do. Thankfully your awkward smiles are one of the prettiest things about you. That works out pretty well.
        I hope as the years continue, you will still smile at the things that trouble you and find your own way.
      </div>

    <div className="real-bottom">
      {/* Left side */}
      <div className="left-section">
        <div className="hearts">
          A bunch of hearts cause why not
        </div>
        <img src={hearts} alt="flying hearts" className='heart-gif'/>
      </div>

      {/* Center button */}
      <button className="cute-button" onClick={() => navigate('/pro')}>
        Click to be Professional
      </button>

      {/* Right side */}
      <div className="right-section">
        <img src={stars} alt="rotating stars" className="stars"/>
        <div className="song-selection">
          I hope you enjoy my song selection, truly one of the greatest songs of all time
        </div>
      </div>
    </div>


    </div>
  );
}

export default Cute;