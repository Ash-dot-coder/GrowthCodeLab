// Select all elements with a specific class and change their background color.

const changeBg = document.querySelectorAll(".changeBg");
const btn = document.querySelector("#btn");
const nline = document.getElementsByTagName("li");
// const ul = document.getElementsByTagName("ul")[0];
const container = document.getElementById("container");

document.body.style.backgroundColor = "wheat";

if (container) {
  container.style.width = "100%";
  container.style.height = "90vh";
  container.style.margin = "auto";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";

  if (btn) {
    btn.style.fontSize = "19px";
    btn.style.backgroundColor = "purple";
    btn.style.color = "wheat";
  }
}

// if (ul) {
//   ul.style.display = "flex";
//   ul.style.justifyContent = "center";
//   ul.style.alignItems = "center";
//   ul.style.padding = "9px";
// }

btn.addEventListener("mouseover", () => {
  btn.style.cursor = "pointer";
});

btn.addEventListener("click", () => {
  Array.from(nline).forEach((el) => {
    el.style.listStyle = "none";
    el.style.fontSize = "14px";
  });

  changeBg.forEach((element) => {
    element.textContent = "Change with line by select";
    element.style.backgroundColor = "teal";
    element.style.color = "white";
    element.style.padding = "9px";
    element.style.fontSize = "12px";
  });
});
