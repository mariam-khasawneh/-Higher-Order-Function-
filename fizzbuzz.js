// EX4: Write a function named fizzbuzz that takes in an array of numbers.
// Iterate over the array using forEach or map to determine the output based on several rules:
//   - If a number is divisible by 3, add the word "Fizz" to the output array.
//   - If the number is divisible by 5, add the word "Buzz" to the output array.
//   - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//   - Otherwise, add the number to the output array.
// Return the resulting output array.

function fizzbuzz() {
  let arr = window.prompt("Please Inter Numbers Separated by ( , ) ");
  return arr
    .split(",")
    .map((e) => parseInt(e))
    .map((element) => {
      if (element % 3 == 0 && element % 5 == 0) {
        return `Fizz Buzz`;
      } else if (element % 3 == 0) {
        return `Fizz`;
      } else if (element % 5 == 0) {
        return `Buzz`;
      } else {
        return element
      }
    });
}

console.log(fizzbuzz());
