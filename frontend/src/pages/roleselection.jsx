import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = async (selectedRole) => {
    setRole(selectedRole);
    setLoading(true);

    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const token = localStorage.getItem("token");

      const response = await fetch("/api/auth/update-role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role: selectedRole }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert("Failed to update role");
        setLoading(false);
        return;
      }

      localStorage.setItem("user", JSON.stringify({ ...user, role: selectedRole }));

      setTimeout(() => {
        if (selectedRole === "client") {
          navigate("/client");
        } else {
          navigate("/freelancer");
        }
      }, 500);
    } catch (err) {
      alert("Error updating role");
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="role-container">
      <div className="role-selection">
        <h1>Choose Your Role</h1>
        <p>Select how you'd like to use AutoHire</p>

        <div className="role-cards">
          <div
            className={`role-card ${role === "client" ? "selected" : ""}`}
            onClick={() => handleRoleSelect("client")}
            style={{ pointerEvents: loading ? "none" : "auto" }}
          >
            <div className="role-icon">💼</div>
            <h2>I'm a Client</h2>
            <p>I want to hire talented freelancers for my projects</p>
            <ul>
              <li>Post projects</li>
              <li>Find top talent</li>
              <li>Manage projects</li>
            </ul>
            <button className="btn btn-primary">Select</button>
          </div>

          <div
            className={`role-card ${role === "freelancer" ? "selected" : ""}`}
            onClick={() => handleRoleSelect("freelancer")}
            style={{ pointerEvents: loading ? "none" : "auto" }}
          >
            <div className="role-icon">⭐</div>
            <h2>I'm a Freelancer</h2>
            <p>I want to find projects and build my portfolio</p>
            <ul>
              <li>Browse projects</li>
              <li>Showcase skills</li>
              <li>Earn money</li>
            </ul>
            <button className="btn btn-primary">Select</button>
          </div>
        </div>

        {loading && <div className="loading-indicator">Setting up your account...</div>}
      </div>
    </div>
  );
}

export default RoleSelection;
