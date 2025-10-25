const btn = document.getElementById("btn");
let h2 = document.createElement("h2");
let clickCount = 0;

btn.style.textTransform = "capitalize";
h2.style.color = "#a96767";
h2.style.fontSize = "3vw";
document.body.append(h2);

btn.addEventListener("click", function () {
  clickCount++;
  h2.textContent = `${clickCount}`;

  console.log(`Button Clicked ${clickCount}  times!`);
  if (clickCount === 5) {
    btn.remove();
    h2.textContent = "Button removed! You've reached 5 clicks.";
    console.log("Button removed after 5 clicks");
  }
});
