'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if(block) {     /// вариант, чтобы не было ошибки в коде
//     console.log(block.textContent);
// }

console.log(block?.textContent); // то же, что и сверху, только вернет undefined или null
// block?.textContent = '123'; // ОШИБКА, работает только с чтением, записать нельзя

// console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('hello');
    }
}

userData.say();
userData.hey?.(); //проверяем есть ли такой метод, если есть - запустим

// console.log(userData.skills.js); // ошибка , свойства такого нет

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js); //поможет избежать ошибки , но неудобно и громоздко
// }

// console.log(userData.skills?.js); 
// console.log(userData?.skills?.js); //расширили цепочку