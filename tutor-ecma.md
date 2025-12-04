# Bộ câu hỏi ES6+ JavaScript

## Phần 1: 5 Câu hỏi trắc nghiệm

1.  **Kết quả của đoạn code sau là gì?**

``` javascript
console.log(x);
let x = 5;
```

A. 5\
B. undefined\
C. Lỗi ReferenceError\
D. null

------------------------------------------------------------------------

2.  **Phương thức nào sau đây KHÔNG phải là một tính năng của Enhanced
    Object Literals?**\
    A. Định nghĩa method mà không cần từ khóa function\
    B. Tính toán tên thuộc tính động (computed property names)\
    C. Sử dụng **proto** để kế thừa\
    D. Tự động tạo getter/setter cho tất cả thuộc tính


------------------------------------------------------------------------

3.  **Kết quả của đoạn code sau là gì?**

``` javascript
const arr = [1, 2, 3];
const [a, , b] = arr;
console.log(a, b);
```

A. 1 3\
B. 1 2\
C. 2 3\
D. Lỗi

------------------------------------------------------------------------

4.  **Câu nào sau đây đúng về Arrow Function?**\
    A. Có this trỏ đến đối tượng gọi hàm\
    B. Có arguments object riêng\
    C. Không thể dùng làm constructor\
    D. Có thể đặt tên (named arrow function) trong khai báo


------------------------------------------------------------------------

5.  **Đoạn code sau sẽ in ra gì?**

``` javascript
async function getData() {
    return await Promise.resolve('Hello');
}
getData().then(console.log);
```

A. undefined\
B. Promise {`<pending>`{=html}}\
C. Hello\
D. Lỗi cú pháp

------------------------------------------------------------------------

## Phần 2: 5 Câu hỏi vấn đáp (Tự luận)

1.  **Phân biệt var, let, const về scope, hoisting và khả năng reassign.
    Cho ví dụ minh họa.**

------------------------------------------------------------------------

2.  **Giải thích sự khác biệt giữa Rest và Spread operators. Cho ví
    dụ.**

------------------------------------------------------------------------

3.  **Xuất object bằng shorthand, shorthand method và computed property
    name**


------------------------------------------------------------------------

4.  **So sánh Promise và Async/Await. Khi nào nên dùng Async/Await?**

------------------------------------------------------------------------

5.  **Viết hàm sử dụng default parameters, destructuring, arrow
    function, template literals**
