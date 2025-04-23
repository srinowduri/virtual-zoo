import React from 'react'
import '../components/Home.css';


const Home = () => {
  return (
    <div className='container'>
      <div className='card'>
        <h1>🐾 Virtual Zoo</h1>
        <h2 className="subtitle">Wild Learning Hub</h2>
        <p>
          Explore the animal kingdom like never before! Virtual Zoo is an interactive learning
          platform where kids and animal lovers can:
        </p>

        <ul>
          <li>Discover fascinating facts about wild animals</li>
          <li>Hear real animal sounds</li>
          <li>View vivid images and fun animations</li>
          <li>Learn in a playful and engaging environment</li>
        </ul>

        <button className="cta-button">Start Exploring Now!</button>
      </div>
    </div>
  )
}

export default Home;