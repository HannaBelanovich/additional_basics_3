'use script';

const salaries = {
    john: 500,
    ivan: 1000,
    anna: 5000,
    sayHello: function() {
        console.log('hello');
    }
}

salaries[Symbol.iterator] = function() { // специальный встроенный символ, в нем метод()
    return { // возвращаем О с методом next
        current: this.john,
        last: this.anna,
        next() { // метод next()
            if (this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }
            
        }
    }
}
 // переюираем 
for (let res of salaries) {
    console.log(res);
}

// либо вызываем вручную 1 раз
const iterator = salaries[Symbol.iterator](); // запускаем наш метод
console.log(iterator.next()); // вызываем на О iterator метод next