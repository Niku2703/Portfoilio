function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function submitForm(event) {
  event.preventDefault();
  alert("Thank you for reaching out! I will get back to you soon.");
}

// DARK MODE TOGGLE
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// PROJECT FILTERING
function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    const match = category === "all" || project.dataset.category === category;
    project.style.display = match ? "block" : "none";
  });
}
