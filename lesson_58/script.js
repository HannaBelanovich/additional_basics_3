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

    console.log(map);
    // console.log(map.get(shops[0])); 
    // console.log(map.has(shops[0])); 
    // map.delete(key); //удалить что-то
    // map.clear(); // очистить карту
    // map.size; // св-во показывает количество элементов внутри карты

})