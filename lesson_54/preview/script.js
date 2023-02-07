'use strict';

const boxesQuery = document.querySelectorAll(".box");
const boxesGet = document.getElementsByClassName("box");

console.log(boxesQuery[0].closest('.wrapper')); // найдет выше ближайший wrapper

boxesQuery.forEach(function(box) {
    if (box.matches('.this')) { //метод ищет эл-т с определенным css селектором
        console.log(box);
    }
});

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }

// console.log(boxesQuery); // здесь останется 3 дива, т е это статичная коллекция, сохраняет то, что было на момент document.querySelectorAll
// console.log(boxesGet); // здеь будет 1 див, это живая коллекция, видит то, что происходило с эл-тами после .getElementsByClassName

// console.log(Array.from(boxesGet)); // cделали массив с методами из живой коллекции,  сделали его статичным