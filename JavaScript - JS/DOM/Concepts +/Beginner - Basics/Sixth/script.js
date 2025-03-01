// Change the font size of all paragraphs on the page using a butto

const para = document.querySelectorAll(".para");
const btn = document.querySelector("#change");

document.body.style.width = "100%";
document.body.style.height = "97vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";
document.body.style.backgroundColor = "wheat";
btn.style.backgroundColor = "tomato";
btn.style.fontSize = "24px";

btn.addEventListener("mouseover", () => {
  btn.style.cursor = "pointer";
});

btn.addEventListener("click", () => {
  para.forEach((p) => {
    p.style.fontSize = "23px";
    p.style.width = "53vw";
    p.style.margin = "7px";
    p.style.textAlign = "right";
    p.style.letterSpacing = '4px'
  });

  btn.style.backgroundColor = "black";
  btn.style.color = "wheat";
});
