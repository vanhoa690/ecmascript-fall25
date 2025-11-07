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
