import { useState } from "react";
import { backendClient } from "../client/backendClient";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await backendClient.post("/users/register", formData);
      console.log(res);

      localStorage.setItem("social-app-token", JSON.stringify(res.data.token));
    } catch (error) {
      console.log(error);
    }
    next(
      // Redirect to login pag e after successful registration
      navigate("/login")
    );
  };

  return (
    <main>
      <h1>Regististration Page </h1>
      <p>Register to create an account!!!</p>

      <form container="registration" onSubmit={handleSubmit} method="POST">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <input type="submit" value="Register"
        onclick="{this.onClickHandler}" />
      </form>
    </main>
  );
}
export default RegisterPage;
