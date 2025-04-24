import React, { useEffect } from 'react';
import './Animals.css';
import { useDispatch, useSelector } from 'react-redux';
import AnimalCard from './AnimalCard';
import FunMonkey from '../../assets/fun-monkey.gif';
import { fetchAnimals, setSelectedAnimal } from '../../redux/animalSlice';

const AnimalsList = () => {
  // const [animals, setAnimals] = useState([]);
  // const [selectedAnimal, setSelectedAnimalLocal] = useState(null);
  const dispatch = useDispatch();

  const { animals, selectedAnimal, loading, error } = useSelector((state) => state.animals);

  // console.log('Animals from Redux:', animals);
  // useEffect(() => {
  //   // Fetch animals data from the backend
  //   const fetchAnimals = async () => {
  //     try {
  //       const response = await fetch('http://localhost:4000/api/animals');
  //       const data = await response.json();
  //       setAnimals(data);
  //     } catch (error) {
  //       console.error('Error fetching animal data:', error);
  //     }
  //   };

  //   fetchAnimals();
  // }, []);

  // const handleAnimalClick = (animal) => {
  //   // Set the selected animal in local state
  //   setSelectedAnimalLocal(animal);

  //   // Dispatch the selected animal to Redux store
  //   dispatch(setSelectedAnimal(animal));
  // }; 


  useEffect(() => {
    console.log('Dispatching fetchAnimals...');
    if (Object.keys(animals).length === 0) {
      dispatch(fetchAnimals());
    }
  }, [dispatch, animals]);

  const handleAnimalClick = (animal) => {
    dispatch(setSelectedAnimal(animal));

  };

  // console.log('Animals from Redux:', animals);

  return (
    <div>
      <h1 className="main-title">🦁 Animal Kingdom</h1>
      <h4 className="main-line">Here you'll discover amazing facts about animals!</h4>
      <div className="animals-wrapper">
        <div className="animal-buttons">
          {loading && <p>Loading animals...</p>}
          {error && <p>Error: {error}</p>}
          {Object.keys(animals).length > 0 ? (
            <>
              {/* <p>Rendering {Object.keys(animals).length} animals:</p> */}
              {Object.values(animals).map((animal, index) => (
                <button
                  key={index}
                  onClick={() => handleAnimalClick(animal)}
                  className="animal-button"
                >
                  {animal.name}
                </button>
              ))}
            </>
          ) : (
            <p>No animals available or still loading...</p>
          )}
        </div>
        <div className="animal-details">
          {selectedAnimal ? (
            <AnimalCard animal={selectedAnimal} />
          ) : (
            <h2>Select an animal to view more info 🐾 <img src={FunMonkey} alt='monkey' className='fmon-img' /></h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimalsList;
