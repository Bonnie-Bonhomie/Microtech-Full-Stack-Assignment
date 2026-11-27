

function reverseWords(sentence){
  rev =  sentence.split(' ');
  rev.reverse();
  
    return rev.join(' ');
}


console.log(reverseWords('I love javascript'));
console.log(reverseWords('Hello Big World'));


