// Function thông thường
function sum(a, b) {
  return a + b;
}

// Arrow function tương đương
const sumArrow = (a, b) => {
  return a + b;
};

console.log(sumArrow(1, 2));

// Arrow function rút gọn (khi chỉ có 1 biểu thức)
const sumShort = (a, b) => a + b; // 1 biểu thức : => return

console.log(sumShort(1, 2));

// Trả về object literal - cần đặt trong ngoặc
const createUser = (name, age) => {
  return {
    name,
    age,
  };
};

const createUserShort = (name, age) => ({ name, age }); // tra ve object

// Sử dụng với array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
const evens = numbers.filter((num) => num % 2 === 0);

// Rest Parameters (...)
// Thu thập tất cả tham số
function sumAll(...numbers) {
  console.log(numbers); // [numbers]
  return numbers.map((item) => console.log(item));
  //   return numbers.reduce((total, num) => total + num, 0);
}

// sumAll(1); // [1]
// sumAll(1, 2); // [1, 2 ]

// Kết hợp với tham số thông thường
function introduce(name, age, ...hobbies) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Hobbies: ${hobbies.join(", ")}`);
}

// introduce("hoadv", 30, "hoc", "choi");

// Với mảng
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr21 = [7, 8, 9];

const arr3 = arr1.concat(arr2); // [1,2,3,4,5,6]
console.log(arr3);

// Spread Operator (...)
const arr4 = [...arr1, ...arr2, ...arr21]; // [1, 2, 3, 4, 5, 6,7,8,9]

// Với object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // {a: 1, b: 2, c: 3, d: 4}

// Ghi đè thuộc tính
const baseConfig = { theme: "dark", language: "en" };
const userConfig = { theme: "light", fontSize: 14 };
const finalConfig = { ...baseConfig, ...userConfig }; // {theme: "light", language: "en", fontSize: 14}

// Với default parameters (ES6+)
function greet2(name = "hoadv", age = 21) {
  return `Hello, ${name}: ${age}`;
}

greet2("namvn");
