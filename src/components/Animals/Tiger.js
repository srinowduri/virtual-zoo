import React, { useRef } from 'react';
import TigerGif from '../../assets/tiger_gif.gif';
import TigerRoar from '../../assets/bengal-tiger-roar.mp3';
import './Tiger.css';

const Tiger = () => {
  const audioRef = useRef(new Audio(TigerRoar));

  const playRoar = () => {
    audioRef.current.play();
  };

  const stopRoar = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="tiger-container">
      <div className="tiger-info">
        <h2>Bengal Tiger</h2>
        <p>
          The Bengal Tiger is the most numerous tiger subspecies. It is found primarily in India,
          with smaller populations in Bangladesh, Nepal, Bhutan, China, and Myanmar.
        </p>
        <ul>
          <li>🧬 Scientific Name: <em>Panthera tigris tigris</em></li>
          <li>🌍 Habitat: Grasslands, mangroves, and forests</li>
          <li>🥩 Diet: Carnivorous — deer, wild boars, and more</li>
          <li>🧡 Status: Endangered</li>
        </ul>
      </div>
      <div className="tiger-right">
        <img src={TigerGif} alt="tiger" className="tiger-img" />
        <div className="tiger-buttons">
          <button onClick={playRoar} className="roar-button">Roar</button>
          <button onClick={stopRoar} className="stop-button">Stop</button>
        </div>
      </div>
    </div>
  );
};

export default Tiger;
