// Sample array of numbers - set a breakpoint here
const sampleNumbers = [3, 5, 1, 8, 2, 9, 4];

// Function to find the maximum number in an array
function findMax(numbers) {
  // set a breakpoint
  let max = numbers[0]; // Assume the first number is the max

  for (let i = 1; i < numbers.length; i++) {
    // set a breakpoint
    console.log(`Comparing ${max} with ${numbers[i]}`);
    if (numbers[i] > max) {
      // set a breakpoint
      max = numbers[i]; // Update max if current number is larger
      console.log(`New max found: ${max}`);
    }
  }

  return max;
}

const maximum = findMax(sampleNumbers);
console.log(`The maximum number in the array is ${maximum}`);
