'use script';

const obj = {
    name: 'test'
}

let id = Symbol('id'); // создали символ с описанием 'id'
obj[id] = 1;// добавили новое св-во О

console.log(obj[id]); // помещаем именно переменную id, а не строчку, будет 1
console.log(obj['id']); //будет undefined

// можно создать символ прямо в О

const obj2 = {
    name: 'test',
    [Symbol('id')]: 1  // но к нему так невозможно обратиться
}

// чтобы получить значение символа:
let id2 = Symbol('id');
const obj3 = {
    name: 'test',
    [id]: 1,
    getId: function() {
        return this[id];
    }
}

console.log(obj.getId());