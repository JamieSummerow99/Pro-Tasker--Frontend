import React, { useEffect, useState } from "react";
import ProjectCard from "../component/ProjectCard";


import { backendClient } from "../client/backendClient"; // Axios instance or fetch wrapper

function FeedPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await backendClient.get("/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Error loading projects", err);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div>
    
      <h1 style={{ textAlign: "center" }}>Your Projects</h1>
      <div style={{ padding: "20px" }}>
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default FeedPage;
