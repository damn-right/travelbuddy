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
