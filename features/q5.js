const basket = ['apples', 'bananas', 'mango'];

basket.push('oranges');
console.log(basket); 
basket.pop();
console.log(basket);
basket.unshift('grapes');
console.log(basket);

basket.shift();
console.log(basket);

basket.splice(1, 1, 'kiwi', 'pear');
console.log(basket);

console.log(basket.includes('grapes'));

basket.join(' - ');
    console.log(basket);

console.log(basket.indexOf('mango'));    

basket.unshift('kiwi');
console.log(basket);


basket.sort();
console.log(basket);

