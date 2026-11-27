const basket = ["apples", "bananas", "mango"];

basket.push('oranges');
console.log(basket); 
basket.pop();
console.log(basket);
basket.unshift('grapes');
console.log(basket);

basket.shift();
console.log(basket);

console.log(basket.indexOf('mango'));   
console.log(basket.includes('kiwi'));

basket.splice(1, 1);
console.log(basket);




    console.log(basket.join(" - "));

 

// basket.unshift('kiwi');
// console.log(basket);


// basket.sort();
// console.log(basket);

