document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let form = document.getElementById('registrationForm');
    let valid = true;

    
    let fullName = document.getElementById('fullName');
    if (fullName.value.length < 5) {
        fullName.classList.add('is-invalid');
        valid = false;
    } else {
        fullName.classList.remove('is-invalid');
        fullName.classList.add('is-valid');
    }

    
    let email = document.getElementById('email');
    if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
        valid = false;
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }

  
    let phone = document.getElementById('phone');
    if (phone.value === '123456789' || phone.value.length !== 10 || isNaN(phone.value)) {
        phone.classList.add('is-invalid');
        valid = false;
    } else {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
    }

   
    let password = document.getElementById('password');
    let fullNameValue = fullName.value.toLowerCase();
    if (password.value.length < 8 || password.value.toLowerCase() === 'password' || password.value.toLowerCase() === fullNameValue) {
        password.classList.add('is-invalid');
        valid = false;
    } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }

   
    let confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add('is-invalid');
        valid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
    }

    
    if (valid) {
        alert('Form submitted successfully!');
        
    }
}
