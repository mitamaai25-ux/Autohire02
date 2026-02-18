function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function scrollToRoles() {
  document.getElementById("roles").scrollIntoView({
    behavior: "smooth"
  });
}
