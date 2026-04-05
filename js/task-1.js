'use strict';

const categories = document.querySelectorAll('.item');


console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const title = category.querySelector('h2').textContent;
    const number = category.querySelectorAll('li').length;

    console.log(title);
    console.log(number); 
});