function validateForm() {
    // Add your form validation logic here
    // Example validation:
    var fullname = document.getElementById('fullname').value;
    var contact = document.getElementById('contact').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.getElementById('gender').value;

    if (fullname === '' || contact === '' || dob === '' || email === '' || password === '' || gender === '') {
        alert('Please fill in all fields.');
        return false;
    }
    // Additional validation can be added as per requirements

    return true;
}

function validateForm() {
    var enteredEmail = document.getElementById("emaild").value;
    var enteredPassword = document.getElementById("password").value;

    var validEmail = "shijujeevzz@gmail.com";
    var validPassword = "shiju@123";

    if (enteredEmail === validEmail && enteredPassword === validPassword) {
      alert("Successfully logged in");
      return true; // Allow form submission
    } else {
      alert("Please enter proper email ID and password");
      return false; // Prevent form submission
    }
  }