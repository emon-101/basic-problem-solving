/**
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
/**
 * @param {number} n
 * @return {number[]}
 */

function generateFibonacci(n) {
  let result = [];

  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);

    let next = a + b;
    a = b;
    b = next;
  }

  return result;
}
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findGCD(a, b) {
  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findLCM(a, b) {
  function findGCD(a, b) {
    while (b !== 0) {
      let remainder = a % b;
      a = b;
      b = remainder;
    }

    return a;
  }

  return (a * b) / findGCD(a, b);
}
/**
 * @param {number} num
 * @return {boolean}
 */
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMedian(nums) {
  let sorted = [...nums].sort((a, b) => a - b);

  let middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
    return sorted[middle];
  } else {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
}
/**
 * @param {number[]} nums
 * @return {number|null}
 */
function findSecondLargest(nums) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of nums) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}
/**
 * @param {Array} arr
 * @return {*}
 */
function findMode(arr) {
  let frequency = {};
  let mode = arr[0];
  let maxCount = 0;

  for (let item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;

    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mode = item;
    }
  }

  return mode;
}
/**
 * @param {string[]} arr
 * @return {string[]}
 */
function naturalSort(arr) {
  return arr.sort((a, b) =>
    a.localeCompare(b, undefined, {
      numeric: true,
    }),
  );
}
