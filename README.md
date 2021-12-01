# Advent of Code challenge

## Day 1

### Things I learnt

- Worked with and understood readFileSync and how it can be used to read file and return its contents

- Shorter syntax to convert string elements into integers in the form of ..map((i) => Number(i))

- Part one saw me creating a simple bit of code that iterates elements in the array and if the next element is bigger than the last then increment by one

- Part two saw me looking more into sliding window algorithms using one technique but it wasn't producing the desired output. I utilised my previous code and altered it to include two variables (currentSum and maxSum), currentSum added the 3 elements together, maxSum added the next 3 in the sequence. The code then follows the same logic as part one and increments every time currentSum is less than maxSum
