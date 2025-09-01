# Bài 2: useCallback

## Nội dung
- useCallback là hook giúp ghi nhớ (memoize) một function.
- Nó chỉ tạo lại function khi dependencies thay đổi.
- Nếu dependencies không đổi → React dùng lại function cũ → tránh việc truyền hàm mới xuống component con làm nó render lại không cần thiết.

## Khi nào sử dụng useCallback?
- Khi bạn truyền function làm props xuống component con (đặc biệt là component được React.memo).
- Khi function tạo mới mỗi lần render có thể làm re-render thừa ở component con.
- Khi bạn cần giữ function ổn định để dùng trong useEffect hoặc các hook khác.