# Tài liệu Dự án: Portfolio V4 (Next.js)

Tài liệu này tổng hợp các công nghệ sử dụng và cấu trúc thư mục của dự án để tiện tra cứu và "Reverse Engineering".

---

## 1. Technology Stack (Công nghệ sử dụng)

Đây là các công nghệ cốt lõi cấu thành nên dự án này (tương đương với một "Server Stack" hiện đại).

### A. Core Framework (Khung xương)
*   **Next.js 16 (App Router):** Framework React mạnh mẽ nhất hiện nay.
    *   *Tác dụng:* Hỗ trợ Server Components (SSR) giúp tải trang nhanh và chuẩn SEO.
    *   *Đặc trưng:* Sử dụng cấu trúc thư mục `src/app`.
*   **React 19:** Thư viện UI nền tảng (phiên bản mới nhất).
*   **TypeScript 5:** Ngôn ngữ lập trình chính (JavaScript + Type Safety). Giúp code chặt chẽ, ít lỗi.

### B. Styling & UI (Giao diện)
*   **Tailwind CSS 4:** Công cụ viết style trực tiếp (Utility-first CSS). Nhanh gọn, không cần file CSS riêng.
*   **Shadcn UI (@radix-ui):** Bộ khung Component mẫu (Button, Card, Dialog...).
    *   *Đặc điểm:* Code nằm trong `src/components/ui`, dễ dàng tùy biến toàn bộ code.
*   **Lucide React:** Bộ Icon nhẹ, hiện đại (Terminal, Youtube, Github...).

### C. Animation (Hiệu ứng)
*   **Framer Motion:** Thư viện xử lý chuyển động số 1 cho React.
    *   *Tác dụng:* Tạo các hiệu ứng Fade-in, Slide, Hover mượt mà.

### D. Data & API (Dữ liệu)
*   **Fetch API (Native):** Gọi dữ liệu từ bên ngoài (ví dụ: Github API).
*   **Zod:** Kiểm tra tính hợp lệ của dữ liệu (Validation schema).

### E. DevOps Tooling
*   **Turbopack:** Công cụ đóng gói (Bundler) siêu tốc, thay thế Webpack.
*   **ESLint:** Công cụ kiểm tra lỗi cú pháp và quy chuẩn code tự động.

---

## 2. Project Structure Map (Bản đồ tập tin)

Phân loại các thư mục theo chức năng hệ thống.

### Khu vực 1: Cấu hình Hệ thống (Root Config)
*   📄 **`.env`**: "Két sắt" chứa biến môi trường (Token Github, Key bí mật).
*   📄 **`package.json`**: Danh sách các gói phần mềm (dependencies) cần cài đặt.
*   📄 **`next.config.ts`**: Cấu hình Server Next.js.
*   📄 **`tsconfig.json`**: Cấu hình trình biên dịch TypeScript.
*   📂 **`public/`**: Thư mục chứa tài nguyên tĩnh (Ảnh, Font, Icon, file robots.txt) - truy cập công khai.

### Khu vực 2: Mã nguồn Ứng dụng (`src/`)

#### 📂 `src/app/` (Router & Controller)
Quy định đường dẫn URL của website.
*   📄 **`layout.tsx`**: Layout tổng (Navbar, Footer, Font) áp dụng cho toàn bộ web.
*   📄 **`page.tsx`**: Trang chủ (`/`).
*   📂 **`about/`**: Trang giới thiệu (`/about`).
*   📂 **`projects/`**: Trang dự án (`/projects`).
*   📂 **`api/`**: Backend API (Serverless Functions).
    *   Ví dụ: `api/projects/route.ts` xử lý logic gọi Github.

#### 📂 `src/components/` (Frontend UI)
Các thành phần giao diện.
*   📂 **`ui/`**: Các thành phần cơ bản (Atomic) từ Shadcn UI.
    *   *Ví dụ:* `button.tsx`, `card.tsx`, `badge.tsx`.
*   📂 **`sections/`**: Các khối giao diện lớn (Modules).
    *   *Ví dụ:* `hero.tsx` (Banner), `navbar.tsx`, `my-skills.tsx` (Phần Skill tùy chỉnh).

#### 📂 `src/config/` (Settings)
Trung tâm điều khiển nội dung.
*   📄 **`site.config.ts`**: **QUAN TRỌNG NHẤT**. Chứa mọi thông tin text, link MXH, menu navigation. Sửa ở đây sẽ cập nhật toàn trang.

#### 📂 `src/lib/` (Utilities)
*   Chứa các hàm tiện ích dùng chung (Helper functions), ví dụ hàm nối chuỗi class CSS.
