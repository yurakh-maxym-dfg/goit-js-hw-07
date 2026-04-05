'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
    const blank = output.textContent = event.currentTarget.value.trim();
    output.textContent = blank === "" ? "Anonymous" : blank;
});