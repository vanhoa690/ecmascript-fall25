# Hướng dẫn ES6+ Chủ đề Functions nâng cao

## 1. Arrow Functions

### Lý thuyết

Arrow functions (hàm mũi tên) là cú pháp ngắn gọn để viết hàm trong ES6+:

**Đặc điểm:**

- Ngắn gọn hơn function thông thường
- Không có `this`, `arguments`, `super`, hoặc `new.target` riêng
- Không thể dùng làm constructor (không thể gọi với `new`)
- `this` được kế thừa từ phạm vi bên ngoài

### Ví dụ minh họa

```javascript
// Function thông thường
function sum(a, b) {
  return a + b;
}

// Arrow function tương đương
const sumArrow = (a, b) => {
  return a + b;
};

// Arrow function rút gọn (khi chỉ có 1 biểu thức)
const sumShort = (a, b) => a + b;

// Với 1 tham số - có thể bỏ dấu ngoặc
const square = (x) => x * x;

// Không có tham số
const sayHello = () => console.log("Hello!");

// Trả về object literal - cần đặt trong ngoặc
const createUser = (name, age) => ({ name, age });

// Sử dụng với array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
const evens = numbers.filter((num) => num % 2 === 0);
```

### Vấn đề với `this`

```javascript
// Với function thông thường
const obj1 = {
  name: "Object 1",
  tasks: ["task1", "task2", "task3"],
  showTasks: function () {
    this.tasks.forEach(function (task) {
      console.log(this.name + ": " + task); // this.name là undefined
    });
  },
};

// Giải pháp với arrow function
const obj2 = {
  name: "Object 2",
  tasks: ["task1", "task2", "task3"],
  showTasks: function () {
    this.tasks.forEach((task) => {
      console.log(this.name + ": " + task); // this.name hoạt động đúng
    });
  },
};
```

## 2. Default Parameters

### Lý thuyết

Cho phép khai báo giá trị mặc định cho tham số hàm khi không được truyền vào hoặc truyền `undefined`.

### Ví dụ minh họa

```javascript
// Không có default parameters (ES5)
function greet1(name) {
  name = name || "Guest";
  return "Hello, " + name;
}

// Với default parameters (ES6+)
function greet2(name = "Guest") {
  return `Hello, ${name}`;
}

// Multiple default parameters
function createOrder(product, quantity = 1, price = 100) {
  return {
    product,
    quantity,
    price,
    total: quantity * price,
  };
}

// Default parameters với expressions
function getCurrentYear() {
  return new Date().getFullYear();
}

function createProfile(name, birthYear = getCurrentYear() - 18) {
  return {
    name,
    birthYear,
    age: getCurrentYear() - birthYear,
  };
}

// Tham số mặc định có thể tham chiếu đến tham số trước đó
function calculateArea(width, height = width) {
  return width * height;
}

console.log(greet2()); // "Hello, Guest"
console.log(greet2("Alice")); // "Hello, Alice"
console.log(createOrder("Laptop")); // {product: "Laptop", quantity: 1, price: 100, total: 100}
console.log(calculateArea(5)); // 25 (hình vuông)
console.log(calculateArea(5, 3)); // 15 (hình chữ nhật)
```

## 3. Rest và Spread Operators

### Rest Parameters (`...`)

**Lý thuyết:** Thu thập các tham số còn lại thành một mảng.

```javascript
// Thu thập tất cả tham số
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Kết hợp với tham số thông thường
function introduce(name, age, ...hobbies) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Hobbies: ${hobbies.join(", ")}`);
}

// Destructuring với rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
const { name, age, ...otherInfo } = {
  name: "John",
  age: 25,
  city: "Hanoi",
  country: "Vietnam",
};

console.log(sumAll(1, 2, 3, 4, 5)); // 15
introduce("Bob", 30, "Reading", "Gaming", "Traveling");
// Name: Bob
// Age: 30
// Hobbies: Reading, Gaming, Traveling
```

### Spread Operator (`...`)

**Lý thuyết:** Giải nén các phần tử của mảng/object.

```javascript
// Với mảng
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Sao chép mảng
const original = [1, 2, 3];
const copy = [...original];

// Với object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // {a: 1, b: 2, c: 3, d: 4}

// Ghi đè thuộc tính
const baseConfig = { theme: "dark", language: "en" };
const userConfig = { theme: "light", fontSize: 14 };
const finalConfig = { ...baseConfig, ...userConfig }; // {theme: "light", language: "en", fontSize: 14}

// Truyền tham số cho hàm
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // 5

// Tạo mảng mới với phần tử thêm vào
const newArray = [0, ...numbers, 6]; // [0, 1, 2, 3, 4, 5, 6]
```

## Bài tập thực hành

### Bài tập 1: Chuyển đổi hàm

Chuyển các hàm sau thành arrow functions:

```javascript
// Function 1
function multiply(a, b) {
  return a * b;
}

// Function 2
function isPositive(number) {
  return number >= 0;
}

// Function 3
function getRandomNumber() {
  return Math.random();
}

// Function 4
document.addEventListener("click", function () {
  console.log("Clicked!");
});
```

### Bài tập 2: Sử dụng Default Parameters

Viết lại hàm sau sử dụng default parameters:

```javascript
function createUser(name, age, isAdmin) {
  if (name === undefined) name = "Anonymous";
  if (age === undefined) age = 18;
  if (isAdmin === undefined) isAdmin = false;

  return {
    name: name,
    age: age,
    isAdmin: isAdmin,
  };
}
```

### Bài tập 3: Rest và Spread

Viết các hàm sau:

1. Hàm `mergeArrays` nhận nhiều mảng và trả về mảng hợp nhất
2. Hàm `sumAll` tính tổng tất cả tham số truyền vào
3. Hàm `createProduct` nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định

### Bài tập 4: Ứng dụng thực tế

Tạo hàm `shoppingCart` với:

- Tham số đầu tiên là tên khách hàng
- Các tham số tiếp theo là các sản phẩm
- Sử dụng rest parameters để thu thập sản phẩm
- Trả về object chứa thông tin đơn hàng

## Câu hỏi trắc nghiệm

**1. Kết quả của đoạn code sau là gì?**

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(5));
```

A. 5  
B. NaN  
C. undefined  
D. Lỗi syntax

**2. Đoạn code nào sau đây KHÔNG hợp lệ?**
A. `const func = x => x * 2;`  
B. `const func = (x, y) => { return x + y; };`  
C. `const func = () => { console.log("Hello"); };`  
D. `const func = x, y => x + y;`

**3. Kết quả của đoạn code sau là gì?**

```javascript
function greet(name = "Guest", message = "Hello") {
  return `${message}, ${name}!`;
}
console.log(greet(undefined, "Hi"));
```

A. "Hello, Guest!"  
B. "Hi, Guest!"  
C. "Hello, undefined!"  
D. Lỗi

**4. Kết quả của đoạn code sau là gì?**

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers.length);
```

A. 3  
B. 6  
C. [1, 2, 3, 4, 5, 6]  
D. Lỗi

**5. Đoạn code nào sau đây sử dụng đúng rest parameters?**
A. `function sum(...numbers) { return numbers.reduce((a, b) => a + b); }`  
B. `function sum(numbers...) { return numbers.reduce((a, b) => a + b); }`  
C. `const sum = ...numbers => numbers.reduce((a, b) => a + b);`  
D. `const sum = (a, b, ...rest) => a + b + rest;`

---
