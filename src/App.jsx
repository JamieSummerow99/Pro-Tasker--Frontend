import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Navbar from "./component/Navbar";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import FeedPage from "./pages/Feed";
import WelcomePage from "./pages/Welcome";
// Removed unused WelcomePage import

import "./App.css";
 
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/welcome" element={<WelcomePage />}/>
      </Routes>
    </BrowserRouter>
  );
  
}
  

export default App;
