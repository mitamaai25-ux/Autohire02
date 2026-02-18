* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #6366f1;
  --secondary-color: #ec4899;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --bg-light: #f9fafb;
  --bg-white: #ffffff;
  --border-color: #e5e7eb;
  --success-color: #10b981;
  --error-color: #ef4444;
  --warning-color: #f59e0b;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-dark);
  background-color: var(--bg-light);
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Navbar Styles */
.navbar {
  background-color: var(--bg-white);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  cursor: pointer;
  transition: color 0.3s ease;
}

.navbar-logo:hover {
  color: var(--secondary-color);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: var(--text-dark);
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 1rem;
  padding: 0;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link-primary {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;
}

.nav-link-primary:hover {
  background-color: var(--secondary-color);
  color: white;
}

.nav-link-logout {
  color: var(--error-color);
}

.nav-user {
  color: var(--text-light);
  font-size: 0.875rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-dark);
}

/* Buttons */
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-secondary {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background-color: var(--primary-color);
  color: white;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  margin-right: 0.5rem;
}

/* Home Page */
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 4rem 2rem;
  border-radius: 0.75rem;
  text-align: center;
  margin-bottom: 4rem;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-buttons .btn {
  font-size: 1.1rem;
  padding: 0.875rem 2rem;
}

.features {
  margin-top: 4rem;
}

.features h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-dark);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--bg-white);
  padding: 2rem;
  border-radius: 0.75rem;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.feature-card p {
  color: var(--text-light);
  line-height: 1.6;
}

/* Auth Pages */
.auth-container {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
}

.auth-form {
  background: var(--bg-white);
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.auth-form h1 {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--text-dark);
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-dark);
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.error-message {
  background-color: #fee;
  color: var(--error-color);
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  border-left: 4px solid var(--error-color);
}

.auth-footer {
  text-align: center;
  margin-top: 1.5rem;
  color: var(--text-light);
}

.auth-footer a {
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
}

.auth-footer a:hover {
  text-decoration: underline;
}

/* Role Selection */
.role-container {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
}

.role-selection {
  width: 100%;
  max-width: 900px;
}

.role-selection h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.role-selection p {
  text-align: center;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.role-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.role-card {
  background: var(--bg-white);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 2px solid transparent;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.role-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

.role-card.selected {
  border-color: var(--primary-color);
  background-color: rgba(99, 102, 241, 0.05);
}

.role-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.role-card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.role-card p {
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.role-card ul {
  list-style: none;
  margin-bottom: 1.5rem;
  text-align: left;
  padding-left: 1rem;
}

.role-card li {
  color: var(--text-light);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.role-card li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-color);
  font-weight: bold;
}

.loading-indicator {
  text-align: center;
  margin-top: 2rem;
  color: var(--primary-color);
  font-weight: 600;
}

/* Dashboard */
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.dashboard-header {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  margin-bottom: 2rem;
}

.dashboard-header h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.dashboard-header p {
  opacity: 0.95;
}

.dashboard-content {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
}

.dashboard-sidebar {
  background: var(--bg-white);
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: fit-content;
}

.dashboard-sidebar .btn {
  width: 100%;
  margin-bottom: 1rem;
}

.dashboard-main {
  background: var(--bg-white);
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.dashboard-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--border-color);
}

.tab-btn {
  background: none;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-light);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  margin-bottom: -2px;
}

.tab-btn:hover {
  color: var(--text-dark);
}

.tab-btn.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}

/* Projects */
.projects-section h2,
.bids-section h2 {
  margin-bottom: 1.5rem;
  color: var(--text-dark);
}

.projects-list,
.bids-list {
  display: grid;
  gap: 1.5rem;
}

.project-card,
.bid-card {
  background: var(--bg-light);
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;
}

.project-card:hover,
.bid-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateX(5px);
}

.project-card h3,
.bid-card h3 {
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.project-card p,
.bid-card p {
  color: var(--text-light);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.badge {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.status-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
}

.status-badge.pending {
  background-color: rgba(249, 158, 11, 0.2);
  color: #d97706;
}

.status-badge.accepted {
  background-color: rgba(16, 185, 129, 0.2);
  color: #059669;
}

.status-badge.rejected {
  background-color: rgba(239, 68, 68, 0.2);
  color: #991b1b;
}

/* Project Form */
.project-form-container {
  background: var(--bg-light);
  padding: 2rem;
  border-radius: 0.75rem;
  margin-bottom: 2rem;
}

.project-form-container h2 {
  margin-bottom: 1.5rem;
}

.project-form-container form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-form-container .btn {
  width: 100%;
}

/* Bid Form */
.bid-form {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.bid-form input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
}

.bid-form input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-container {
    padding: 1rem;
  }

  .menu-toggle {
    display: block;
  }

  .nav-menu {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: var(--bg-white);
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    display: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-menu.active {
    display: flex;
  }

  .hero-content h1 {
    font-size: 1.75rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .dashboard-content {
    grid-template-columns: 1fr;
  }

  .dashboard-sidebar {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  .dashboard-sidebar .btn {
    flex: 1;
    margin-bottom: 0;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .auth-form {
    max-width: 100%;
  }

  .role-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero-content h1 {
    font-size: 1.5rem;
  }

  .dashboard {
    padding: 1rem;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  .project-form-container {
    padding: 1rem;
  }
}
