// "use strict";

const sign_up_btn = document.querySelector(".sign-up-btn");
const error = document.querySelector(".error");
function validateEmail() {
  const emailInput = document.querySelector(".input_email").value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput)) {
    error.textContent = "Please enter a vaild email address";
  } else {
    error.textContent = "";
    alert("successfull");
  }
}
sign_up_btn.addEventListener("click", validateEmail);
