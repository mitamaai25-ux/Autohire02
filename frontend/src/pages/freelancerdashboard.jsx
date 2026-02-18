import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FreelancerDashboard() {
  const [projects, setProjects] = useState([]);
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("available");
  const [bidding, setBidding] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (!user || user.role !== "freelancer") {
      navigate("/login");
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const [projectsRes, bidsRes] = await Promise.all([
        fetch("/api/projects/available", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("/api/bids/my-bids", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      if (projectsRes.ok) {
        const projectsData = await projectsRes.json();
        setProjects(projectsData);
      }

      if (bidsRes.ok) {
        const bidsData = await bidsRes.json();
        setBids(bidsData);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePlaceBid = async (projectId) => {
    if (!bidAmount || bidAmount <= 0) {
      alert("Please enter a valid bid amount");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/bids/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          projectId,
          bidAmount: parseFloat(bidAmount),
        }),
      });

      if (response.ok) {
        const newBid = await response.json();
        setBids([newBid, ...bids]);
        setBidding(null);
        setBidAmount("");
        alert("Bid placed successfully!");
      } else {
        alert("Failed to place bid");
      }
    } catch (err) {
      console.error("Error placing bid:", err);
      alert("Error placing bid");
    }
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Freelancer Dashboard</h1>
        <p>Welcome, {user.name}</p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-tabs">
          <button
            className={`tab-btn ${activeTab === "available" ? "active" : ""}`}
            onClick={() => setActiveTab("available")}
          >
            Available Projects
          </button>
          <button
            className={`tab-btn ${activeTab === "mybids" ? "active" : ""}`}
            onClick={() => setActiveTab("mybids")}
          >
            My Bids ({bids.length})
          </button>
        </div>

        <div className="dashboard-main">
          {loading ? (
            <p>Loading...</p>
          ) : activeTab === "available" ? (
            <div className="projects-section">
              <h2>Available Projects</h2>
              {projects.length === 0 ? (
                <p>No projects available at the moment.</p>
              ) : (
                <div className="projects-list">
                  {projects.map((project) => (
                    <div key={project._id} className="project-card">
                      <h3>{project.title}</h3>
                      <p>{project.description.substring(0, 150)}...</p>
                      <div className="project-meta">
                        <span className="badge">Budget: ${project.budget}</span>
                        <span className="badge">{project.category}</span>
                      </div>
                      {bidding === project._id ? (
                        <div className="bid-form">
                          <input
                            type="number"
                            placeholder="Your bid amount"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                            min="0"
                            step="10"
                          />
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => handlePlaceBid(project._id)}
                          >
                            Place Bid
                          </button>
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => {
                              setBidding(null);
                              setBidAmount("");
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => setBidding(project._id)}
                        >
                          Place Bid
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="bids-section">
              <h2>My Bids</h2>
              {bids.length === 0 ? (
                <p>You haven't placed any bids yet.</p>
              ) : (
                <div className="bids-list">
                  {bids.map((bid) => (
                    <div key={bid._id} className="bid-card">
                      <h3>{bid.projectId?.title || "Project"}</h3>
                      <p>Your bid: ${bid.bidAmount}</p>
                      <span className={`status-badge ${bid.status}`}>
                        {bid.status.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FreelancerDashboard;
