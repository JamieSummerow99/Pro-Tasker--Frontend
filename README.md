🧠 Pro-Tasker – Full-Stack Task Management App
Pro-Tasker is a full-featured task management web app built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to securely register and log in, create and manage multiple projects, and organize tasks within each project. With clean design and intuitive functionality, Pro-Tasker helps users stay productive and organized.

🔐 Authentication & Security
User Registration & Login: Secured with JWT-based authentication

Password Protection: Passwords are hashed using bcrypt before storage

Protected Routes: Frontend and backend routes are both secured and user-specific

🧩 Frontend (React + Vite)
React (Vite) Setup: Fast development with hot-reloading

Component-Based Structure: Reusable components like <Navbar />, <ProjectCard />, <Tasks />, and layout wrappers

State Management: Redux Toolkit (or Context API, depending on your setup)

Routing: React Router DOM for navigating between pages (Home, Login, Register, Projects)

Form Handling: Controlled components with local state

Responsive UI: Styled using plain CSS (no frameworks like Tailwind or Bootstrap)

Key Pages
Home Page: Displays user info and dashboard overview

Projects Page: List of all projects created by the user

Project Details Page: View and manage tasks inside each project

Login / Register Pages: Auth pages with form validation and error handling

⚙️ Backend (Node.js + Express)
API: RESTful endpoints to manage users, projects, and tasks

MongoDB + Mongoose: Document-based storage with schemas for User, Project, and Task

CORS & dotenv: Environment-safe configuration and cross-origin support

Main Routes
/api/auth/ — Register & Login (JWT auth)

/api/projects/ — CRUD for projects

/api/tasks/ — CRUD for tasks within projects

🧪 Features
✅ JWT-based user authentication

✅ Create, read, update, delete (CRUD) functionality for Projects and Tasks

✅ Task status (complete/incomplete) toggling

✅ Access control – only project owners can modify their content

✅ Clean and responsive UI with error handling

🧠 Challenges Overcome
This project was a culmination of everything I’ve learned in 17 weeks — merging frontend and backend development, handling authentication, managing state, and deploying a full-stack app. Debugging backend connection issues and synchronizing data across the app pushed me to problem-solve and revisit concepts from multiple modules.

🌐 Tech Stack Overview
