let fs = require('fs');
let text = fs.readFileSync('/Users/jackhooper/Documents/Advent/2021/aoc2021/day2/src/d2_input.txt', 'utf-8');
let array = text.split('\n').map((str) => {
  let [movement, amount] = str.split(' ');
  amount = parseInt(amount, 10);
  return {
    movement,
    amount
  };
});

function position() {
  {
   let horizontalPos = 0;
   let depthPos = 0;
   let aim = 0;
 

   for(let {movement, amount} of array) {
     if (movement === 'up') {
       aim -= amount;
     } else if (movement === 'down') {
         aim += amount;
       } else if (movement === 'forward') {
           horizontalPos += amount;
           depthPos += aim * amount
         }
   }
   console.log(horizontalPos * depthPos)
 }
}

console.log(position())
