import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Dashboard from '../component/Dashboard';

function WelcomePage() {
  const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/dashboard');
    };
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to the App</h1>
      <p>This is the main application page.</p>
      <p> To get started with your Pro Tasker🌠, <a href="/dashboard">click here</a> to continue into the app!</p>
    </div>
  );
}

export default WelcomePage;