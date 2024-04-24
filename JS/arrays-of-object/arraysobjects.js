//array of object
const student = [
  { name: "bob", age: 30, grage: "a" },
  { name: "arjun", age: 20, grage: "b" },
];
const student1 = student[0].name;
// console.log(student1); //

//add new studnet
const addstudent = (name, age, grage) => {
  const newstundet = { name: name, age: age, grage: grage };
  student.push(newstundet);
};
addstudent("c", 20, "c");
const st = student;
console.log(st);
