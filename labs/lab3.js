// arrow function
const sumArrow = (a, b) => {
  return a + b;
};

// rut gon lai: funtion, return
const sumShort = (a, b) => a + b; // tong a va b, return

function tinhtong(a, b) {
  const c = a + b;
  return c;
}

const displayFullName = (fistname, lastname) =>
  `Ho ten: ${fistname} ${lastname}`;

const sumAb = (a, b) => {
  const a2 = a * 2;
  return a2 + b;
}; // tong a va b, return

// Trả về object literal - cần đặt trong ngoặc
const createUser = (name, age) => {
  return {
    name,
    age,
  };
};

const createUserShort = (name, age) => ({
  name,
  age,
});

// sumArrow ten funtion
// (a, b): tham sao
// { } : body fucntion
// => Arrow

// Với default parameters (ES6+)
function greet2(name = "Default", age = 20) {
  return `Hello, ${name} tuoi ${age}`;
}

console.log(greet2("hoadv"));

//Rest Parameters
// gom Parameters =>  array [Parameters]
function sumAll(...numbers) {
  console.log(numbers);
  return numbers.map((item) => console.log(item));
  //   return numbers.reduce((total, num) => total + num, 0);
}

// sumAll(1);
// sumAll(1, 2);
sumAll(1, 2, 3);

// Spread Operator (...)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr21 = [4, 5, 6];
const arr3 = arr1.concat(arr2).concat(arr21); // array: gom arr1, arr2

const arr4 = [...arr1, ...arr2, ...arr21]; // array: gom arr1, arr2

// Với object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // {a: 1, b: 2, c: 3, d: 4}

// Ghi đè thuộc tính
const baseConfig = { theme: "dark", language: "en" };
const userConfig = { theme: "light", fontSize: 14 };
const finalConfig = { ...baseConfig, ...userConfig }; // {theme: "light", language: "en", fontSize: 14}
