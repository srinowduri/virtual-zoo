import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import AnimalsList from './components/Animals/AnimalsList';
import BirdsList from './components/Birds/BirdsList';
import ReptilesList from './components/Reptiles/ReptilesList';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import HomeBackground from './assets/background.png';
import AnimalBackground from './assets/AnimalBackground.png';

function AppLayout({ showLogin, toggleLogin, handleLoginSuccess }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.backgroundImage = `url(${HomeBackground})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundColor = ''; 
    } else {
      document.body.style.backgroundImage = ''; 
    }
    switch(location.pathname) {
      // case '/' :
      //   // document.body.style.background = '#fffbe6';
      //   backgroundImage = `url(${HomeBackground})`;
      //   break;
      case '/animals' : 
        document.body.style.backgroundImage = `url(${AnimalBackground})`;
        break;
      case '/birds' :
        document.body.style.backgroundColor = '#e0f7ff';
        break;
      case '/reptiles' :
        document.body.style.backgroundColor = '#ffe0e0';
        break;
      default:
        document.body.style.backgroundColor = '#ffffff'; 
    }

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundColor = '';
    };

  }, [location.pathname]);

  return (
    <div className="App">
      <Sidebar />
      <button className="login-btn" onClick={toggleLogin}>
        {showLogin ? 'Close Login' : 'Login'}
      </button>
      <Header />
      {showLogin ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animals" element={<AnimalsList />} />
            <Route path="/birds" element={<BirdsList />} />
            <Route path="/reptiles" element={<ReptilesList />} />
          </Routes>
        </main>
      )}
    </div>
  );
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setShowLogin(prev => !prev);
  }

  const handleLoginSuccess = () => {
    // setIsLoggedIn(true);     
    setShowLogin(false);     
  };
  return (
    <Router>
      <AppLayout
        showLogin={showLogin}
        toggleLogin={toggleLogin}
        handleLoginSuccess={handleLoginSuccess}
      />
    </Router>
  );
}

export default App;
