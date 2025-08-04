import { useState, useEffect } from "react";
import { backendClient } from "../client/backendClient";
import ProjectCard from "../component/ProjectCard";

function FeedPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectCard, setProjectCard] = useState([]);

  useEffect(() => {
    const fetchProjectCard = async () => {
      try {
        const res = await backendClient.get("/projects", {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("pro-tasker-token")
            )}`,
          },
        });
        setProjectCard(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjectCard();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await backendClient.post(
        "/projects",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("pro-tasker-token")
            )}`,
          },
        }
      );

      setProjectCard((prev) => [...prev, res.data]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <main>
      <h1>Projects</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter project title"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
        />
        <input type="submit" value="Submit" />
      </form>

      <div>
        {projectCard.map((card) => (
          <ProjectCard key={card.id} {...card} />
        ))}
      </div>
    </main>
  );
}

export default FeedPage;
