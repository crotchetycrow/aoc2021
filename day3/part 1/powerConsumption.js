let fs = require('fs');
let text = fs.readFileSync('/Users/jackhooper/Documents/Advent/2021/aoc2021/day3/src/d3_input.txt', 'utf-8');
let array = text.split('\n');

let newArr = array.map(function (item) {
  return [...item]
})



function gammaBits() {
  
  let res1 = 0;
  let res2 = 0;
  // I don't know why the person who's code is similar to mine
  // is using a 12 instead of the length of the array
  for(let i = 0; i < 12; i++) {
    let zero = 0;
    let one = 0;
    for (let el of newArr) {
      // OR WHY INCLUDING CURLY BRACES IN AN IF STATEMENT CAUSES THE RESULTS TO RETURN
      // 720665313280 AND REMOVING CURLY BRACES PRODUCES 3277364(the correct answer)
      if (el[i] == '0') { zero++;
      } else{ one++;
      }
    }
    // ITS BECAUSE THE FIRST IF STATEMENT IS ATTACHED TO FOR LET EL OF NEWARRAY
    // THERE WAS NOTHING SEPARATING THE TWO SO FOR LET EL OF NEWARRAY HAD TWO IF STATEMENTS
    // still doesn't explain the 12 or the exponentiation vvvvv
      if (one > zero) {
        res1+=2**(11-i);
      } else {
        res2+=2**(11-i)
      }

      // This is what I had it returns 32 (: vvvvv
      // if (zero > one) {
      //   zeroRes++
      // } else {
      //   oneRes++
      // }
      // In my mind, we're checking to see how many zeros and ones there are then - that's not the right thing to do...

    }
    // return oneRes * zeroRes
    return res1 * res2
  }



console.log(gammaBits())



// Code found that is similar to the way I approached it
// function d3a() {
  
//   let res1 = 0;
//   let res2 = 0;
//   for (let i=0;i<12;i++) {
//     let n0 = 0;
//     let n1 = 0;
//     for (let ln of newArr) {
//       if (ln[i]=='0') n0++;
//       else n1++;
//     }
//     if (n1>n0) {
//       res1+=2**(11-i);
//     } else {
//       res2+=2**(11-i);
//     }
//   }
//   return res1*res2;
// }

// console.log(d3a())