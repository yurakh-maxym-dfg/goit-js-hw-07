'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    const formData = {
        email: emailValue,
        password: passwordValue,
    }

    if (emailValue === '' || passwordValue === ''){
        alert('All form fields must be filled in');
        return;
    }
    

    console.log(formData);
    event.currentTarget.reset();
}