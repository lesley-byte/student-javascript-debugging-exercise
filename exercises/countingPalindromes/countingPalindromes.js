// Global variable to keep track of the count of palindrome substrings
let palindromeCount = 0;

function isPalindrome(str) {
  // Local variable inside the isPalindrome function
  let reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

function countPalindromes(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let subStr = s.slice(i, j + 1);
      if (isPalindrome(subStr)) {
        palindromeCount++;
        console.log(`Found palindrome: ${subStr}`);
      }
    }
  }
}

// Test the function with a sample string
countPalindromes("abba");
console.log(`Total palindromes: ${palindromeCount}`);
