import React, { useState } from 'react'
import './Animals.css';
// import Tiger from './Tiger';
// import Elephant from './Elephant';
// import Lion from './Lion';
import animals from '../../data/animals.json';
import AnimalCard from './AnimalCard';
import FunMonkey from '../../assets/fun-monkey.gif';

const AnimalsList = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    const handleAnimalClick = (animalKey) => { 
      console.log("Selected animal:", animals[animalKey]);
      console.log("Animal data:", animals[animalKey]);
      setSelectedAnimal(animals[animalKey]);
    }

    // const renderAnimal = () => {
    //     switch(selectedAnimal) {
    //         case 'tiger':
    //             return <Tiger />;
    //           case 'elephant':
    //             return <Elephant />;
    //           case 'lion':
    //             return <Lion />;
    //           default:
    //             return <div>Select an animal to view more info 🐾</div>;
    //     }
    // }
  return (
    <div>
        <h1 className='main-title'>🦁 Animal Kingdom</h1>
        <h4 className='main-line'>Here you'll discover amazing facts about animals!</h4>
        <div className="animals-wrapper">
      <div className="animal-buttons">
        {/* <button onClick={() => setSelectedAnimal('tiger')}>Tiger</button>
        <button onClick={() => setSelectedAnimal('elephant')}>Elephant</button>
        <button onClick={() => setSelectedAnimal('lion')}>Lion</button> */}

         {Object.keys(animals).map((animalKey) => (
                        <button 
                            key={animalKey} 
                            onClick={() => handleAnimalClick(animalKey)}
                            className="animal-button"
                        >
                            {animals[animalKey].name}
                        </button>
                    ))}
      </div>
      <div className="animal-details">
        {/* {renderAnimal()} */}
        {selectedAnimal ? ( <AnimalCard animal={selectedAnimal} /> ) : 
            ( <h2>Select an animal to view more info 🐾 <img src={FunMonkey} alt='monkey' className='fmon-img'/></h2>  ) 
        }
      </div>
    </div>
        {/* <Tiger /> */}
    </div>
  )
}

export default AnimalsList;