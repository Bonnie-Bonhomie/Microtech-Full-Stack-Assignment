
let square = (x) => x * x;

function add(a, b) {return a + b};
function subtract(a, b){ return a - b; };
function multiply(a, b) {return a * b};
function cube (a){return a* a* a;}
function percentage (value, percent){
    return (percent/100) * value;
}


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    for(let i = n - 1; i >= 1; i--){
        n *= i;
    }
    return n;
}

function squareRoot(n) {
   return Math.sqrt(n);
}



function combination(n, r) {
    if (r > n) {
        return 0;
    }
    let denominator = factorial(r) * factorial(n - r);
    let result = factorial(n) / denominator;
    return result;
}

function permutation(n, r) {
    if (r > n) {
        return 0;
    }
    let denominator = factorial(n - r);
    let result = factorial(n) / denominator;
    return result;
}

function quadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return "No real roots";
    }

    let nominator = 2 * a;
    let root1 = (-b + Math.sqrt(discriminant)) / nominator;
    let root2 = (-b - Math.sqrt(discriminant)) / nominator;
    return [root1, root2];
}

function substitution(a, b, c, x) {
    return a * square(x) + b * x + c;
}
function modulus(a, b) {
    return a % b;
}

function power(value, power) {
    return Math.pow(value, power);
}
function floorDivision(a, b) {
    let c = a %b;
    return (a - c) / b;
}




console.log("Calculator module loaded successfully.");

console.log('Square of 5 = '+ square(5));
console.log('Cube of 3 = ' + cube(3) );
console.log('Square root of 81 = '+ squareRoot(81));

console.log('2 raise to power of 5 = ' + power(2, 10));

console.log('15% of 200 = '+ percentage(200, 15));

// Quadratic equation example: x^2 - 3x + 2 = 0`    
let qua = quadratic(1, -3, 2);

console.log('x^2 - 3x + 2 = 0 roots are x = '+ qua[0] + ' and x = ' + qua[1]);

// Quadratic equation example: x^2 - 3x + 2 = 0`    
let qua2 = quadratic(1, 2, 5);

console.log('x^2 - 2x + 5 = 0 roots are x = '+ qua2[0] + ' and x = ' + qua2[1]);


