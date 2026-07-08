# Prompt: Rebuild Corporate Website (Stavian Metal Style)

## Vai trò
Bạn là một Senior Frontend Engineer chuyên về corporate/industrial website. Hãy xây dựng lại một website doanh nghiệp ngành kim loại công nghiệp (nhôm, đồng, thép, kẽm) theo phong cách landing page one-pager hiện đại, sang trọng, tối giản.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (animation scroll-reveal, slider)
- Swiper.js (carousel/slider)
- react-countup (số liệu animate khi scroll vào view)
- next/image (tối ưu ảnh)
- Responsive mobile-first, breakpoint: sm/md/lg/xl

## Design tokens
- Màu chủ đạo: xanh navy đậm (#0A2540 hoặc tương đương corporate blue) + accent xanh lá/gold cho ESG/sustainability
- Font: sans-serif hiện đại (Inter/Montserrat cho heading, Roboto cho body)
- Spacing rộng rãi giữa các section (padding-y 80-120px desktop, 40-60px mobile)
- Bo góc card nhẹ (rounded-lg), shadow mềm
- Layout container max-width ~1280px, căn giữa

## Cấu trúc trang (single-page, scroll dài)

### 1. Header (sticky, transparent → solid khi scroll)
- Logo bên trái
- Menu ngang: Giới thiệu | Sản phẩm | Giải pháp | Phát triển bền vững | Tin tức | Liên hệ
- Dropdown submenu cho "Giới thiệu" và "Sản phẩm"
- Language switcher (VI/EN/CN) góc phải
- Hamburger menu cho mobile (slide-in drawer)

### 2. Hero Section
- Full-width slider (Swiper), 3-4 slide
- Mỗi slide: ảnh nền công nghiệp (nhà máy/kim loại) + overlay gradient tối + heading lớn + subtext + CTA button
- Auto-play, dot navigation, arrow prev/next
- Chiều cao: 80-100vh desktop, 60vh mobile

### 3. About Us
- Layout 2 cột: text bên trái (heading + đoạn giới thiệu + 6 icon-link dạng grid 2x3: Hội đồng quản trị, Tầm nhìn-Sứ mệnh, Triết lý kinh doanh, Lịch sử phát triển, Cơ cấu tổ chức, Văn hóa doanh nghiệp), ảnh bên phải
- Responsive: stack dọc trên mobile

### 4. Outstanding Numbers (Stats counter)
- 4 cột số liệu (VD: số năm hoạt động, tấn sản phẩm/năm, đối tác, nhân sự)
- Icon + number (animate count-up khi scroll vào viewport dùng react-countup + Intersection Observer) + label
- Nền màu tương phản (navy hoặc pattern nhẹ)

### 5. Distribution System
- Section giới thiệu hệ thống phân phối + bản đồ/hình minh họa
- CTA button "Nhận tư vấn ngay" nổi bật

### 6. Products
- 4 category card lớn (Nhôm/Đồng/Thép/Kẽm) dạng grid, mỗi card có ảnh + tên + hover effect
- Bên dưới: carousel sản phẩm con theo từng danh mục (click category → filter carousel)

### 7. Download Documents
- List brochure PDF, mỗi item: icon file + tên tài liệu + nút download
- Layout dạng list hoặc grid card nhỏ

### 8. Comprehensive Business Solutions
- 2 card lớn side-by-side: Giải pháp trong nước / Giải pháp quốc tế
- Mỗi card: ảnh nền + heading + mô tả ngắn + link "Xem thêm"

### 9. Sustainable Development (ESG)
- Logo/badge ESG + 5 link con (Môi trường, Xã hội, Quản trị, Carbon Credit, Báo cáo PTBV)
- Layout icon-grid hoặc timeline

### 10. Library (Ảnh/Video)
- Tab switcher: Hình ảnh | Video
- Carousel card cho từng tab, click mở lightbox/modal

### 11. Certificates and Awards
- Grid logo chứng nhận (ISO, ESG certs...), dạng marquee scroll ngang hoặc static grid, black&white → color on hover

### 12. News & Events
- 5 khối theo category: Tin doanh nghiệp, Tin nội bộ, CSR, Cập nhật thị trường, Sự kiện
- Mỗi khối: heading category + carousel 3-4 card tin tức (ảnh thumbnail + ngày + tiêu đề)
- Tab hoặc accordion để chuyển category trên mobile

### 13. Partners
- 2 nhóm logo đối tác: Ngân hàng | Nguyên vật liệu kim loại công nghiệp
- Grid logo, grayscale → color on hover, marquee auto-scroll tùy chọn

### 14. Contact
- Ảnh nền industrial + overlay tối
- Thông tin liên hệ: hotline, email, social icons
- 3 card chi nhánh: Hà Nội, Hải Phòng, TP.HCM (địa chỉ + bản đồ mini)
- Form liên hệ nhanh (tên, SĐT, nội dung)

### 15. Footer
- Sitemap 2 cột (Về chúng tôi | Sản phẩm-Dịch vụ)
- Logo + copyright + social icons
- Credit thiết kế (optional)

### Floating elements
- Nút chat nổi góc dưới phải: Zalo, Messenger, Hotline, Email (expand khi click)
- Nút "scroll to top" xuất hiện khi scroll qua hero

## Yêu cầu kỹ thuật bổ sung
1. Tất cả section dùng scroll-reveal animation (fade-up khi vào viewport) bằng Framer Motion
2. SEO: metadata đầy đủ (title, description, OG tags) cho từng route
3. Đa ngôn ngữ: dùng next-intl hoặc i18n routing (/vi, /en, /cn)
4. Performance: lazy-load ảnh, code-splitting theo section
5. Accessibility: alt text, aria-label cho nút, contrast đủ chuẩn WCAG AA
6. Component hóa: mỗi section là 1 component riêng trong `components/sections/`
7. Dữ liệu (products, news, certificates, partners) tách ra file JSON/CMS-ready, không hardcode trong component

## Output mong muốn
- Cấu trúc thư mục Next.js đầy đủ
- Từng component section theo thứ tự trên, có comment giải thích
- File data mẫu (products.json, news.json, partners.json)
- Responsive hoàn chỉnh 3 breakpoint: mobile/tablet/desktop
