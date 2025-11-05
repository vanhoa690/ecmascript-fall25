# Môn học: Lập trình ECMAScript ( ECMA Script Programming)

#### Link Syllabus: https://flm.poly.edu.vn/gui/role/teacher/SyllabusDetails?sylID=1579

#### Link tài liệu: https://drive.google.com/drive/folders/1UuHWicp9YtJui_tj6SBl0U7jZ8pa74DG

#### Link Ôn tập Javascript: https://github.com/chinhpd5/WEB2064/blob/main/note/lesson01.md

## Giới thiệu môn học

Lập trình ECMAScript là môn học cung cấp các kiến thức về chuẩn ECMAScript 6. Trong khóa học này, bạn sẽ đi sâu vào những thay đổi mới nhất được thực hiện đối với ngôn ngữ lập trình JavaScript với ECMAScript đặc biệt là phiên bản ECMAScript 2015 (ES6).

## Mục tiêu môn học

Sau khi hoàn thành xong khóa học này, sinh viên sẽ có khả năng:

### 📚 Kiến thức

- **Hiểu về khái niệm ECMAScript** và sự phát triển của các phiên bản
- **Nắm bắt được các kĩ thuật mới** để làm việc với bất đồng bộ
- Hiểu rõ sự khác biệt giữa JavaScript và ECMAScript

### 💻 Kỹ năng

- **Tìm hiểu các cách mới để xác định biến** (let, const, var)
- **Áp dụng cú pháp Arrow function** và hiểu được khái niệm con trỏ this
- **Sử dụng destructuring** để làm việc hiệu quả hơn với arrays và object
- **Sử dụng ESLint** để kiểm tra và giúp code sạch sẽ hơn

### 🎯 Năng lực

- Phát triển khả năng viết code JavaScript hiện đại, tối ưu
- Nâng cao kỹ năng debug và kiểm tra code chất lượng
- Ứng dụng các tính năng mới của ES6+ vào dự án thực tế

## Nội dung chính

1. **Giới thiệu về ECMAScript**

   - Lịch sử và các phiên bản
   - Sự khác biệt giữa JavaScript và ECMAScript

2. **Các khái niệm cơ bản ES6+**

   - Biến và scope (let, const)
   - Template literals
   - Enhanced object literals

3. **Functions nâng cao**

   - Arrow functions
   - Default parameters
   - Rest và Spread operators

4. **Destructuring**

   - Array destructuring
   - Object destructuring

5. **Lập trình bất đồng bộ**

   - Promises
   - Async/Await
   - Callbacks

6. **Công cụ hỗ trợ**
   - ESLint configuration
   - Code formatting
   - Best practices

## Kết quả đạt được

Sau khi hoàn thành khóa học, học viên sẽ có đủ kiến thức và kỹ năng để:

- Viết code JavaScript hiện đại theo chuẩn ES6+
- Áp dụng các tính năng mới vào dự án thực tế
- Sử dụng công cụ để đảm bảo chất lượng code
- Làm việc hiệu quả với các tính năng bất đồng bộ

---

_Tài liệu này được tạo ra để phục vụ mục đích học tập và nghiên cứu_

# Hướng Dẫn Sử Dụng Git cơ bản

## 1. Cài đặt Git

### Trên Windows:

Tải Git từ trang chính thức: https://git-scm.com/downloads
Cài đặt theo hướng dẫn mặc định.

## 2. Cấu hình git lần đầu

Tại Command Prompt(cmd)

```bash
  git config --global user.name "Tên của bạn"
  git config --global user.email "email@example.com"
```

Kiểm tra cấu hình:

```bash
  git config --list
```

## 3. Các lệnh git cơ bản

Khởi tạo git:

```bash
  git init
```

Sao chép (clone) một dự án từ GitHub:

```bash
  git clone https://github.com/tai-khoan/ten-repo.git
```

Kiểm tra trạng thái:

```bash
  git status
```

### Làm việc với nhánh

Tạo nhánh mới:

```bash
  git branch ten-nhanh
```

Chuyển sang nhánh khác

```bash
  git checkout ten-nhanh
```

Tạo và chuyển sang nhánh mới

```bash
  git checkout -b ten-nhanh
```

Gộp nhánh

```bash
  git checkout main
  git merge ten-nhanh
```

### Push code (Đẩy code lên github)

```bash
  git add .
  git commit -m "message"
  git push origin ten-nhanh
```

### Pull code (Lấy code từ main)

```bash
  git pull origin main
```

## Demo xử lý merge code và conflict: https://www.loom.com/share/42d709a7b9d4470a89b2b001f90d0fbd
