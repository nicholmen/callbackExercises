// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

function findWaldo(arr, found) {
  arr.forEach(function(person, index) {
    if (person === "Waldo") {
      found(person, index);   // execute callback
    }
  });
}

function actionWhenFound(element, index) {
  console.log("Found him at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);