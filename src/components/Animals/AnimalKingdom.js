import React from "react";
import animals from '../../data/animals.json';
import AnimalCard from "./AnimalCard";

const  AnimalKingdom = () => {
    return(
        <div className="animal-grid">
            {Object.keys(animals).map((key) => (
                <AnimalCard key={key} animal={animals[key]} />
            ))}
        </div>
    );
}

export default AnimalKingdom;