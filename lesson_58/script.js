'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const shops = [
        {rice: 500}, // список магазинов
        {oil: 200},
        {bread: 50}
    ]

    // const map = new Map(); // может быть пустым

    // можно добавлять построчно
    // map.set(shops[0], 5000); // бюджет 1го магазина
    // map.set(shops[1], 2000); 
    // map.set(shops[2], 6000);

    // цепочкой
    // map.set(shops[0], 5000)
    //     .set(shops[1], 2000)
    //     .set(shops[2], 6000);

    //либо с помощью for each
    const budget = [5000, 2000, 6000];

    const map = new Map([  // можно добавить св-во сразу 
        [{paper: 400}, 8000]
    ]);

    shops.forEach((shop, i) => {
        map.set(shop, budget[i]);
    })

    // console.log(map);
    // console.log(map.get(shops[0])); 
    // console.log(map.has(shops[0])); 
    // map.delete(key); //удалить что-то
    // map.clear(); // очистить карту
    // map.size; // св-во показывает количество элементов внутри карты

    // ПЕРЕБРАТЬ КАРТУ

    // 1. map.keys(); // возвр. итерируемый О по ключам

    // for (let shop of map.keys()) {
    //     console.log(shop);
    // }

    // задача получить список всех товаров каждого магазина (rice, bread, oil) и передать их в массив
    // const goods = [];
    // for (let shop of map.keys()) {
    //     goods.push(Object.keys(shop)[0]);    
    // }
    // console.log(goods);

    //2. map.values() // венрут значения
    // for (let price of map.values()) {
    //     console.log(price);
    // }

    // 3. map.entries() // получим матрицу из ключей и значений, массив массивов
    // for (let price of map.entries()) {
    //     console.log(price);
    // }
    // можно сразу деструктуризировать этот масиив из 2 значений
    // for (let [shop, price] of map.entries()) {
    //     console.log(price, shop); //получим отдельно 8000 и {paper: 400}
    // }

    // 4. forEach

    map.forEach((value, key, map) => {
        console.log(value, key);
    })

    // создать карту из Объекта
    const user = {
        name: 'Alex',
        birthday: '05/02/1983',
        showMyPublicData: function() {
            console.log(`${this.name} ${this.birthday}`)
        }
    }

    const userMap = new Map(Object.entries(user));
    // console.log(userMap);

    // создать О из карты

})