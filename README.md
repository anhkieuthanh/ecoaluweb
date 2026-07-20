# 🌿 EcoAlu Web - Website Nhà Máy Nhôm Công Nghệ Cao EcoAlu

Website giới thiệu doanh nghiệp và nhà máy nhôm công nghệ cao **EcoAlu** tại Thanh Hóa. Dự án được xây dựng theo kiến trúc **Jamstack (Next.js 16 + Tailwind CSS + Decap CMS)** hỗ trợ đa ngôn ngữ (Tiếng Việt, Tiếng Anh, Tiếng Trung) và sẵn sàng xuất bản tĩnh lên hosting cPanel.

---

## 🛠️ Công nghệ sử dụng

*   **Core**: Next.js 16 (React 19, TypeScript)
*   **Styling**: Tailwind CSS, CSS Custom Variables
*   **Animation**: Framer Motion
*   **CMS**: Decap CMS (Git-based CMS) + PHP OAuth Gateway
*   **Icons**: Lucide React
*   **Slider**: Swiper.js

---

## 🚀 Hướng Dẫn Chạy Trên Môi Trường Local (Development)

### 1. Cài đặt các thư viện phụ thuộc
```bash
# Cài đặt node_modules
npm install
```

### 2. Khởi chạy giao diện chính của Website
```bash
# Khởi chạy server phát triển
npm run dev
```
Mở trình duyệt tại đường dẫn: `http://localhost:3000`

---

## 📝 Quản Trị Nội Dung CMS Ở Local (Decap CMS)

Dự án tích hợp trang Admin trực quan giúp chỉnh sửa bài viết và tiêu đề đa ngôn ngữ ngay trên máy tính mà không cần đụng vào code.

### 1. Bật chế độ Local trong file `public/admin/config.yml`
Đảm bảo dòng `local_backend: true` được bật:
```yaml
local_backend: true
backend:
  name: github
  repo: anhkieuthanh/ecoaluweb
  branch: main
```

### 2. Khởi chạy Server Proxy quản trị cục bộ
Mở một cửa sổ Terminal mới và chạy lệnh:
```bash
npx decap-server
```
*(Server proxy sẽ khởi chạy và lắng nghe tại cổng `8081`)*

### 3. Truy cập trang Quản trị Admin
Mở trình duyệt truy cập đường dẫn đầy đủ:
👉 **`http://localhost:3000/admin/index.html`**

Tại đây bạn có thể:
*   Thêm / Sửa / Xóa bài viết tin tức tại danh mục **Danh sách bài viết**.
*   Chỉnh sửa tiêu đề các trang, nội dung giới thiệu, ESG, địa chỉ nhà máy ở cả 3 ngôn ngữ (VI/EN/CN) tại mục **Quản lý Tiêu đề & Nội dung chữ**.

Khi bấm **Publish**, dữ liệu sẽ tự động lưu thẳng vào file [src/data/news.json](file:///Users/atif/Public/Ecoalu_web/src/data/news.json) và [src/data/translations.json](file:///Users/atif/Public/Ecoalu_web/src/data/translations.json).

---

## 📦 Biên Dịch & Upload Lên Hosting cPanel (Production)

Website sử dụng cơ chế **Static HTML Export** (`output: "export"`) giúp tải trang siêu tốc và tương thích 100% với hosting shared cPanel.

### Bước 1: Cấu hình `config.yml` cho Production
Trong file [public/admin/config.yml](file:///Users/atif/Public/Ecoalu_web/public/admin/config.yml):
```yaml
local_backend: false
backend:
  name: github
  repo: anhkieuthanh/ecoaluweb
  branch: main
  base_url: https://ecoalu.net
  auth_endpoint: admin/auth.php
```

### Bước 2: Điền Client ID & Secret vào `auth.php`
Mở file [public/admin/auth.php](file:///Users/atif/Public/Ecoalu_web/public/admin/auth.php) và điền Client ID, Client Secret tạo từ GitHub OAuth App:
```php
define('CLIENT_ID', 'CỦA_BẠN_Ở_ĐÂY');
define('CLIENT_SECRET', 'CỦA_BẠN_Ở_ĐÂY');
```

### Bước 3: Biên dịch Web tĩnh
```bash
npm run build
```
Sau khi lệnh chạy xong, thư mục **`out`** sẽ xuất hiện tại thư mục gốc.

### Bước 4: Upload lên cPanel
1. Vào thư mục **`out`**, chọn toàn bộ các file/thư mục bên trong nén thành file `archive.zip`.
2. Đăng nhập cPanel &rarr; **Bộ Quản Lý Tệp (File Manager)** &rarr; thư mục **`public_html`**.
3. Upload `archive.zip` lên và chọn **Giải nén (Extract)**.

*   Trang chủ: `https://ecoalu.net`
*   Trang quản trị Admin: `https://ecoalu.net/admin/index.html`

---

## 🔑 Hướng Dẫn Tạo GitHub OAuth App Cho cPanel

Để tính năng đăng nhập trên trang Admin hoạt động được trên tên miền thật:
1. Đăng nhập GitHub &rarr; **Settings** &rarr; **Developer Settings** &rarr; **OAuth Apps** &rarr; **New OAuth App**.
2. Điền thông tin:
   * **Homepage URL**: `https://ecoalu.net`
   * **Authorization callback URL**: `https://ecoalu.net/admin/auth.php`
3. Copy **Client ID** và **Client Secret** vừa sinh ra dán vào file `public/admin/auth.php`.

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
Ecoalu_web/
├── public/
│   ├── admin/
│   │   ├── config.yml     # File cấu hình danh mục & trường nhập liệu CMS
│   │   ├── index.html     # Cổng giao diện ứng dụng Decap CMS
│   │   └── auth.php       # PHP OAuth gateway phục vụ đăng nhập cPanel
│   └── logo.png           # Logo công ty & Favicon
├── src/
│   ├── app/               # Next.js App Router (Layout & Metadata)
│   ├── components/
│   │   └── sections/      # Các khối giao diện (Hero, About, Stats, Products, ESG, News, Contact, v.v.)
│   ├── context/           # Context xử lý chuyển đổi Đa ngôn ngữ (VI/EN/CN)
│   └── data/
│       ├── news.json      # Dữ liệu bài viết tin tức
│       ├── partners.json  # Danh sách logo đối tác & ngân hàng
│       └── translations.json # Từ điển tiêu đề & văn bản đa ngôn ngữ
├── design-demos/
│   └── index.html         # Bản nguyên mẫu HTML tĩnh độc lập
├── next.config.ts         # Cấu hình xuất bản tĩnh output: export
└── README.md              # File hướng dẫn chạy dự án
```
