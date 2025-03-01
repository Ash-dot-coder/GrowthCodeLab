const btn = document.getElementById("btn");
const h4Text = document.getElementById("texH");

function getColor() {
  let colorCode = "0123456789ABCDEF";
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += colorCode[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}

btn.addEventListener("mouseover", () => {
  btn.style.cursor = "pointer";
});

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = getColor();
  btn.textContent = "More Color";
  h4Text.textContent = getColor();
});
