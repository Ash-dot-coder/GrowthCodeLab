let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  inp.click();
});

inp.addEventListener("change", function (detl) {
    console.log(detl.target.files[0].name);
  btn.textContent = `${detl.target.files[0].name}`;
});
