# Bài 1: Giải thích sâu về spa

## Nội dung
Hiểu tại sao React lại gọi là SPA
Biết cách SPA hoạt động khác với trang web truyền thống (MPA)
Phân biệt được ưu/nhược điểm của SPA
Giải thích vì sao chỉ có một file index.html

## Tài liệu tham khảo
- Link tham khảo: https://reactjs.org/docs/getting-started.html

## Các file Sử Dụng
- src/app.jsx
- src/pages/chapter-01/lectures/lecture01-intro.md

## Note và cài đặt
### Cài đặt lại port để chạy
- Chạy câu lệnh để cài đặt cross-env:
```
npm install cross-env --save-dev
```
- Vào package.json cấu hình lại:
```
"scripts": {
  "start": "cross-env PORT=3003 react-scripts start"
}
```