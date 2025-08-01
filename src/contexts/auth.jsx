import axios from "axios";

import { createContext, useContext, useState, useEffect } from "react";



axios.defaults.baseURL = "http://localhost:3000";


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));


const getCurrentUser = async () => {
  try {
    const response = await axios.get("/api/users/me");
    setUser(response.data);
  } catch (error) {
    console.error(error);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setToken(null);
  }
};

useEffect(() => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    getCurrentUser();
  }
},[]);


  


const login = async (credentials) => {
  
    const response = await axios.post("/api/users/login", credentials );

    if(!response.data) {
      throw new Error("Login Failed");
    }

    const { token, user: userData } = response.data;
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setToken(token);
    setUser(userData);
    return userData;
  };


const register = async (userData) => {
  const response = await axios.post("/api/users/register", userData );  

  if(!response.data) {
    throw new Error("Registration failed");
  }

  const { token, user: newUser } = response.data;
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  setToken (token);
  setUser(newUser);
  return newUser;
};

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setToken(null);
    setUser(null);
  };



  //whats included

 const value = {
  user,
  token,
  login,
  register,
  logout,
 };

 return (
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
 );

};

export default AuthContext;