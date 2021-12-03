# Advent of Code challenge

## Day 1

### Things I learnt

- Worked with and understood readFileSync and how it can be used to read file and return its contents

- Shorter syntax to convert string elements into integers in the form of ..map((i) => Number(i))

- Part one saw me creating a simple bit of code that iterates elements in the array and if the next element is bigger than the last then increment by one

- Part two saw me looking more into sliding window algorithms using one technique but it wasn't producing the desired output. I utilised my previous code and altered it to include two variables (currentSum and maxSum), currentSum added the 3 elements together, maxSum added the next 3 in the sequence. The code then follows the same logic as part one and increments every time currentSum is less than maxSum

## Day 2

### Things I learnt

- Discovered the usefulness of parseInt(element, radix)

- Recognised that I need to work on not over complicating code as after creating my solution as a class I attempted different methods of turning my nested arrays into objects only to discover the simpler way with map (see lines 3-10) which saw me altering my existing code. Annoyingly I had the right idea after 15 minutes but this ended up taking me 2hr30mins due to over thinking...

- Initially started with a class but it saw my constructor as undefined. I eventually came back to this and turned it into a function instead and the constructors into variables

- Part two was a slight alteration to existing code, it took me a few minutes to wrap my head around what was being asked of me

## Day 3

### Things I learnt

- Pseudocode and diagramming helped with the planning of this one

- Rediscovering for of statements

- I was stuck purely based on the limitations of my knowledge here. I went on the subreddit and came across a solution similar to mine, which means I was in the right direction but couldn't quite get there.

- I saw a lot of solutions utilising .reduce() I need to look into that more

- I'm not sure why the similar solution to mine used i < 12 in the accumulator instead of i < newArray.length or why they were using exponentiation

- But more comfortable with .map, silver linings :sweat_smile:
