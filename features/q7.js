
function stat(numbers){

    let sum = 0;

    numbers.forEach(element => {
        sum += element;
    });

    let average = sum / numbers.length;

    let min  = numbers[0];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return { sum, average, min, max };
}
let result = stat([4, 9, 2 , 15, 7]);
console.log('Sum:', result.sum);
console.log('Average:', result.average);
console.log('Largest:', result.max);
console.log('Smallest:', result.min);
