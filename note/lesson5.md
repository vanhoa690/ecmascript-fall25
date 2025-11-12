# ES6: Công Cụ Hỗ Trợ & Best Practices

## 1. ESLint Configuration

### Cài đặt và Cấu hình Cơ bản

```bash
npm install eslint --save-dev
npx eslint --init
```

### Cấu hình Nâng cao cho ES6+

```json
{
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "impliedStrict": true
    }
  },
  "rules": {
    // Arrow functions
    "prefer-arrow-callback": "error",
    "arrow-spacing": ["error", { "before": true, "after": true }],

    // Template literals
    "prefer-template": "error",
    "template-curly-spacing": ["error", "never"],

    // Destructuring
    "prefer-destructuring": [
      "error",
      {
        "array": true,
        "object": true
      }
    ],

    // Let/Const
    "no-var": "error",
    "prefer-const": "error",

    // Spread operator
    "prefer-spread": "error",

    // Promises
    "prefer-promise-reject-errors": "error"
  }
}
```

### Cập nhật lệnh trong package.json

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

### Ví dụ Code với ESLint Validation

```javascript
// ✅ ES6 code đúng chuẩn
const calculateTotal = (prices, taxRate) => {
  const subtotal = prices.reduce((sum, price) => sum + price, 0);
  return subtotal * (1 + taxRate);
};

// ❌ Code sẽ bị ESLint báo lỗi
var calculateTotal = function (prices, taxRate) {
  var subtotal = 0;
  for (var i = 0; i < prices.length; i++) {
    subtotal += prices[i];
  }
  return subtotal * (1 + taxRate);
};
```

## 2. Code Formatting với Prettier

### Cài đặt Prettier

```bash
npm install prettier --save-dev
```

### File cấu hình Prettier (.prettierrc)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "avoid",
  "bracketSpacing": true
}
```

### Kết hợp ESLint + Prettier

```bash
npm install eslint-config-prettier eslint-plugin-prettier --save-dev
```

```json
{
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### Ví dụ Formatting

```javascript
// ❌ Code chưa format
const user = { name: "John", age: 30, email: "john@example.com" };
const getUserInfo = ({ name, age, email }) =>
  `Tên: ${name}, Tuổi: ${age}, Email: ${email}`;

// ✅ Code sau khi format với Prettier
const user = { name: "John", age: 30, email: "john@example.com" };
const getUserInfo = ({ name, age, email }) =>
  `Tên: ${name}, Tuổi: ${age}, Email: ${email}`;
```

## 3. Best Practices cho ES6+

### 3.1 Sử dụng const và let thay vì var

```javascript
// ✅ Best practice
const MAX_USERS = 100;
let currentUsers = 0;

function addUser() {
  if (currentUsers < MAX_USERS) {
    currentUsers++;
  }
}

// ❌ Tránh sử dụng
var MAX_USERS = 100;
var currentUsers = 0;
```

### 3.2 Arrow Functions

```javascript
// ✅ Sử dụng arrow functions cho callbacks
const numbers = [1, 2, 3, 4, 5];

// Good
const doubled = numbers.map((n) => n * 2);
const even = numbers.filter((n) => n % 2 === 0);

// ❌ Tránh
const doubled = numbers.map(function (n) {
  return n * 2;
});
```

### 3.3 Template Literals

```javascript
// ✅ Sử dụng template literals
const user = {
  name: "Alice",
  age: 25,
  city: "Hanoi",
};

const message = `Xin chào ${user.name}!
Bạn ${user.age} tuổi và sống ở ${user.city}.`;

// ❌ Tránh nối chuỗi thủ công
const message =
  "Xin chào " +
  user.name +
  "!\n" +
  "Bạn " +
  user.age +
  " tuổi và sống ở " +
  user.city +
  ".";
```

### 3.4 Destructuring

```javascript
// ✅ Destructuring objects và arrays
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
};

// Good
const { apiUrl, timeout, retries } = config;

function fetchData({ apiUrl, timeout }) {
  console.log(`Fetching from ${apiUrl} with timeout ${timeout}`);
}

// ✅ Destructuring trong function parameters
const printUserInfo = ({ name, age, email = "No email" }) => {
  console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
};

const user = { name: "Bob", age: 30 };
printUserInfo(user);
```

### 3.5 Spread và Rest Operators

```javascript
// ✅ Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };

// ✅ Rest parameters
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3, 4, 5)); // 15
```

### 3.6 Modules

```javascript
// ✅ Export/Import
// math.js
export const PI = 3.14159;

export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

export default class Calculator {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
    return this;
  }
}

// ✅ Import
import Calculator, { PI, add, multiply } from "./math.js";

const calc = new Calculator();
console.log(add(5, 3)); // 8
```

### 3.7 Promises và Async/Await

```javascript
// ✅ Sử dụng async/await
class ApiService {
  async fetchUser(userId) {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      throw error;
    }
  }

  // ✅ Sử dụng Promise.all cho multiple requests
  async fetchMultipleUsers(userIds) {
    try {
      const promises = userIds.map((id) => this.fetchUser(id));
      const users = await Promise.all(promises);
      return users;
    } catch (error) {
      console.error("Failed to fetch multiple users:", error);
      return [];
    }
  }
}

// ✅ Sử dụng
const api = new ApiService();
const users = await api.fetchMultipleUsers([1, 2, 3]);
```

### 3.8 Classes và Inheritance

```javascript
// ✅ ES6 Classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  // ✅ Getter/Setter
  get description() {
    return `${this.name} is a ${this.breed}`;
  }

  set age(value) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }
}
```

## 4. Scripts trong package.json

```json
{
  "scripts": {
    "lint": "eslint src/**/*.js",
    "lint:fix": "eslint src/**/*.js --fix",
    "format": "prettier --write src/**/*.js",
    "pre-commit": "npm run lint && npm run format"
  }
}
```

## 5. Git Hooks với Husky

```bash
npm install husky --save-dev
npx husky install
```

```json
// package.json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

```bash
# Tạo pre-commit hook
npx husky add .husky/pre-commit "npm run lint && npm run format"
```

## 6. Ví dụ Hoàn Chỉnh

```javascript
// ✅ ES6 code với best practices
import { API_BASE_URL, MAX_RETRIES } from "./config.js";

class UserService {
  constructor() {
    this.retryCount = 0;
  }

  async fetchUsers(filters = {}) {
    const { limit = 10, offset = 0, search = "" } = filters;

    try {
      const response = await fetch(
        `${API_BASE_URL}/users?limit=${limit}&offset=${offset}&search=${encodeURIComponent(
          search
        )}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { data, total } = await response.json();
      return { users: data, total };
    } catch (error) {
      if (this.retryCount < MAX_RETRIES) {
        this.retryCount++;
        console.warn(`Retrying... Attempt ${this.retryCount}`);
        return this.fetchUsers(filters);
      }
      throw new Error(`Failed to fetch users after ${MAX_RETRIES} attempts`);
    }
  }

  // ✅ Sử dụng destructuring và template literals
  displayUserInfo(users) {
    return users
      .map(({ id, name, email, role }) => {
        const userCard = `
        <div class="user-card" data-user-id="${id}">
          <h3>${name}</h3>
          <p>Email: ${email}</p>
          <p>Role: ${role.toUpperCase()}</p>
        </div>
      `;
        return userCard;
      })
      .join("");
  }
}

// ✅ Export default
export default UserService;
```

## Kết luận

Việc sử dụng các công cụ hỗ trợ như ESLint và Prettier kết hợp với ES6 best practices giúp:

- **Code consistency**: Đảm bảo tính nhất quán trong toàn bộ project
- **Error prevention**: Phát hiện lỗi sớm trong quá trình development
- **Better readability**: Code dễ đọc và dễ maintain
- **Team collaboration**: Hỗ trợ làm việc nhóm hiệu quả
- **Modern JavaScript**: Tận dụng tối đa sức mạnh của ES6+

Hãy tích hợp những công cụ và practices này vào workflow development của bạn để nâng cao chất lượng code!
