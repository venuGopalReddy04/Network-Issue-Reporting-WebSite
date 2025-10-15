document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-toggle').classList.add('active');
    document.getElementById('login-form').classList.add('active');
});

function toggleForm(formType) {
    var loginForm = document.getElementById('login-form');
    var registerForm = document.getElementById('register-form');
    var loginToggle = document.getElementById('login-toggle');
    var registerToggle = document.getElementById('register-toggle');

    if (formType === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginToggle.classList.add('active');
        registerToggle.classList.remove('active');
    } else {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        registerToggle.classList.add('active');
        loginToggle.classList.remove('active');
    }
}
function handleSubmit(event, redirectUrl) {
    event.preventDefault();
    console.log('Form submitted');
    window.location.href = redirectUrl;
}