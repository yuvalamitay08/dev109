function validateForm() {
  let errorMessages = "";
  let valid = true;
  
//validate first name
  let firstname = document.getElementById("firstname").value;
  if (!firstname.match(/^[A-Za-z]+$/) || firstname.length > 20) {
    document.getElementById("firstnameError").innerHTML = "<strong style='color:red;'>First name must be letters only and max 20 characters.</strong>";
    valid = false;
  } else {
    document.getElementById("firstnameError").innerHTML = "";
  }
  //validate last name
let lastname = document.getElementById("lastname").value;
  if (!lastname.match(/^[A-Za-z]+$/) || lastname.length > 20) {
    document.getElementById("lastnameError").innerHTML = "<strong style='color:red;'>Last name must be letters only and max 20 characters.</strong>";
    valid = false;
  } else {
    document.getElementById("lastnameError").innerHTML = "";
  }
  //valudate email
  let email = document.getElementById("email").value;
  if (!email.match(/^[A-Za-z]+$/) || email.length > 20) {
    document.getElementById("emailError").innerHTML = "<strong style='color:red;'>Email must be max 20 characters.</strong>";
    valid = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }
  //validate phone
  let phone = document.getElementById("phone").value;
  if (!phone.match(/^[A-Za-z]+$/) || phone.length > 20) {
    document.getElementById("phoneError").innerHTML = "<strong style='color:red;'>phone name must be letters only and max 20 characters.</strong>";
    valid = false;
  } else {
    document.getElementById("phoneError").innerHTML = "";
  }
  return valid;
}

