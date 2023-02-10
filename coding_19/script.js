'use strict';

function deepCount(a){

    let count = a.length; 

    a.forEach((item) => {       
        
        if (Array.isArray(item)) {            
            count += deepCount(item); // прибавляем каждый раз  кол-во эл-тов и вложенные массивы, если есть
        }           
       
    })

    return count;

}

console.log(deepCount([1, 2, [3, 5, [6, 7]]])) 

