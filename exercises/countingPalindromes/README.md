# Debugging Instructions:

## Explaination of Palindromes

> A **_palindrome_** is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
>
> > For example, "madam" is a palindrome, while "hello" is not.

---

1. Set Initial Breakpoints

   <details>

   - [ ] [ ] Start by setting a breakpoint at the line where `countPalindromes` is called and another inside the `isPalindrome` function.

   </details>

2. Step Over/Into

   <details>

   - [ ] Use the "Step Over" functionality to go through the code line by line at the top level, and "Step Into" to delve into the nested function calls.

 </details>

3. Track Variables

   <details>

   - [ ] Observe changes to the `palindromeCount` (a global variable).
   - [ ] Monitor the values of `reverseStr` within the isPalindrome function (local variable).
   - [ ] Keep an eye on the loop variables `i` and `j`, as well as `subStr`.

   </details>

4. Call Stack and Execution Context

   <details>

   - [ ] Check the call stack as you step into and out of the `isPalindrome` function to see how the execution context changes.
   - [ ] This will help understand how local variables like `reverseStr` are created and destroyed with each call.

   </details>

5. Console Output

   <details>

   - [ ] Use the console output to follow the found palindromes and how the count is incremented.

   </details>

6. Resume and Checkpoints

   <details>

   - [ ] Occasionally use "Resume Execution" (Continue) to move to the next breakpoint and see how the program state changes over several iterations.

   </details>
