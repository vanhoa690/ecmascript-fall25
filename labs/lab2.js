// var - function scoped function{}

const { use } = require("react");

// block scoped {} function {}, if () {}
function varExample() {
  if (true) {
    const x = 10;
  }
  console.log(x); // 10 - vẫn truy cập được
}

// varExample();

// const - block scoped và không thể reassign
function constExample() {
  const PI = 3.14;
  //   PI = 3.15; // TypeError: Assignment to constant variable

  const person = {
    name: "hoadv",
  };
  person.name = "vanhoa";
  person = { name: "Bob" }; // ❌ Không được - reassign
  console.log(person.name);
}

constExample();

// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `
Xin chao ${user.name} !
Cam on 




Tran trong , Nho ung ho nhe

`; // Viết template ở đây

console.log(emailTemplate);
