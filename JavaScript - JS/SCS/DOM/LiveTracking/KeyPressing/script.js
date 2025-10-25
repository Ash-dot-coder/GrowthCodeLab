let key = document.querySelector("#key");
let code = document.querySelector("#code");

window.addEventListener("keydown", function (detl) {
  if (detl.key === " ") {
    key.textContent = "SPC";
    code.textContent = `${detl.which}`;
    // console.log(`SPC : ${detl.which}`);
  } else {
    key.textContent = `${detl.key}`;
    code.textContent = `${detl.which}`;
    // console.log(`${detl.key} : ${detl.which}`);
  }
});
