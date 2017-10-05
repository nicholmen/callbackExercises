var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
students.sort(function (student1, student2) {
  var nameA = student1.name;
  var nameB = student2.name;
  var ageA = student1.age;
  var ageB = student2.age;
  if (nameA < nameB) {
    return -1;
  } if (nameA > nameB) {
    return 1;
  } if (nameA = nameB) {
    return ageB - ageA;
    }
});

console.log(students)