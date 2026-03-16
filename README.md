# Hồ Sơ Cá Nhân (Personal Profile)

## Giới Thiệu

Trang web này là một trang giới thiệu cá nhân đơn giản, hiển thị thông tin của sinh viên Trần Quốc Huy (MSSV: 23637731).

Trang web được phát triển bằng HTML, CSS, JavaScript và JSON, giúp bạn:
- Hiển thị thông tin cá nhân chuyên nghiệp
- Thay đổi ảnh avatar dễ dàng
- Lưu dữ liệu tự động trên máy tính
- Responsive - hoạt động tốt trên mọi thiết bị
- Không cần server - chạy hoàn toàn trên trình duyệt

---

## Cơ Cấu File

### 1. index.html
**File HTML chính của trang web**

Chứa cấu trúc HTML của trang gồm:
- **Header**: Tiêu đề "Hồ Sơ Cá Nhân"
- **Avatar**: Ảnh đại diện với nút thay ảnh
- **Thông tin cơ bản**: MSSV, Họ tên, Lớp, Email
- **Liên kết xã hội**: Facebook, GitHub, Email
- **Kỹ năng**: Hiển thị các kỹ năng
- **Giới thiệu**: Đoạn mô tả ngắn
- **Footer**: Thông tin bản quyền

### 2. styles.css
**File CSS định dạng giao diện**

Các tính năng:
- Thiết kế responsive (phù hợp với mobile)
- Màu sắc gradient đẹp mắt
- Hiệu ứng hover mượt mà trên các phần tử
- Animation khi load trang
- Bố cục flexbox hiện đại

### 3. script.js
**File JavaScript xử lý tương tác**

Các tính năng:
- **Thay ảnh Avatar**: Nhấn nút "Thay Avatar" để chọn ảnh từ máy tính
- **Lưu ảnh**: Avatar được lưu vào localStorage (bảo tồn khi reload trang)
- **Smooth scroll**: Cuộn mượt khi nhấn liên kết
- **Tải dữ liệu**: Tự động tải dữ liệu từ data.json

### 4. data.json
**File dữ liệu JSON chứa thông tin cá nhân**

Bao gồm:
- Thông tin profile (tên, chức danh, avatar)
- Thông tin cơ bản (MSSV, lớp, email)
- Giới thiệu cá nhân
- Danh sách kỹ năng
- Liên kết xã hội
- Footer & bản quyền

---

## Cách Sử Dụng

### 1. Mở Trang Web
```
Mở file index.html bằng trình duyệt web (Chrome, Firefox, Edge, Safari...)
```

### 2. Thay Ảnh Avatar
```
- Nhấn vào nút "📷" ở góc dưới bên phải của ảnh avatar
- Chọn một tệp ảnh từ máy tính
- Ảnh sẽ được cập nhật ngay lập tức
- Ảnh sẽ được lưu và hiển thị lại khi reload trang
```

### 3. Truy Cập Liên Kết
```
- Nhấn vào biểu tượng GitHub hoặc LinkedIn để truy cập các trang xã hội
- (Lưu ý: Cần cập nhật URL thực tế trong file data.json)
```

### 4. Truy Cập Email
```
- Nhấn vào biểu tượng email để gửi email
```

---

## Tùy Chỉnh Thêm

### 1. Sửa Đổi Thông Tin Cá Nhân
Mở file `data.json` và chỉnh sửa:

```json
{
  "profile": {
    "fullName": "Trần Quốc Huy",
    "title": "Sinh viên - Công Nghệ Thông Tin",
    "avatar": "👤"
  },
  "basicInfo": {
    "hoVaTen": "Trần Quốc Huy",
    "maSoSinhVien": "23637731",
    "lop": "DHKHDL19A",
    "email": "23637731.huy@student.iuh.edu.vn"
  }
}
```

**Để sửa đổi:**
- **MSSV**: Tìm "23637731" và thay bằng mã số của bạn
- **Họ tên**: Tìm "Trần Quốc Huy" và thay bằng tên của bạn
- **Lớp**: Tìm "DHKHDL19A" và thay bằng lớp của bạn
- **Email**: Tìm "23637731.huy@student.iuh.edu.vn" và thay bằng email của bạn

### 2. Thêm Kỹ Năng Mới
Mở file `data.json`, tìm phần `skills` và thêm:

```json
"skills": [
  "HTML/CSS",
  "JavaScript",
  "Python",
  "SQL",
  "Kỹ năng mới"    // Thêm kỹ năng ở đây
]
```

### 3. Thêm Liên Kết Xã Hội Khác
Mở file `data.json`, tìm phần `socialLinks` và thêm:

```json
"socialLinks": [
  {
    "name": "Tên mạng xã hội",
    "icon": "icon",
    "url": "https://example.com"
  }
]
```

### 4. Thay Đổi Màu Sắc
Mở file `styles.css` và tìm gradient colors:

```css
/* Màu chính - thay #667eea và #764ba2 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Ví dụ màu khác: */
/* Cam-Đỏ: #FF6B6B, #FF8E53 */
/* Xanh lá: #11998e, #38ef7d */
/* Hồng-Xanh: #FA8BFF, #2BD2FF */
```

### 5. Sửa Giới Thiệu
Mở file `data.json` và sửa trường `introduction`:

```json
"introduction": "Viết giới thiệu của bạn tại đây..."
```

---

## Tính Năng Chính

 **Responsive Design** - Hoạt động tốt trên desktop, tablet, mobile  
 **Đơn Giản & Sạch Sẽ** - Dễ hiểu, dễ sửa đổi  
 **Hiệu Ứng Động** - Animation mượt mà, chuyên nghiệp  
 **Lưu Dữ Liệu** - Avatar được lưu giữ (localStorage)  
 **Không Cần Server** - Chạy hoàn toàn trên trình duyệt  

---

##  Yêu Cầu

 Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)  
 Không cần Internet (trừ khi truy cập liên kết xã hội)  
 Không cần cài đặt thêm công cụ nào  

---

## Lưu Ý quan trọng

- **Cập nhật GitHub/LinkedIn**: Hãy thay đổi URL trong `data.json` để link đến trang của bạn
- **Avatar được lưu cục bộ**: Avatar được lưu tại máy tính cục bộ (localStorage), không được đồng bộ trên thiết bị khác
- **Dễ mở rộng**: Nội dung có thể dễ dàng mở rộng thêm nhiều tính năng khác
- **Kiểm tra JSON**: Đảm bảo file `data.json` không có lỗi syntax

---

## Xử Lý Sự Cố

### Trang không hiển thị dữ liệu
- Kiểm tra file `data.json` có lỗi syntax không
- Dùng [JSONLint](https://jsonlint.com/) để validate JSON

### Avatar không được lưu
- Xóa cache trình duyệt (Ctrl+Shift+Delete)
- Dùng Incognito/Private mode để test

### Ảnh không hiển thị
- Kiểm tra định dạng: JPG, PNG, GIF, WebP
- Đảm bảo kích thước file < 10MB

---

## Ví Dụ Sửa Đổi Hoàn Chỉnh

**Thêm LinkedIn và sửa GitHub:**
```json
"socialLinks": [
  {
    "name": "Facebook",
    "icon": "f",
    "url": "https://facebook.com/yourprofile"
  },
  {
    "name": "GitHub",
    "icon": "⚙",
    "url": "https://github.com/yourname"
  },
  {
    "name": "LinkedIn",
    "icon": "in",
    "url": "https://linkedin.com/in/yourprofile"
  },
  {
    "name": "Email",
    "icon": "✉",
    "url": "your.email@student.iuh.edu.vn"
  }
]
```

---

## Thông Tin

**Tác giả**: Trần Quốc Huy  
**MSSV**: 23637731  
**Lớp**: DHKHDL19A  
**Ngày tạo**: 2026  

---

**Chúc bạn có một hồ sơ cá nhân chuyên nghiệp!**
