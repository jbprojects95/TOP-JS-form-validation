const signUpForm = document.getElementById("signUpForm");

function checkForm() {
  const emailInput = document.getElementById("email");
  const countryInput = document.getElementById("country");
  const postcodeInput = document.getElementById("postcode");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const emailErrorField = document.getElementById("emailErrorField");
  const countryErrorField = document.getElementById("countryErrorField");
  const postcodeErrorField = document.getElementById("postcodeErrorField");
  const passwordErrorField = document.getElementById("passwordErrorField");
  const confirmPasswordErrorField = document.getElementById(
    "confirmPasswordErrorField",
  );

  if (emailInput.value === "") {
    emailInput.setCustomValidity("I am expecting an email!");
    emailErrorField.textContent = "I am expecting an email!";
  } else {
    emailInput.setCustomValidity("");
    emailErrorField.textContent = "";
  }

  if (countryInput.value === "") {
    countryInput.setCustomValidity("I am expecting a country!");
    countryErrorField.textContent = "I am expecting a country!";
  } else {
    countryInput.setCustomValidity("");
    countryErrorField.textContent = "";
  }

  if (postcodeInput.value === "") {
    postcodeInput.setCustomValidity("I am expecting a postcode!");
    postcodeErrorField.textContent = "I am expecting a postcode!";
  } else {
    postcodeInput.setCustomValidity("");
    postcodeErrorField.textContent = "";
  }

  if (passwordInput.value === "") {
    passwordInput.setCustomValidity("I am expecting a password!");
    passwordErrorField.textContent = "I am expecting a password!";
  } else {
    passwordInput.setCustomValidity("");
    passwordErrorField.textContent = "";
  }

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

// function removeCustomErrorMsg(inputField) {
//   if (inputField.value) {
//     inputField.setCustomValidity("");
//   }
// }

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkForm();
});
