function findMax(numbers) {
  let max = numbers[0]; // Assume the first number is the max

  for (let i = 1; i < numbers.length; i++) {
    console.log(`Comparing ${max} with ${numbers[i]}`);
    if (numbers[i] > max) {
      max = numbers[i]; // Update max if current number is larger
      console.log(`New max found: ${max}`);
    }
  }

  return max;
}

// Sample array of numbers
const sampleNumbers = [3, 5, 1, 8, 2, 9, 4];
const maximum = findMax(sampleNumbers);
console.log(`The maximum number in the array is ${maximum}`);
