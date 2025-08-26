# Bài 4: Protected Routes (Route có điều kiện)

## Nội dung
- Protected Routes (Route có điều kiện)
- Ví dụ Protected Route
- Sử dụng trong App.js
- Bổ sung

## Các file Sử Dụng
- src/pages/chapter-05/components/navbar-3.jsx
- src/pages/chapter-05/examples/lecture04-prodtectedroute.jsx
- src/routes/ProtectedRoute.jsx


## Định nghĩa
- Protected route nghĩa là chỉ cho phép truy cập khi người dùng thỏa điều kiện (ví dụ: đã đăng nhập). Nếu không, sẽ redirect về trang login.

## Ý Nghĩa 
- Có một state lưu user login hay chưa.
- Nếu chưa login → chặn và chuyển hướng (navigate("/login")).
- Nếu login rồi → cho vào trang protected.