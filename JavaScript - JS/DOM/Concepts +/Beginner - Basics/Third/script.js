// Create a button that changes the text of a paragraph when clicked.

const container = document.querySelector("#container");
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");

if (container) {
  container.style.width = "100%";
  container.style.height = "97.8vh";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.backgroundColor = "wheat";

  if (btn) {
    btn.style.fontSize = "15px";
    btn.style.backgroundColor = "#1d1d1d";
    btn.style.color = "wheat";

    btn.addEventListener("mouseover", () => {
      btn.style.cursor = "pointer";
    });
  }
}

btn.addEventListener("click", () => {
  btn.textContent = "You've clicked";

  if (para) {
    para.textContent =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid iure, nulla ex tenetur voluptatibus quidem error neque explicabo atque rerum quibusdam esse dolorem delectus omnis animi nihil? Sapiente repellendus voluptatibus, nihil culpa harum ullam.";
    para.style.backgroundColor = "#1d1d1d";
    para.style.color = "wheat";
    para.style.fontSize = "17px";
    para.style.width = "37vw";
    para.style.padding = "10px";
    para.style.borderRadius = "4px";
  }
});
