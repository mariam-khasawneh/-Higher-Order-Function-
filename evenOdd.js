// Ex2:  Write a function that takes an array of numbers as input,
// uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
// For example:([1,2,3,"Rawan"]) returns ['odd','even','odd','N/A'].

function evenOdd() {
  let arr = window.prompt("Please inter inputs seperated by commas");
  return arr
    .split(",")
    .map((element) => Number(element))
    .map((element) => {
      if (Number.isNaN(element)) {
        return `N/A`;
      } else if (element % 2 == 0) {
        return `Even`;
      } else {
        return `Odd`;
      }
    });
}

console.log(evenOdd());
