// preloader functions
var preloader = document.getElementById("loading");

window.onload = function () {
  setTimeout(hidefunc, 2000);
};

function hidefunc() {
  DelayNode;
  preloader.style.display = "none";
}

//Singup form validations

//get all form controls in javascript
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cfmpassword = document.getElementById("confirmpassword");

//All functions
//function to show error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//function to showw success

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//function to chech if email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Please provide a valid email`);
  }
  //   return re.test(String(input).toLocaleLowerCase());
}
//function to check if required fields have data
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value === "") {
      console.log(input.id);
      showError(input, `${getFieldId(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//Function to check length of input field
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldId(input)} needs to be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldId(input)} needs to be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "passwords don't match");
  }
}
function getFieldId(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listerner for the form on submit

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, cfmpassword]);
  checkLength(username, 3, 10);
  checkLength(password, 6, 30);
  checkEmail(email);
  checkPasswordsMatch(password, cfmpassword);
});

//this is an event listener for the form on submit
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   if (username.value === "") {
//     showError(username, "Username is required");
//   } else {
//     showSuccess(username);
//   }

//   if (email.value === "") {
//     showError(email, "Email is required");
//   } else if (!isValidEmail(email.value)) {
//     showError(email, "Email is invalid");
//   } else {
//     showSuccess(email);
//   }

//   if (password.value === "") {
//     showError(password, "Password is required");
//   } else {
//     showSuccess(password);
//   }

//   if (cfmpassword.value === "") {
//     showError(cfmpassword, "Confirm password is required");
//   } else {
//     showSuccess(cfmpassword);
//   }
// });
