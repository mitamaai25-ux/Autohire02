import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ClientDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPostForm, setShowPostForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    category: "",
    deadline: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user || user.role !== "client") {
      navigate("/login");
      return;
    }
    fetchProjects();
  }, [navigate]);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/projects/my-projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePostProject = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/projects/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newProject = await response.json();
        setProjects([newProject, ...projects]);
        setFormData({
          title: "",
          description: "",
          budget: "",
          category: "",
          deadline: "",
        });
        setShowPostForm(false);
        alert("Project posted successfully!");
      } else {
        alert("Failed to post project");
      }
    } catch (err) {
      console.error("Error posting project:", err);
      alert("Error posting project");
    }
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Client Dashboard</h1>
        <p>Welcome, {user.name}</p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-sidebar">
          <button
            className="btn btn-primary"
            onClick={() => setShowPostForm(!showPostForm)}
          >
            {showPostForm ? "Cancel" : "Post New Project"}
          </button>
        </div>

        <div className="dashboard-main">
          {showPostForm && (
            <div className="project-form-container">
              <h2>Post a New Project</h2>
              <form onSubmit={handlePostProject}>
                <div className="form-group">
                  <label htmlFor="title">Project Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter project title"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe your project"
                    rows="5"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="budget">Budget ($)</label>
                    <input
                      type="number"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter budget"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="web-design">Web Design</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="writing">Writing</option>
                      <option value="graphics">Graphics Design</option>
                      <option value="marketing">Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="deadline">Deadline</label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Post Project
                </button>
              </form>
            </div>
          )}

          <div className="projects-section">
            <h2>My Projects ({projects.length})</h2>

            {loading ? (
              <p>Loading projects...</p>
            ) : projects.length === 0 ? (
              <p>No projects yet. Start by posting a new project!</p>
            ) : (
              <div className="projects-list">
                {projects.map((project) => (
                  <div key={project._id} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description.substring(0, 100)}...</p>
                    <div className="project-meta">
                      <span className="badge">Budget: ${project.budget}</span>
                      <span className="badge">{project.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
