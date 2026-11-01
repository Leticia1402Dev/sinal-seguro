const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelectorAll(".violence-item").forEach(button => {
  button.addEventListener("click", () => {
    const wasActive = button.classList.contains("active");
    document.querySelectorAll(".violence-item").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".violence-detail").forEach(detail => detail.classList.remove("show"));
    if (!wasActive) {
      button.classList.add("active");
      document.getElementById(`detail-${button.dataset.info}`).classList.add("show");
    }
  });
});

document.getElementById("dismissNotice").addEventListener("click", () => {
  document.querySelector(".announcement").remove();
});

document.getElementById("closeSafety").addEventListener("click", () => {
  document.getElementById("safetyNote").remove();
});
