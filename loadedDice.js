function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var position = -1;

  return function() {
    position += 1;    
    if (position >= list.length) {
      position = 0;
    } 
    return list[position];
    }
  }

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());

