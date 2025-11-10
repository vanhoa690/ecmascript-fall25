# ES6: Destructuring và Lập trình bất đồng bộ

## 1. Destructuring trong ES6

### 1.1 Array Destructuring

#### Lý thuyết

Array destructuring cho phép extract dữ liệu từ mảng và gán vào các biến riêng biệt.

**Cú pháp:**

```javascript
const [variable1, variable2, ...rest] = array;
```

#### Ví dụ minh họa

```javascript
// Cơ bản
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor); // 'red'
console.log(secondColor); // 'green'

// Bỏ qua phần tử
const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers;
console.log(first, third); // 1 3

// Rest pattern
const fruits = ["apple", "banana", "orange", "mango"];
const [firstFruit, ...otherFruits] = fruits;
console.log(firstFruit); // 'apple'
console.log(otherFruits); // ['banana', 'orange', 'mango']

// Giá trị mặc định
const [a = 1, b = 2] = [10];
console.log(a, b); // 10 2

// Hoán đổi giá trị
let x = 1,
  y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1
```

#### Bài tập Array Destructuring

**Bài 1:** Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng

```javascript
function getFirstLast(array) {
  // Your code here
}

console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]
```

**Bài 2:** Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng

```javascript
function swapElements(arr) {
  // Your code here
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]
```

### 1.2 Object Destructuring

#### Lý thuyết

Object destructuring cho phép extract thuộc tính từ object và gán vào biến.

**Cú pháp:**

```javascript
const { property1, property2: newName, ...rest } = object;
```

#### Ví dụ minh họa

```javascript
// Cơ bản
const person = {
  name: "hoadv",
  age: 30,
  city: "Viet Nam",
};

const { name, age } = person;
console.log(name, age); // 'hoadv' 30

// Đổi tên biến
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // 'hoadv' 30

// Giá trị mặc định
const { name, age, country = "VN" } = person;
console.log(country); // 'VN'

// Nested destructuring
const company = {
  name: "FPT Corp",
  address: {
    street: "123 Pham Van Bach st",
    city: "HaNoi",
  },
};

const {
  address: { street, city },
} = company;
console.log(street, city); // '123 Pham Van Bach St' 'HaNoi'

// Kết hợp với function parameters
function displayPerson({ name, age, city = "Unknown" }) {
  console.log(`${name} is ${age} years old from ${city}`);
}

displayPerson(person); // hoadv is 30 years old from Viet Nam
```

#### Bài tập Object Destructuring

**Bài 1:** Viết hàm extract thông tin user

```javascript
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  // Your code here
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }
```

**Bài 2:** Viết hàm với tham số mặc định

```javascript
function createProduct({ name, price, category = "general", inStock = true }) {
  // Your code here
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }
```

## 2. Lập trình bất đồng bộ

### 2.1 Callbacks

#### Lý thuyết

Callback là hàm được truyền vào hàm khác như một tham số và được thực thi sau khi hoàn thành tác vụ.

#### Ví dụ minh họa

```javascript
// Callback cơ bản
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "hoadv" };
    callback(null, data);
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Data:", data);
  }
});

// Callback hell example
function step1(callback) {
  setTimeout(() => callback("Step 1 done"), 1000);
}

function step2(data, callback) {
  setTimeout(() => callback(null, data + " -> Step 2 done"), 1000);
}

function step3(data, callback) {
  setTimeout(() => callback(null, data + " -> Step 3 done"), 1000);
}

// Callback hell
step1((result1) => {
  step2(result1, (error, result2) => {
    if (error) return console.error(error);
    step3(result2, (error, result3) => {
      if (error) return console.error(error);
      console.log("Final result:", result3);
    });
  });
});
```

### 2.2 Promises

#### Lý thuyết

Promise đại diện cho giá trị sẽ có trong tương lai, có 3 trạng thái: pending, fulfilled, rejected.

**Cú pháp:**

```javascript
new Promise((resolve, reject) => {
  // Async operation
})
  .then((result) => {
    /* handle success */
  })
  .catch((error) => {
    /* handle error */
  })
  .finally(() => {
    /* always execute */
  });
```

#### Ví dụ minh họa

```javascript
// Tạo Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "hoa dv" });
      } else {
        reject("Invalid user ID");
      }
    }, 1000);
  });
}

// Sử dụng Promise
fetchUserData(1)
  .then((user) => {
    console.log("User data:", user);
    return user.name;
  })
  .then((userName) => {
    console.log("User name:", userName);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operation completed");
  });

// Promise.all - chạy song song
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [1, 2, 3]
});

// Promise.race - lấy kết quả đầu tiên
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("Fast"), 500)),
  new Promise((resolve) => setTimeout(() => resolve("Slow"), 1000)),
]).then((result) => console.log(result)); // 'Fast'
```

#### Bài tập Promises

**Bài 1:** Viết hàm delay trả về Promise

```javascript
function delay(ms) {
  // Your code here
}

delay(2000).then(() => console.log("2 seconds passed"));
```

**Bài 2:** Viết hàm fetchMultipleData

```javascript
function fetchMultipleData(urls) {
  // Your code here
}

fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
  console.log(users)
);
```

### 2.3 Async/Await

#### Lý thuyết

Async/await cung cấp cú pháp đồng bộ để viết code bất đồng bộ.

**Cú pháp:**

```javascript
async function functionName() {
  try {
    const result = await promise;
  } catch (error) {
    // handle error
  }
}
```

#### Ví dụ minh họa

```javascript
// Async/await cơ bản
async function getUserData(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log("User:", user);
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
}

// Sử dụng nhiều await
async function processUser(userId) {
  try {
    const user = await fetchUserData(userId);
    const posts = await fetchUserPosts(user.id);
    const comments = await fetchUserComments(user.id);

    return {
      ...user,
      posts,
      comments,
    };
  } catch (error) {
    console.error("Processing failed:", error);
  }
}

// Xử lý song song với Promise.all
async function getDashboardData(userId) {
  try {
    const [user, settings, notifications] = await Promise.all([
      fetchUserData(userId),
      fetchUserSettings(userId),
      fetchNotifications(userId),
    ]);

    return { user, settings, notifications };
  } catch (error) {
    console.error("Dashboard data error:", error);
  }
}

// Async function luôn trả về Promise
async function calculateSum(a, b) {
  return a + b;
}

calculateSum(2, 3).then((result) => console.log(result)); // 5
```

#### Bài tập Async/Await

**Bài 1:** Viết lại callback hell thành async/await

```javascript
// Viết lại hàm này sử dụng async/await
function processOrder(orderId, callback) {
  getOrder(orderId, (order) => {
    getUser(order.userId, (user) => {
      getProducts(order.productIds, (products) => {
        callback({ order, user, products });
      });
    });
  });
}
```

**Bài 2:** Xử lý lỗi với async/await

```javascript
async function safeApiCall(apiFunction, ...args) {
  // Your code here
}
```

## 3. Câu hỏi trắc nghiệm

### Phần Destructuring

**Câu 1:** Kết quả của đoạn code sau là gì?

```javascript
const [a, b] = [1, 2, 3];
console.log(a, b);
```

A. 1, 2  
B. 1, 2, 3  
C. undefined, undefined  
D. Lỗi

**Câu 2:** Làm thế nào để lấy giá trị 'email' từ object sau?

```javascript
const user = {
  personalInfo: {
    contact: {
      email: "test@email.com",
    },
  },
};
```

A. `const { email } = user;`  
B. `const { personalInfo: { contact: { email } } } = user;`  
C. `const { contact: { email } } = user;`  
D. `const email = user.personalInfo.contact;`

**Câu 3:** Kết quả của đoạn code sau?

```javascript
const { x = 1, y = 2 } = { x: 10 };
console.log(x, y);
```

A. 10, 2  
B. 1, 2  
C. 10, undefined  
D. undefined, 2

### Phần Lập trình bất đồng bộ

**Câu 4:** Promise nào sau đây sẽ ở trạng thái fulfilled ngay lập tức?
A. `new Promise(() => {})`  
B. `Promise.resolve('success')`  
C. `Promise.reject('error')`  
D. `new Promise(resolve => setTimeout(resolve, 1000))`

**Câu 5:** Đoạn code async/await nào sau đây là đúng?
A.

```javascript
async function getData() {
  const data = await fetch("/api");
  return data.json();
}
```

B.

```javascript
function getData() {
    const data = await fetch('/api');
    return data.json();
}
```

C.

```javascript
async function getData() {
  const data = fetch("/api");
  return await data.json();
}
```

**Câu 6:** Làm thế nào để bắt lỗi trong async/await?
A. Sử dụng .catch()  
B. Sử dụng try/catch  
C. Cả A và B  
D. Không thể bắt lỗi trong async/await

---
