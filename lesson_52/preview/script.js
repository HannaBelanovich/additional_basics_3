'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`; 
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

// let userName = null;

// console.log(userName ?? 'user'); //если первое значение null or undefined, то вернет второе

// let userAge = 0;

// // console.log(userAge ?? '35'); //если первое значение 0 или пустая строка или NaN, то вернет их

// let userName;
// let userKey;

// console.log(userName ?? userKey ?? "user");