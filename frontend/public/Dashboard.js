const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "index.html";
}

// Load AI Job Matches
function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value;

  if (!message) return;

  socket.emit("sendMessage", {
    roomId: roomId,
    message: message
  });

  input.value = "";
}

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

// Connect socket with JWT
const socket = io("http://localhost:5000", {
  auth: {
    token: token
  }
});

// Join a room (example room)
const roomId = "generalRoom";
socket.emit("joinRoom", roomId);

// Listen for incoming messages
socket.on("receiveMessage", (data) => {
  const chatBox = document.getElementById("chatBox");

  chatBox.innerHTML += `
    <p>
      <strong>${data.sender === getUserId() ? "You" : "Other"}:</strong>
      ${data.message}
    </p>
  `;
});

// Chatbot UI

// Logout
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}
