var words = ["ground", "control", "to", "major", "tom"];

function map(arr, transformer){
  var transformedArray = [];
  for (var i = 0; i < arr.length; i++) {
    transformedArray.push(transformer(arr[i]));
  }
  return transformedArray;
}

console.log(map(words, function(word) {
  return word.length;
}))

