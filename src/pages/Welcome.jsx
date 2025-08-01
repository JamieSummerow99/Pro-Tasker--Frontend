import React from 'react';
import { useNavigate } from 'react-router-dom';


//
function WelcomePage() {
  const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/projects');
    };
  return (
    <div className="App">
      
      <h2>Welcome to the Pro-Task App</h2>
      <p>This is the main application page.</p>
      <p> To get started with your Pro Tasker🌠, <a href="/projects">click here</a> to continue into the app!</p>
    </div>
  );
}
//localhost:5173/welcome
// This page serves as a welcome page for the user after login or registration
export default WelcomePage;