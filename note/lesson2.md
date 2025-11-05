# Tài liệu hướng dẫn ES6 - Các khái niệm cơ bản

## 1. Biến và Scope (let, const)

### Khái niệm cơ bản

**var (ES5)**

- Function-scoped
- Có thể khai báo lại
- Có hoisting

**let (ES6)**

- Block-scoped ({})
- Không thể khai báo lại trong cùng scope
- Có hoisting nhưng không được khởi tạo (Temporal Dead Zone)

**const (ES6)**

- Block-scoped
- Không thể gán lại giá trị
- Phải khởi tạo giá trị khi khai báo

### Ví dụ minh họa

```javascript
// var - function scoped
function varExample() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 - vẫn truy cập được
}

// let - block scoped
function letExample() {
  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  // console.log(y); // ReferenceError: y is not defined
}

// const - block scoped và không thể reassign
function constExample() {
  const PI = 3.14;
  // PI = 3.15; // TypeError: Assignment to constant variable

  const person = { name: "hoadv" };
  person.name = "vanhoa"; // ✅ Được phép - thay đổi thuộc tính
  // person = { name: "Bob" }; // ❌ Không được - reassign
}
```

### Bài tập thực hành

**Bài 1: Sửa lỗi scope**

```javascript
// Sửa đoạn code sau để hoạt động đúng
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2
```

**Bài 2: Sử dụng const đúng cách**

```javascript
// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
const student = {
  name: "ThuyTien",
  age: 20,
};

// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student
```

## 2. Template Literals

### Khái niệm cơ bản

- Sử dụng dấu backtick (`` ` ``) thay vì nháy đơn/nháy kép
- Cho phép string interpolation với `${}`
- Hỗ trợ multi-line strings

### Ví dụ minh họa

```javascript
// String interpolation
const name = "hoadv";
const age = 25;
console.log(`Xin chào, tôi là ${name}, năm nay ${age} tuổi.`);

// Multi-line strings
const message = `Đây là dòng đầu tiên
Đây là dòng thứ hai
Và đây là dòng thứ ba`;

// Biểu thức trong template literals
const a = 5;
const b = 10;
console.log(`Tổng của ${a} và ${b} là ${a + b}`);

// Gọi hàm trong template literals
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
console.log(`Bây giờ là: ${getCurrentTime()}`);
```

### Bài tập thực hành

**Bài 1: Tạo email template**

```javascript
// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = ``; // Viết template ở đây

console.log(emailTemplate);
```

**Bài 2: Tạo HTML template**

```javascript
// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = ``; // Viết template ở đây

console.log(productCard);
```

## 3. Enhanced Object Literals

### Khái niệm cơ bản

**Các tính năng mới:**

1. Property shorthand
2. Method shorthand
3. Computed property names

### Ví dụ minh họa

```javascript
// Property shorthand
const name = "ThuyTien";
const age = 30;

// ES5
const person1 = {
  name: name,
  age: age,
};

// ES6 - Property shorthand
const person2 = {
  name,
  age,
};

// Method shorthand
// ES5
const calculator1 = {
  add: function (a, b) {
    return a + b;
  },
};

// ES6 - Method shorthand
const calculator2 = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
};

// Computed property names
const prefix = "user_";
const id = 123;

const user = {
  [prefix + id]: "hoadv Doe",
  [`${prefix}age`]: 25,
  // Dynamic method names
  ["get" + prefix.toUpperCase() + id]() {
    return this[prefix + id];
  },
};

console.log(user.user_123); // "hoadv Doe"
console(user.getUSER_123()); // "hoadv Doe"
```

### Bài tập thực hành

**Bài 1: Sử dụng property và method shorthand**

```javascript
// Viết lại object sau sử dụng ES6 enhanced object literals
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width: width,
  height: height,
  color: color,
  calculateArea: function () {
    return this.width * this.height;
  },
  describe: function () {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};
```

**Bài 2: Sử dụng computed properties**

```javascript
// Tạo object configuration với computed property names
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config với:
// - key: `api_${env}_${version}`
// - key cho từng feature: `feature_${featureName}`
// - method: `get${env}Config()`

const config = {
  // Viết code ở đây
};
```

## Câu hỏi trắc nghiệm

### Phần 1: Biến và Scope

**Câu 1:** Kết quả của đoạn code sau là gì?

```javascript
{
  let x = 1;
  var y = 2;
}
console.log(x);
console.log(y);
```

A. 1 và 2  
B. ReferenceError và 2  
C. 1 và ReferenceError  
D. ReferenceError và ReferenceError

**Câu 2:** Đoạn code nào sau đây KHÔNG gây lỗi?

```javascript
// A
const PI = 3.14;
PI = 3.14159;

// B
let count = 0;
let count = 1;

// C
const user = { name: "hoadv" };
user.name = "vanhoa";

// D
const arr = [1, 2, 3];
arr = [4, 5, 6];
```

### Phần 2: Template Literals

**Câu 3:** Kết quả của đoạn code sau là gì?

```javascript
const a = 5;
const b = 3;
console.log(`Kết quả: ${a + b * 2}`);
```

A. "Kết quả: 11"  
B. "Kết quả: 16"  
C. "Kết quả: ${a + b _ 2}"  
D. "Kết quả: 5 + 3 _ 2"

**Câu 4:** Template literals cho phép:

```
A. String interpolation
B. Multi-line strings
C. Cả A và B
D. Không cái nào ở trên
```

### Phần 3: Enhanced Object Literals

**Câu 5:** Đoạn code nào sau đây sử dụng đúng enhanced object literals?

```javascript
// A
const name = "hoadv";
const person = { name: name };

// B
const name = "hoadv";
const person = { name };

// C
const name = "hoadv";
const person = { [name]: "value" };

// D
const name = "hoadv";
const person = { name() {} };
```

**Câu 6:** Kết quả của đoạn code sau là gì?

```javascript
const key = "dynamic";
const obj = {
  [key + "Property"]: "value",
  getValue() {
    return this.dynamicProperty;
  },
};
console.log(obj.getValue());
```

A. "value"  
B. "dynamicProperty"  
C. undefined  
D. Lỗi

---
