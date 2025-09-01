# Bài 1: useMemo

## Nội dung
- useMemo là một hook của React dùng để ghi nhớ (memoize) giá trị đã tính toán.
- Nó chỉ tính toán lại khi dependencies (các biến phụ thuộc) thay đổi.
- Nếu dependencies không thay đổi, nó sẽ trả về kết quả cũ → giúp tối ưu hiệu năng, tránh tính toán lại những tác vụ nặng.
## Khi nào dùng useMemo?
- Khi bạn có tính toán nặng (ví dụ: lọc, sort, xử lý dữ liệu lớn).
- Khi bạn muốn tránh render lại không cần thiết ở component con.
- Không nên lạm dụng! Nếu phép tính nhẹ thì không cần useMemo.
## Cú pháp
```
const memoizedValue = useMemo(() => {
    return tính_toán_gì_đó();
}, [a, b]); // Chỉ tính toán lại khi a hoặc b thay đổi
```
