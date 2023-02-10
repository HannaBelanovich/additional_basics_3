'use strict';

function isPangram(string) {    
    
    const set = new Set(string.toLowerCase().split(' ').join(''));
    
    if (set.size === 26) {
        return true;
    }  

    return false;

}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));