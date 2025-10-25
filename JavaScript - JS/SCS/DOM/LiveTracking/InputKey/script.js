// const { createElement } = require("react");

let input = document.querySelector("#inp");
let put = document.querySelector("#put");
let h3 = document.querySelector("#tr");

input.addEventListener("input", function (inpTxt) {
  if (inpTxt.data !== null) {
    console.log(inpTxt.data);
    h3.textContent = `${inpTxt.data}`;
  } else if (inpTxt.data === " ") {
    h3.textContent = "SPC";
  }
});
