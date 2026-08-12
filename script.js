// NOTE: I realise this whole thing would be better as a Class,
// as I'm repeating patterns throughout this code. A job for future me :) (maybe...)

const signUpForm = document.getElementById("signUpForm");
const emailInput = document.getElementById("email");
const countyInput = document.getElementById("county");
const postcodeInput = document.getElementById("postcode");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const emailErrorField = document.getElementById("emailErrorField");
const countyErrorField = document.getElementById("countyErrorField");
const postcodeErrorField = document.getElementById("postcodeErrorField");
const passwordErrorField = document.getElementById("passwordErrorField");
const confirmPasswordErrorField = document.getElementById(
  "confirmPasswordErrorField",
);

emailInput.addEventListener("input", checkEmail);
countyInput.addEventListener("input", checkcounty);
postcodeInput.addEventListener("input", checkPostcode);
passwordInput.addEventListener("input", checkPassword);
confirmPasswordInput.addEventListener("input", checkConfirmPassword);

function checkEmail() {
  if (emailInput.value === "") {
    emailInput.setCustomValidity("I am expecting an email!");
    emailErrorField.textContent = "I am expecting an email!";
  } else if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Please enter a valid email format.");
    emailErrorField.textContent = "Please enter a valid email format.";
  } else {
    emailInput.setCustomValidity("");
    emailErrorField.textContent = "";
  }
}

function checkcounty() {
  if (countyInput.value === "") {
    countyInput.setCustomValidity("I am expecting a UK county!");
    countyErrorField.textContent = "I am expecting a UK county!";
  } else {
    countyInput.setCustomValidity("");
    countyErrorField.textContent = "";
  }
}

function checkPostcode() {
  if (postcodeInput.value === "") {
    postcodeInput.setCustomValidity("I am expecting a postcode!");
    postcodeErrorField.textContent = "I am expecting a postcode!";
  } else if (postcodeInput.validity.patternMismatch) {
    postcodeInput.setCustomValidity("Please enter a valid UK postcode format.");
    postcodeErrorField.textContent = "Please enter a valid UK postcode format.";
  } else {
    postcodeInput.setCustomValidity("");
    postcodeErrorField.textContent = "";
  }
}

function checkPassword() {
  if (passwordInput.value === "") {
    passwordInput.setCustomValidity("I am expecting a password!");
    passwordErrorField.textContent = "I am expecting a password!";
  } else {
    passwordInput.setCustomValidity("");
    passwordErrorField.textContent = "";
  }
}

function checkConfirmPassword() {
  if (confirmPasswordInput.value === "") {
    confirmPasswordInput.setCustomValidity(
      "I am expecting a matching password!",
    );
    confirmPasswordErrorField.textContent =
      "I am expecting a matching password!";
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.setCustomValidity("Password does not match!");
    confirmPasswordErrorField.textContent = "Password does not match!";
  } else {
    confirmPasswordInput.setCustomValidity("");
    confirmPasswordErrorField.textContent = "";
  }
}

function checkForm() {
  checkEmail();
  checkcounty();
  checkPostcode();
  checkPassword();
  checkConfirmPassword();
}

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkForm();
});
