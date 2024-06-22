// Ex3: Use forEach to  Return all the names in the array
// [“Rawan", "Wesam", "Hind", "Muhammad", "Esraa", “Dareen”] using loops.


function returnNmaes() {
  let arr = window.prompt("Please inter Names seperated by commas");
  return arr.split(",").forEach(element => console.log(element))
}

returnNmaes();