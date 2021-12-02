let fs = require('fs');
let text = fs.readFileSync('/Users/jackhooper/Documents/Advent/2021/aoc2021/day1/src/d1_input.txt', 'utf-8');
let array = text.split('\n').map(Number);
let increment = 0;

for(let i = 1; i < array.length; i++) {
  if (i + 3 < array.length) {
    let currentSum = array[i] + array[i + 1] + array[i + 2];
    let maxSum = array[i + 1] + array[i + 2] + array[i + 3];
    if (currentSum < maxSum){
      increment++;
    }
  }
};

console.log(increment)

// function maxSumArr(arr, num) {
//   let maxSum = 0;
//   let currentSum = 0;
//   if(arr.length < num) return null;
//   for(let i = 0; i < num; i++) {
//     currentSum += arr[i]

//   }
//   currentSum = maxSum;
//   for(let i = num; i < arr.length; i++) {
//     currentSum = currentSum - arr[i - num] + arr[i];
//     maxSum = Math.max(currentSum, maxSum);

//   }
//   return maxSum;
// };

// console.log(maxSumArr(array, 3))