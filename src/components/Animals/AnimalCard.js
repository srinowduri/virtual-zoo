import React, { useRef, useEffect } from "react";
import './AnimalCard.css';

const AnimalCard = ({ animal }) => {
    console.log("Animal data:", animal);
  const audioRef = useRef(null);

  useEffect(() => {
    if (animal.sound) {
        audioRef.current = new Audio(animal.sound);
        // const audio = new Audio(animal.sound);
        // console.log("Playing sound:", animal.sound);
        // audio.play().catch(err => console.error("Audio error:", err));
      audioRef.current.loop = true;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [animal.sound]);

  const playRoar = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.error("Audio play error:", err));
    }
  };

  const stopRoar = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="item-container">
      <div className="item-info">
        <h2>{animal.name}</h2>
        <p><strong>Description:</strong> {animal.description}</p>
        <p><strong>Scientific name:</strong> {animal.scientificName}</p>
        <p><strong>Habitat:</strong> {animal.habitat}</p>
        <p><strong>Diet:</strong> {animal.diet}</p>
        <p><strong>Lifespan:</strong> {animal.lifespan}</p>
        <p><strong>Fun Fact:</strong> {animal.funFact}</p>
      </div>

      <div className="item-right">
      <img src={animal.image} alt={animal.name} className="item-img" />
        <div className="item-buttons">
          <button onClick={playRoar} className="roar-button">Roar</button>
          <button onClick={stopRoar} className="stop-button">Stop</button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;