// Ex1 :  Write a function that takes an array of integers as input,
// iterates over the array, and returns a new array.
//  The returned array should contain the result of raising 2 to the power of the original input element.
// For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
// Use for and forEach and then map to solve this question to see the difference between the three ways

// ================================================= for raisingTwo =================================================
// function raisingTwo() {
//   let arr = window.prompt("Please inter inputs seperated by commas");
//   arr = arr.split(",");
//   let newArr = []
//   for (i = 0; i < arr.length; i++) {
//     newArr.push(Math.pow(2,arr[i]))
//   }
//   return `[${newArr}]`
// }


// ================================================= foreach raisingTwo =================================================
// function raisingTwo() {
//   let arr = window.prompt("Please inter inputs seperated by commas");
//   arr = arr.split(",");
//   let newArr = []
//   arr.forEach(element => {
//     newArr.push(Math.pow(2,element))
//   });
//   return `[${newArr}]`
// }


// ================================================= map raisingTwo =================================================
// function raisingTwo() {
//   let arr = window.prompt("Please inter inputs seperated by commas");
//   return `[${arr.split(',').map(num => Math.pow(2,num))}]`
// }



document.write(raisingTwo());
