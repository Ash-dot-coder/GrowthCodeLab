const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword()
  ) {
    alert("Form Submitted Successfully");

    // Input Empty
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";

    nameError.previousElementSibling.classList.remove("fa-check");
    emailError.previousElementSibling.classList.remove("fa-check");
    passwordError.previousElementSibling.classList.remove("fa-check");
    confirmPasswordError.previousElementSibling.classList.remove("fa-check");

    nameError.previousElementSibling.classList.remove("fa-xmark");
    emailError.previousElementSibling.classList.remove("fa-xmark");
    passwordError.previousElementSibling.classList.remove("fa-xmark");
    confirmPasswordError.previousElementSibling.classList.remove("fa-xmark");
  }
});

// Name Validation
function validateName() {
  let name = document.getElementById("name").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is requried 👆🏻";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full Name";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  nameError.innerHTML = "";
  nameError.previousElementSibling.classList.add("fa-check");
  return true;
}

// Email Validation
function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length === 0) {
    emailError.innerHTML = "Email is requried 👆🏻";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Enter valid Email";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  emailError.innerHTML = "";
  emailError.previousElementSibling.classList.add("fa-check");
  return true;
}

// Password Validation
function validatePassword() {
  let password = document.getElementById("password").value;

  if (password.length < 8) {
    passwordError.innerHTML = "Password should be At least 8 characters 👆🏻";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (
    !password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/
    )
  ) {
    passwordError.innerHTML =
      "Password should contain 1 Uppercase, 1 Lowercase, 1 Digit, 1 Alphabet & 1 Special Character";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  passwordError.innerHTML = "";
  passwordError.previousElementSibling.classList.add("fa-check");
  return true;
}

// Confirm Password Validation
function validateConfirmPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (confirmPassword.length === 0) {
    confirmPasswordError.innerHTML = "Confirm Password is required 👆🏻";
    confirmPasswordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (confirmPassword != password) {
    confirmPasswordError.innerHTML = "Password do not match 👆🏻";
    confirmPasswordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  confirmPasswordError.innerHTML = "";
  confirmPasswordError.previousElementSibling.classList.add("fa-check");
  return true;
}
