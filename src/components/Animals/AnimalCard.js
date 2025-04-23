import React, { useRef, useEffect } from "react";
import './AnimalCard.css';


const AnimalCard = ({ animal }) => {
    const audioRef = useRef(null);
    
    useEffect(() => {
        audioRef.current = new Audio(`/assets/${animal.sound}`);
        audioRef.current.loop = true; 
        return () => {
            
            audioRef.current.pause();
            audioRef.current = null;
        };
    }, [animal.sound]);
      const playRoar = () => {
        if (audioRef.current) {
            audioRef.current.play();
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
                    <p><strong>Description:</strong>{animal.description}</p>
                    <p><strong>Scientific name:</strong>{animal.scientificName}</p>
                    <p><strong>Habitat</strong>{animal.habitat}</p>
                    <p><strong>Diet:</strong> {animal.diet}</p>
                    <p><strong>Lifespan:</strong> {animal.lifespan}</p>
                    <p><strong>Fun Fact:</strong> {animal.funFact}</p>

                </div>
            
            <div className="item-right">
                <img src={animal.image} alt="animal"  className="item-img"/>
                {/* <audio ref={audioRef} src={`/assets/${animal.sound}`} /> */}
                <div className="item-buttons">
          <button onClick={playRoar} className="roar-button">Roar</button>
          <button onClick={stopRoar} className="stop-button">Stop</button>
        </div>
            </div>
        </div>


    )
}

export default AnimalCard;