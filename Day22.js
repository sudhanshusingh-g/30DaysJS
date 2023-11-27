// Write a function to deeply compare two objects for equality.
// Description: Given two objects, 
// the function should return true if they are deeply equal and false otherwise.
// Solution Approach: Recursively compare properties of both objects.

let student1={
    name:"Rahul",
    age:24,
    subject:['History','Geopgraphy','Political Science'],
    address:{
        area:'Bajrang Nagar',
        PIN:200001
    }
}
let student2={
    name:"Rahul",
    age:24,
    subject:['History','Geopgraphy','Political Science'],
    address:{
        area:'Bajrang Nagar',
        PIN:200001
    }
}

const person1 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35 
};

const person2 = {
    "age": 35,
    "firstName": "John",
    "lastName": "Doe"
    
};
 
const isDeepEqual = (object1, object2) => {

  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if ((isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};

const isObject = (object) => {
  return object != null && typeof object === "object";
};
console.log(isDeepEqual(person1, person2)); //true
console.log(isDeepEqual(student1, student2)); //true