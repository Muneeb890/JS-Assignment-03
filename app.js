//1. **Map Method:**
//- Q: How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?
/*var array = [
    {fname : "Muhammad" , lname : "Ali"},
    {fname : "Muhammad" , lname : "Muneeb"},
    {fname : "Muhammad" , lname : "Muneer"},
];
var b = array.map(test);
document.write(b);

function test(x){
    return x.fname + " " + x.lname;
}*/

//2. **Filter Method:**
//- Q: Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition.
/*const students = [
    { name: 'Ahmed', grade: 85 },
    { name: 'Bilal', grade: 92 },
    { name: 'Sarah', grade: 78 },
    { name: 'Danish', grade: 95 }
  ];

  const passingStudents = students.filter(function (student) {
    return student.grade >= 80;
  });
  
  console.log(passingStudents);*/

  //3. **Sort Method:**
//- Q: Discuss the default behavior of the `sort` method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?
/*Default Behavior for Strings:
const fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort();

console.log(fruits);*/

/*Default Behavior for Numbers:
const numbers = [10, 5, 8, 2, 1];
numbers.sort();

console.log(numbers);*/

//Custom Comparison Function for Sorting Objects:
/*const students = [
    { name: 'Ali', grade: 85 },
    { name: 'Asim', grade: 92 },
    { name: 'Basit', grade: 78 },
    { name: 'Moin', grade: 95 }
  ];
  // Sorting students by grade in descending order
  students.sort(function (a, b) {
    return b.grade - a.grade;
  });
  
  console.log(students);*/

  //4. **Reduce Method:**
//- Q: Describe the purpose of the `reduce` method and provide an example where you use it to compute a single value from an array of numbers.
// .reduce() = reduce the elements of an array to a single value.
/* 
const prices = [15,10,25,40,55];

const total = prices.reduce(sum);

console.log(total);

function sum(accumulator, element){
    return accumulator + element;
}
*/

//5. **Find Method:**
//- Q: How does the `find` method differ from `filter`? Give an example of a scenario where using `find` is more appropriate than `filter`.
//Filter Method:
//Creates a new array containing all elements that meet a specified condition.
//Find Method:
//Returns the first element in the array that satisfies a specified condition.
/*
const users = [
    { id: 1, name: 'Ali', role: 'admin' },
    { id: 2, name: 'Bisma', role: 'user' },
    { id: 3, name: 'Sarah', role: 'admin' },
  ];
  
  // Using find to get the first user with the role 'admin'
  const firstAdminUser = users.find(function (user) {
    return user.role === 'admin';
  });
  console.log(firstAdminUser);*/

  //6. **Combining Methods:**

//- Q: Create a chain of array methods (`map`, `filter`, `reduce`, etc.) to transform an array of strings into a single concatenated string with a specific condition.
/*
const stringArray = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

const result = stringArray
  .filter(str => str.length > 3)  
  .map(str => str.toUpperCase())     
  .reduce((concatenatedString, str) => concatenatedString + ' ' + str, ''); 

console.log(result);
*/

//7. **Callback Functions:**
//- Q: Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the `map` method.
/*
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubledNumbers);
*/

//**Immutable Operations:**
//- Q: Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`.
//Example using map:
/*
const originalArray = [1, 2, 3, 4, 5];

// Performing an immutable map operation to double each element
const newArray = originalArray.map(num => num * 2);

console.log(originalArray); 
console.log(newArray);      

//Example using filter:
const originalArray = [1, 2, 3, 4, 5];

// Performing an immutable filter operation to keep only even numbers
const newArray = originalArray.filter(num => num % 2 === 0);

console.log(originalArray);
console.log(newArray);      
*/

//10. **Performance Considerations:**
//- Q: Compare the performance implications of using `map` versus `forEach`. In what scenarios would you prefer one over the other, and why?
/*
// Using map to double each element and create a new array
const originalArray = [1, 2, 3, 4, 5];
const doubledValues = originalArray.map(num => num * 2);

console.log(doubledValues);

// Using forEach to log each element without creating a new array
originalArray.forEach(num => console.log(num));
  
*/

//- Q: Given an array of integers, use the `map` method to square each element and return a new array with the squared values.
/*
const originalArray = [1, 2, 3, 4, 5];

// Using map to square each element and create a new array
const squaredValues = originalArray.map(num => num ** 2);

console.log(squaredValues);
*/

//Q: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method.
/*
const originalArray = ['apple', 'banana', 'kiwi', 'orange', 'grape'];

const filteredAndCapitalized = originalArray
  .filter(str => str.length >= 5)
  .map(str => str.toUpperCase());

console.log(filteredAndCapitalized);
*/

//3. **Sorting Objects:**
//- Q: Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices.
/*
const products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 40 },
    { name: 'Product D', price: 25 }
  ];

  products.sort((a, b) => b.price - a.price);
  
  console.log(products);
  */
  



 
  



  
  