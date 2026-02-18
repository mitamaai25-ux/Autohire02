const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "index.html";
}

// Load AI Job Matches
async function loadMatches() {
  try {
    const res = await fetch("http://localhost:5000/api/ai/match", {
      headers: {
        "Authorization": token
      }
    });

    const jobs = await res.json();

    const container = document.getElementById("jobMatches");
    container.innerHTML = "<h3>AI Matched Jobs</h3>";

    jobs.forEach(item => {
      container.innerHTML += `
        <div class="feature-card">
          <h4>${item.job.title}</h4>
          <p>Match: ${item.matchPercentage}%</p>
        </div>
      `;
    });

  } catch (err) {
    console.error(err);
  }
}

loadMatches();

// Chatbot UI
async function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value;

  if (!message) return;

  const chatBox = document.getElementById("chatBox");

  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

  const res = await fetch("http://localhost:5000/api/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  const data = await res.json();

  chatBox.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;

  input.value = "";
}

// Logout
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}
