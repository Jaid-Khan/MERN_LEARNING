
// ---------------------- MAP OVER AN ARRAY ----------------------
// Declare an array containing strings (names of characters)
let arr = ["Tony", "Captain", "Hulk", "Thor"];

// Use map() to loop over each element of the array
// map() takes a callback function with two parameters: item (current value) and index (position)
// For each element, console.log prints both the name and its index
arr.map((item, index) => {
    console.log(item, index);
});
