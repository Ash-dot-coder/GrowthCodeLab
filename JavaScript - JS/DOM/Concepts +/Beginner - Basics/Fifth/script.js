// Add a class to an element when a button is clicked.

const btn = document.querySelector("#btn");

document.body.style.width = "100%";
document.body.style.height = "97vh";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.backgroundColor = "tomato";
document.body.style.fontSize = "23px";
btn.style.fontSize = "25px";
btn.style.backgroundColor = "skyblue";
btn.style.letterSpacing = "4px";

btn.addEventListener("mouseover", () => {
  btn.style.cursor = "pointer";
});

btn.addEventListener("click", () => {
  const newElement = document.createElement("div");
  newElement.textContent = "Hey! I'm here ..";
  newElement.classList.add("helo");

  document.body.appendChild(newElement);
});
