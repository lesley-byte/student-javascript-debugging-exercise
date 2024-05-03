// Global variable to keep track of the count of palindrome substrings
// set a breakpoint🔴
let palindromeCount = 0;

function isPalindrome(str) {
  // Local variable inside the isPalindrome function
  let reverseStr = str.split("").reverse().join(""); // set a breakpoint🔴
  return str === reverseStr;
}

function countPalindromes(s) {
  // set a breakpoint🔴
  for (let i = 0; i < s.length; i++) {
    // set a breakpoint🔴
    for (let j = i; j < s.length; j++) {
      // set a breakpoint🔴
      let subStr = s.slice(i, j + 1);
      if (isPalindrome(subStr)) {
        palindromeCount++;
        console.log(`Found palindrome: ${subStr}`);
      }
    }
  }
}

// Test the function with a sample string
countPalindromes("abba"); // set a breakpoint🔴
console.log(`Total palindromes: ${palindromeCount}`);
