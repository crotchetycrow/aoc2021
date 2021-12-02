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
  

    for(let {movement, amount} of array) {
      if (movement === 'up') {
        depthPos -= amount;
      } else if (movement === 'down') {
          depthPos += amount;
        } else if (movement === 'forward') {
            horizontalPos += amount;
          }
    }
    console.log(horizontalPos * depthPos)
  }
}

console.log(position())

// **FIRST ATTEMPT**
//class Position {
  //      constructor() {
  //       horizontalPos = 0;
  //       depthPos = 0;
  //      }
  //   positioning() {
      
  //     for(let {movement, amount} of array) {
  //       if (movement === 'up') {
  //         depthPos -= amount;
  //       } else if (movement === 'down') {
  //           depthPos += amount;
  //         } else if (movement === 'forward') {
  //             horizontalPos += amount;
  //           }
  //     }
  //     console.log(horizontalPos * depthPos)
  //   }
  // }
  
  //   let test = new Position
  //   console.log(test.positioning())

// **SECOND ATTEMPT**
// multiply(horizontal, depth) {
//   horizontal = horizontalPos
//   depth = depthPos
    
//   return horizontal * depth
// }

// **THIRD ATTEMPT**                         
// function filterArray(arr, query) {
//   return arr.filter(function(el) {
//     return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   })
// }

// let forward = filterArray(array, "forward");
// let up = filterArray(array, 'up');
// let down = filterArray(array, 'down');

// const nestedArr = forward.map((x) => x.split(' '));

// function objectify(arr) {
//   const obj = arr.reduce(function(object, el) {
//         let [key, value] = el;
//         object[key] = value
//         return object;
//       }, {})
//       return obj
// }
  
  
// const obj = {}
// nestedArr.forEach(x => obj[x[0]] = x[1]);


// .map(a => Object.assign(...a.map(([k, v]) => ({ [k]: v}))));

// console.log(nestedArr.map(x => objectify(x)))
