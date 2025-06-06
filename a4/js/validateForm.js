function validateForm() {
  let valid = true;
  clearErrors();

  //all id's 
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const zipcode = document.getElementById("zipcode").value.trim();

  //all the errors so that its easier to use 
  const nameRegex = /^[a-zA-Z]{1,20}$/;
  const emailRegex = /^[^@\s]+@[^@\s]+\.(com|net|org|edu)$/;
  const phoneRegex = /^[0-9\-]{7,15}$/;
  const zipRegex = /^\d{5}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/;

  // First Name
  if (!nameRegex.test(firstname)) {
    showError("errorFirstname", "First name is required to be letters only, max 20 chars.");
    valid = false;
  }

  // Last Name
  if (!nameRegex.test(lastname)) {
    showError("errorLastname", "Last name is required to be letters only, max 20 chars.");
    valid = false;
  }

  // Email
  if (!emailRegex.test(email)) {
    showError("errorEmail", "Invalid email format.");
    valid = false;
  }

  // Phone
  if (!phoneRegex.test(phone)) {
    showError("errorPhone", "Phone must be numbers only or with dashes, max 15 digits.");
    valid = false;
  }

  // Username
  if (username.length === 0 || username.length > 12) {
    showError("errorUsername", "Username is required, max 12 characters.");
    valid = false;
  }

  // Password
  if (!passwordRegex.test(password)) {
    showError("errorPassword", "Password must be max 7 chars with upper, lower, number & a special character.");
    valid = false;
  }

  // Address
  if (address.length === 0) {
    showError("errorAddress", "Address is required.");
    valid = false;
  }

  // City
  if (city.length === 0) {
    showError("errorCity", "City is required.");
    valid = false;
  }

  // State
  if (state === "") {
    showError("errorState", "State is required.");
    valid = false;
  }

  // Country
  if (country === "") {
    showError("errorCountry", "Country is required.");
    valid = false;
  }

  // Zipcode (only if USA)
  if (country === "USA" && !zipRegex.test(zipcode)) {
    showError("errorZipcode", "Zip Code is required (5 digits) for USA.");
    valid = false;
  }

  return valid;
}

function showError(id, message) {
  document.getElementById(id).innerHTML = message;
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach(el => el.innerHTML = "");
}
