let ul = document.querySelector("ul");

ul.addEventListener("click", function (detl) {
    //   detl.target.style.textDecoration = "line-through";
    detl.target.classList.toggle("lt");
});
