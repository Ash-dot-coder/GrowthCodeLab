// Select an element by its ID and change its text content.

const text = document.getElementById("changeText");
const btn = document.getElementById("takeBtn");

btn.addEventListener("click", () => {
  text.textContent = "Change for you 🤠";
//   btn.style.backgroundColor = " rgb(128, 93, 50)";
//   document.body.style.backgroundColor = "#1d1d1d";
//   text.style.color = "bisque";
  btn.textContent = "Text content Changed! 👁";
//   btn.style.color = "bisque";
  btn.style.letterSpacing = "3px";
//   text.style.fontSize = "43px";
//   btn.style.fontSize = "23px";
});

btn.addEventListener("mouseover", () => {
  btn.style.cursor = "pointer";
});
