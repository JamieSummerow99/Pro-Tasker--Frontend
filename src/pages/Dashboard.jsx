import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Welcome to the Pro Tasker</h1>
      <p>This is the main application page.</p>
      <p>Here you will be able to view your tasks and projects.Create,delete, and modify priority.</p>
   
    </div>
  );


}







export default DashboardPage;
