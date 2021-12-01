let fs = require('fs');
let text = fs.readFileSync('/Users/jackhooper/Documents/Advent/2021/aoc2021/day1/part1/src/d1_p1_input.txt', 'utf-8');
let array = text.split('\n').map(Number);
let increment = 0;

for(let i = 1; i < array.length; i++) {
  if (array[i] > array[i - 1]) {
    increment++;
  }
};

console.log(increment)
