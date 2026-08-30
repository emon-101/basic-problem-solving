// 1. Reverse a String
/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Find Maximum
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
    }
    return max;
}

// 3. Check for Palindrome
/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// 4. Sum Array Elements
/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
    return nums.reduce((sum, n) => sum + n, 0);
}

// 5. Count Vowels
/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
    const matches = str.match(/[aeiouAEIOU]/g);
    return matches ? matches.length : 0;
}

// 6. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
    return [];
}

// 7. Flatten a Nested Array
/**
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}

// 8. Group Anagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const groups = new Map();
    for (const word of strs) {
        const key = word.split('').sort().join('');
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(word);
    }
    return Array.from(groups.values());
}

// 9. Longest Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const seen = new Map();

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1;
        }
        seen.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

// 10. Deep Clone an Object
/**
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    const clone = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}