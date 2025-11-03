# Giới thiệu về ECMAScript

## Lịch sử và các phiên bản ECMAScript

### Lịch sử phát triển

**ECMAScript** (ES) là một đặc tả kỹ thuật cho ngôn ngữ kịch bản, được chuẩn hóa bởi tổ chức **Ecma International**.

**Dòng thời gian các phiên bản quan trọng:**

| Năm  | Phiên bản | Tên gọi         | Tính năng nổi bật                         |
| ---- | --------- | --------------- | ----------------------------------------- |
| 1997 | ES1       | ECMAScript 1    | Phiên bản đầu tiên                        |
| 1998 | ES2       | ECMAScript 2    | Chỉnh sửa nhỏ                             |
| 1999 | ES3       | ECMAScript 3    | Regular expressions, try/catch            |
| 2009 | ES5       | ECMAScript 5    | Strict mode, JSON support                 |
| 2015 | ES6       | ECMAScript 2015 | **Cập nhật lớn nhất**                     |
| 2016 | ES7       | ECMAScript 2016 | Array.includes(), Exponentiation operator |
| 2017 | ES8       | ECMAScript 2017 | Async/await, Object.entries()             |
| 2018 | ES9       | ECMAScript 2018 | Rest/spread properties, Promise.finally() |
| 2019 | ES10      | ECMAScript 2019 | Array.flat(), Object.fromEntries()        |
| 2020 | ES11      | ECMAScript 2020 | Optional chaining, Nullish coalescing     |
| 2021 | ES12      | ECMAScript 2021 | String.replaceAll(), Logical assignment   |
| 2022 | ES13      | ECMAScript 2022 | Top-level await, Class fields             |

### Sự khác biệt giữa JavaScript và ECMAScript

**JavaScript** là ngôn ngữ lập trình, trong khi **ECMAScript** là đặc tả kỹ thuật mà JavaScript tuân theo.

````javascript
// JavaScript là sự triển khai của ECMAScript
// Có nhiều "flavor" của JavaScript:
// - Browser JavaScript (Chrome, Firefox, Safari)
// - Node.js JavaScript
// - Deno JavaScript

# So sánh chi tiết

| Đặc điểm | ECMAScript | JavaScript |
|-----------|-------------|-------------|
| **Bản chất** | Đặc tả kỹ thuật | Ngôn ngữ lập trình |
| **Mục đích** | Chuẩn hóa ngôn ngữ | Triển khai thực tế |
| **Phạm vi** | Core language features | Core + Web APIs (DOM, BOM) |
| **Ví dụ** | `let`, `const`, `arrow functions` | `document.getElementById()`, `window.alert()` |

---

## Các khái niệm cơ bản ES6+

### Biến và Scope (`let`, `const`)

**ES5 trở về trước:**

```javascript
var name = "hoadv"; // Function scope
name = "khoa";     // Có thể reassign
var name = "hung";  // Có thể redeclare
````

**ES6 trở đi:**

```javascript
// let - Block scope, có thể reassign nhưng không thể redeclare
let age = 25;
age = 26; // ✅ Hợp lệ
// let age = 27;    // ❌ Lỗi: không thể redeclare

// const - Block scope, không thể reassign hoặc redeclare
const PI = 3.14159;
// PI = 3.14;       // ❌ Lỗi: không thể reassign
```

**Ví dụ về scope:**

```javascript
function demonstrateScope() {
  if (true) {
    var varVariable = "I'm var"; // Function scope
    let letVariable = "I'm let"; // Block scope
    const constVariable = "I'm const"; // Block scope
  }

  console.log(varVariable); // ✅ "I'm var"
  // console.log(letVariable); // ❌ Lỗi: not defined
  // console.log(constVariable); // ❌ Lỗi: not defined
}
```

---

### Template Literals

**ES5:**

```javascript
var name = "hoadv";
var age = 30;
var message = "Hello, my name is " + name + " and I'm " + age + " years old.";
```

**ES6:**

```javascript
const name = "hoadv";
const age = 30;
const message = `Hello, my name is ${name} and I'm ${age} years old.`;

// Multi-line strings
const multiLine = `
    This is a
    multi-line
    string!
`;

// Biểu thức trong template literals
const calculation = `The result is: ${5 + 3 * 2}`;
```

---

### Enhanced Object Literals

#### 1. Shorthand property names:

```javascript
// ES5
var name = "hoadv";
var age = 25;
var person = {
  name: name,
  age: age,
};

// ES6
const name = "hoadv";
const age = 25;
const person = {
  name, // Tự động lấy giá trị từ biến name
  age, // Tự động lấy giá trị từ biến age
};
```

#### 2. Method definitions:

```javascript
// ES5
var calculator = {
  add: function (a, b) {
    return a + b;
  },
};

// ES6
const calculator = {
  add(a, b) {
    // Cú pháp ngắn gọn hơn
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
};
```

#### 3. Computed property names:

```javascript
// ES5
var propName = "status";
var obj = {};
obj[propName] = "active";

// ES6
const propName = "status";
const obj = {
  [propName]: "active", // Computed property
  ["user_" + propName]: "ready", // Có thể tính toán
};
```

---

## 🧩 Bài tập thực hành

### Bài tập 1: Sử dụng `let`, `const` và Template Literals

**Yêu cầu:**  
Viết hàm tính chỉ số BMI (Body Mass Index) với công thức:  
👉 `BMI = weight / (height * height)`

```javascript
function calculateBMI(weight, height) {
  // TODO: Sử dụng const cho các hằng số
  // TODO: Sử dụng template literals để tạo thông báo
  // TODO: Phân loại BMI theo:
  // - Dưới 18.5: Thiếu cân
  // - 18.5 - 24.9: Bình thường
  // - 25 - 29.9: Thừa cân
  // - Trên 30: Béo phì
}

// Ví dụ sử dụng
console.log(calculateBMI(70, 1.75)); // "BMI: 22.86 - Phân loại: Bình thường"
```

---

### Bài tập 2: Enhanced Object Literals

**Yêu cầu:**  
Tạo đối tượng quản lý sách sử dụng enhanced object literals.

```javascript
function createBook(title, author, year, price) {
  // TODO: Sử dụng shorthand properties
  // TODO: Thêm method getBookInfo() trả về thông tin sách
  // TODO: Thêm method tính giá sau giảm giá (discount %)
  // TODO: Sử dụng computed property names
}

// Ví dụ sử dụng
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10)); // Giảm 10%
```

---

### Bài tập 3: Trắc nghiệm

**Câu 1:** Sự khác biệt chính giữa `var` và `let` là:

A. var có block scope, let có function scope  
B. ✅ var có function scope, let có block scope  
C. Cả hai đều có block scope  
D. Không có sự khác biệt

---

**Câu 2:** Template literals được biểu thị bằng:

A. Dấu nháy đơn ''  
B. Dấu nháy kép ""  
C. ✅ Dấu backtick ``  
D. Dấu ngoặc kép []

---

**Câu 3:** Trong enhanced object literals, `{name}` tương đương với:

A. {name: "name"}  
B. ✅ {name: name}  
C. {"name": name}  
D. Cả B và C

---

**Câu 4:** Câu nào sau đây là đúng về `const`:

A. Có thể reassign giá trị  
B. Có thể redeclare  
C. ✅ Phải khởi tạo giá trị khi khai báo  
D. Có function scope

---
