/* ---------------------------------------------------------------------------------------------- */
/*                                   CSV representation of array                                  */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:
input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values

Note: you shouldn't escape the \n, it should work as a new line.
*/

function toCsvText(array) {
  // join the array by line break
  return array.join("\n");
}

console.log(
  toCsvText([
    [-25, 21, 2, -33, 48],
    [30, 31, -32, 33, -34],
  ])
);

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);
