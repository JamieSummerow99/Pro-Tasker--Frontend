import { useEffect, useState } from "react";
import axios from "axios";

function ProjectCard() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetch projects on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Submit new project
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/projects", {
        title,
        description,
      });

      setProjects((prev) => [...prev, res.data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">📁 Project Feed</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full mb-3 p-2 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Create Project
        </button>
      </form>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={project._id || index}
            className="border border-gray-200 p-4 rounded-md bg-gray-50"
          >
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;