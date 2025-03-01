// Toggle the visibility of an element (hide/show) using a button.

const container = document.querySelector("#container");
const para = document.querySelector("#para");
const showBtn = document.querySelector("#show");
const hideBtn = document.querySelector("#hide");
const hoverBtn = document.querySelector("#hoverBtn");

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

if (hoverBtn) {
  showBtn.style.fontSize = "21px";
  hideBtn.style.fontSize = "21px";
  showBtn.style.letterSpacing = "8px";
  hideBtn.style.letterSpacing = "8px";
  showBtn.style.backgroundColor = "wheat";
  hideBtn.style.backgroundColor = "wheat";
  showBtn.style.color = "teal";
  hideBtn.style.color = "teal";
  showBtn.style.borderRadius = "8px 3px";
  hideBtn.style.borderRadius = "3px 8px";
  para.style.fontSize = "28px";
  para.style.width = "38vw";
}

// Functionality
hoverBtn.addEventListener("mouseover", () => {
  showBtn.style.cursor = "pointer";
  hideBtn.style.cursor = "pointer";
});

showBtn.addEventListener("click", () => {
  //   para.style.display = "block";
  para.style.visibility = "visible";
});

hideBtn.addEventListener("click", () => {
  //   para.style.display = "none";
  para.style.visibility = "hidden";
});
