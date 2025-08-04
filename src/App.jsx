import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./component/Navbar";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import FeedPage from "./pages/Feed";
import WelcomePage from "./pages/Welcome";
import ErrorPage from "./pages/Error";
imopt


import "./App.css";
 
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/projects" element={<FeedPage />} />
        
        <Route path="/welcome" element={<WelcomePage />}/>
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
  
}
  

export default App;
