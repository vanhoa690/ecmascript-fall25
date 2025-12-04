# Đề Bài CRUD ReactJS -- Quản Lý Khoa Học

## 🎯 Mục tiêu

Xây dựng ứng dụng ReactJS cho phép quản lý danh sách **khoa học** với
đầy đủ chức năng CRUD: - Thêm (Create) - Hiển thị (Read) - Chỉnh sửa
(Update) - Xóa (Delete)

---

## 📘 1. Cấu trúc dữ liệu Khoa Học

---

Thuộc tính Kiểu dữ liệu Mô tả

---

id number/string mã định danh
duy nhất

name string tên khoa học

studyTime string thời gian học (số giờ học)

description string mô tả ngắn

level string cấp độ (cơ bản
/ nâng cao /
chuyên sâu)

---

## ✔ 2. Chức năng bắt buộc

### 2.1. Hiển thị danh sách khoa học

- Hiển thị dưới dạng bảng
- Cho phép tìm kiếm theo tên

### 2.2. Thêm khoa học mới

- Form gồm: name, studyTime, description, level
- Validate:
  - name, studyTime, level không được để trống
  - studyTime > 0
  - level: 1 trong 3 option cơ bản/ nâng cao /chuyên sâu

### 2.3. Chỉnh sửa thông tin khoa học

- Nhấn nút "Sửa"
- Hiển thị form cập nhật
- Validate: giống thêm mới

### 2.4. Xóa khoa học

- Hiển thị confirm trước khi xóa

---

## 📄 6. JSON mẫu

```json
[
  {
    "id": 1,
    "name": "Vật lý lượng tử",
    "studyTime": 40,
    "description": "Nghiên cứu hành vi của vật chất ở cấp độ vi mô",
    "level": "Chuyên sâu"
  },
  {
    "id": 2,
    "name": "Hóa học hữu cơ",
    "studyTime": 60,
    "description": "Nghiên cứu hợp chất của carbon",
    "level": "Nâng cao"
  }
]
```
