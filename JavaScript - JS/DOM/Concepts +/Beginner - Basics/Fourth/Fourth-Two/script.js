// Toggle the visibility of an element (hide/show) using a button.

const container = document.querySelector("#container");
const para = document.querySelector("#para");
const toggleBtn = document.querySelector("#toggleBtn");

// Styling
if (container) {
  container.style.backgroundColor = "teal";
  container.style.color = "wheat";
  container.style.width = "100%";
  container.style.height = "97.8vh";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
}

if (toggleBtn) {
  toggleBtn.style.fontSize = "21px";
  toggleBtn.style.letterSpacing = "8px";
  toggleBtn.style.backgroundColor = "wheat";
  toggleBtn.style.color = "teal";
  toggleBtn.style.borderRadius = "3px 8px";
  para.style.fontSize = "28px";
  para.style.width = "38vw";
}

// Functionality
toggleBtn.addEventListener("mouseover", () => {
  toggleBtn.style.cursor = "pointer";
});

toggleBtn.addEventListener("click", () => {
  const isHidden = para.style.visibility === "hidden";
  para.style.visibility = isHidden ? "visible" : "hidden";
  para.style.opacity = isHidden ? 1 : 0;
  toggleBtn.textContent = isHidden ? "Hide" : "Show";
});
