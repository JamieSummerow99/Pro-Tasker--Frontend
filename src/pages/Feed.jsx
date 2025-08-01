import { useState, useEffect } from "react";
import { backendClient } from "../client/backendClient";

function FeedPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectCards, setProjectCards] = useState([]);

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
        setProjectCards(res.data);
      } catch (error) {
        console.log(error);
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

      // Add new project to the existing feed instantly
      setProjectCards((prev) => [...prev, res.data]);

      // Clear form fields
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Projects</h1>

      <form onClick={handleSubmit}>
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
          placeholder="Enter a description of your project"
        />
        <button type="submit">Submit</button>
      </form>

      {/* Render project feed */}
      <div style={{ marginTop: "20px" }}>
        {projectCards.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeedPage;
