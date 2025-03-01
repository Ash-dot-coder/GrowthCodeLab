document.addEventListener("DOMContentLoaded", () => {
  const textBox = document.getElementById("textBox");
  const title = document.getElementById("title");
  const buttons = document.querySelectorAll("#buttonCounter button");

  document.body.style.cssText = `
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f4;
    `;

  title.style.cssText = "margin-bottom: 10px;";
  textBox.style.cssText = `
    padding: 10px;
    font-size: 16px;
    border: 2px solid #333;
    border-radius: 5px;
    outline: none;
    width: 300px;
    min-height: 80px;
    `;

  document.getElementById("buttonCounter").style.cssText = "margin-top: 10px;";

  buttons.forEach((btn) => {
    btn.style.cssText = `
        margin: 5px;
        padding: 8px 12px;
        border: none;
        cursor: pointer;
        background-color: #333;
        color: white;
        border-radius: 5px;
        transition: 0.3s;
        `;

    btn.addEventListener(
      "mouseover",
      () => (btn.style.backgroundColor = "#555")
    );
    btn.addEventListener(
      "mouseout",
      () => (btn.style.backgroundColor = "#333")
    );
  });

  document
    .getElementById("increaseSize")
    .addEventListener("click", () => modifyFontSize(2));
  document
    .getElementById("decreaseSize")
    .addEventListener("click", () => modifyFontSize(-2));
  document.getElementById("changeColor").addEventListener("click", changeColor);
  document
    .getElementById("bold")
    .addEventListener("click", () => toggleStyle("fontWeight", "bold"));
  document
    .getElementById("italic")
    .addEventListener("click", () => toggleStyle("fontStyle", "italic"));
  document
    .getElementById("underline")
    .addEventListener("click", () =>
      toggleStyle("textDecoration", "underline")
    );

  function modifyFontSize(value) {
    let currentSize = parseInt(window.getComputedStyle(textBox).fontSize);
    textBox.style.fontSize = currentSize + value + "px";
  }

  function changeColor() {
    let color =
      "#" +
      ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
    textBox.style.color = color;
  }

  function toggleStyle(property, value) {
    textBox.style[property] =
      textBox.style[property] === value ? "normal" : value;
  }
});
