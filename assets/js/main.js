document.addEventListener("DOMContentLoaded", () => {
  const firstNameInput = document.querySelector("#first_name");
  const lastNameInput = document.querySelector("#last_name");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#phone");
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#confirm_password");
  const firstNameError = document.querySelector("#firstName-error");
  const lastNameError = document.querySelector("#lastName-error");
  const emailError = document.querySelector("#email-error");
  const phoneError = document.querySelector("#phone-error");
  const passwordError = document.querySelector("#password-error");

  function validateInput(
    input,
    errorMessage,
    regex,
    errorText,
    confirmPassword = false
  ) {
    const trimmedValue = input.value.trim();
    const isEmpty = trimmedValue === "";
    const isValid = regex.test(trimmedValue);
    const isPasswordMatch = confirmPassword
      ? trimmedValue === confirmPassword.value.trim()
      : false;
    console.log(isValid, isPasswordMatch, isEmpty, trimmedValue);
    if (isEmpty || (isValid && confirmPassword === false) || isPasswordMatch) {
      errorMessage.textContent = "";
      input.style.borderColor = "#0077b6";
      if (isValid) {
        input.style.borderColor = "green";
      }
    } else {
      input.style.borderColor = "red";
      errorMessage.textContent = errorText;
    }
  }

  firstNameInput.addEventListener("change", () => {
    validateInput(
      firstNameInput,
      firstNameError,
      /^[A-Za-z]+$/,
      "* Enter valid first name"
    );
  });

  lastNameInput.addEventListener("change", () => {
    validateInput(
      lastNameInput,
      lastNameError,
      /^[A-Za-z]+$/,
      "* Enter valid last name"
    );
  });

  emailInput.addEventListener("change", () => {
    validateInput(
      emailInput,
      emailError,
      /^[a-zA-Z_][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "* Enter a valid email"
    );
  });

  phoneInput.addEventListener("change", () => {
    validateInput(
      phoneInput,
      phoneError,
      /^(\+\d{1,2}\s?)?(\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,12}$/,
      "* Enter valid phone number"
    );
  });

  passwordInput.addEventListener("change", () => {
    validateInput(
      passwordInput,
      passwordError,
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "* Enter valid password"
    );
  });

  confirmPasswordInput.addEventListener("change", () => {
    validateInput(
      confirmPasswordInput,
      passwordError,
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      " * Password doesn't match",
      passwordInput
    );
  });
});
