import React from 'react'
import '../App.css';
import Tigerlogo from '../assets/TigerLogo.png';


const Header = () => {
   
    
  return (
    <div>
        <header className="App-header">
          <img src={Tigerlogo} className='App-logo' alt='tiger' /> 
          
        </header>
        
    </div>
  )
}

export default Header;