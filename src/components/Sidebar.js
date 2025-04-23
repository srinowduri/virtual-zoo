import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleSidebar}>Home</Link>
        <Link to="/animals" onClick={toggleSidebar}>Animals</Link>
        <Link to="/birds" onClick={toggleSidebar}>Birds</Link>
        <Link to="/reptiles" onClick={toggleSidebar}>Reptiles</Link>
      </div>
    </>
  );
};

export default Sidebar;
