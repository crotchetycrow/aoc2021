const { ifError } = require('assert/strict');
let fs = require('fs');
const { captureRejectionSymbol } = require('stream');
let text = fs.readFileSync('/Users/jackhooper/Documents/Advent/2021/aoc2021/day4/src/d4_input.txt', 'utf-8');
let array = text.split('\n');


console.log(text)