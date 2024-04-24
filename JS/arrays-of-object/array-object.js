//  --object passed as refurence
const person1 = { name: "barsh", age: 20 };
const person2 = person1;
// console.log(person2);
person2.age = 30;
// console.log(person1.age);
// /* person 1:barash 20
// /* person 2:barash 20
// person2.age=30
// console.log(person1);
// console.log(person2);
//pass object to function
const increment = (personobject) => {
  personobject.age += 1;
};
increment(person1);
console.log(person1);
