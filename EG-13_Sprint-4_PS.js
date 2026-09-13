/**
 * EG-13_Sprint-4_PS.js
 * Endgame-13 Sprint-4 Problem Solving Task
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const c1 = s[i];
        const c2 = t[i];

        if (mapST.has(c1) && mapST.get(c1) !== c2) return false;
        if (mapTS.has(c2) && mapTS.get(c2) !== c1) return false;

        mapST.set(c1, c2);
        mapTS.set(c2, c1);
    }

    return true;
};

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        const w = words[i];

        if (charToWord.has(c) && charToWord.get(c) !== w) return false;
        if (wordToChar.has(w) && wordToChar.get(w) !== c) return false;

        charToWord.set(c, w);
        wordToChar.set(w, c);
    }

    return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum -= s.charCodeAt(i);
    }
    for (let i = 0; i < t.length; i++) {
        sum += t.charCodeAt(i);
    }
    return String.fromCharCode(sum);
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findBound = (isFirst) => {
        let lo = 0, hi = nums.length - 1;
        let result = -1;

        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);

            if (nums[mid] === target) {
                result = mid;
                if (isFirst) {
                    hi = mid - 1;
                } else {
                    lo = mid + 1;
                }
            } else if (nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return result;
    };

    const first = findBound(true);
    if (first === -1) return [-1, -1];
    const last = findBound(false);

    return [first, last];
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0);

    for (let i = 0; i < s1.length; i++) {
        need[s1.charCodeAt(i) - a]++;
        window[s2.charCodeAt(i) - a]++;
    }

    const matches = () => {
        for (let i = 0; i < 26; i++) {
            if (need[i] !== window[i]) return false;
        }
        return true;
    };

    if (matches()) return true;

    for (let i = s1.length; i < s2.length; i++) {
        window[s2.charCodeAt(i) - a]++;
        window[s2.charCodeAt(i - s1.length) - a]--;

        if (matches()) return true;
    }

    return false;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    if (p.length > s.length) return result;

    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0);

    for (let i = 0; i < p.length; i++) {
        need[p.charCodeAt(i) - a]++;
        window[s.charCodeAt(i) - a]++;
    }

    const matches = () => {
        for (let i = 0; i < 26; i++) {
            if (need[i] !== window[i]) return false;
        }
        return true;
    };

    if (matches()) result.push(0);

    for (let i = p.length; i < s.length; i++) {
        window[s.charCodeAt(i) - a]++;
        window[s.charCodeAt(i - p.length) - a]--;

        if (matches()) result.push(i - p.length + 1);
    }

    return result;
};
