/* ---------------------------------------------------------------------------------------------- */
/*                                           Question 1:                                          */
/* ---------------------------------------------------------------------------------------------- */

/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with places after the decimal. */

function plusMinus(arr) {
  let len = arr.length;
  let pos = 0;
  let neg = 0;
  let zero = 0;
  // loop through array, determine if number is pos, neg, or 0
  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else if (arr[i] === 0) {
      zero++;
    }
  }
  console.log(`${(pos / len).toFixed(6)} \n ${(neg / len).toFixed(6)} \n ${(zero / len).toFixed(6)}`);
}

const value1 = plusMinus([1, 1, 0, -1, -1]);
console.log(value1);

/* ---------------------------------------------------------------------------------------------- */
/*                                           Question 2:                                          */
/* ---------------------------------------------------------------------------------------------- */

/*  Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the
five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. */

function miniMaxSum(arr) {
  // sort arr, slice at each point, add values together (via reduce() method)
  let maxSum = arr
    .sort()
    .slice(1)
    .reduce((acc, cv) => acc + cv, 0);

  let minSum = arr
    .sort()
    .slice(0, -1)
    .reduce((acc, curr) => acc + curr, 0);

  console.log(minSum, maxSum);
}

const value2 = miniMaxSum([1, 5, 7, 3, 9]);

/* ---------------------------------------------------------------------------------------------- */
/*                                           Question 3:                                          */
/* ---------------------------------------------------------------------------------------------- */

/* Given a time in -hour AM/PM format, convert it to military (24-hour) time. Note: - 12:00:00AM on a 12-hour clock is 00:00:00 
on a 24-hour clock. - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

function timeConversion(s) {
  // get unaffected part of str
  let restOfStr = s.slice(2, -2);
  // split the string
  let splitStr = s.split(":");

  if (s.includes("AM")) {
    return splitStr[0] === "12" ? "00" + restOfStr : splitStr[0] + restOfStr;
  } else if (s.includes("PM")) {
    return splitStr[0] === "12" ? "12" + restOfStr : Number(splitStr[0]) + 12 + restOfStr;
  }
}

const value3 = timeConversion("12:05:45AM");
console.log(value3);

/* ---------------------------------------------------------------------------------------------- */
/*                                           Question 4:                                          */
/* ---------------------------------------------------------------------------------------------- */

function findMedian(arr) {
  arr.sort();
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
  } else {
    return arr[middleIndex];
  }
}

const value4 = findMedian([0, 1, 2, 4, 5, 6, 3]);
console.log(value4);
