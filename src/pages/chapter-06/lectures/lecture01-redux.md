# Bài 1: Giới thiệu Redux và tại sao nên dùng

## Nội dung
- Redux là một thư viện quản lý state (trạng thái) cho các ứng dụng JavaScript, đặc biệt là React.
- Nó giúp bạn lưu trữ, quản lý, và chia sẻ dữ liệu giữa các component một cách có tổ chức, tránh tình trạng "truyền props lòng vòng".
- Có thể hình dung Redux như một kho dữ liệu tập trung (store), nơi tất cả component trong ứng dụng đều có thể lấy dữ liệu hoặc cập nhật dữ liệu theo quy tắc chung.
### Vì sao cần Redux?
- Mỗi component có state riêng.
- Muốn truyền state từ component cha xuống con → phải dùng props.
- Khi app nhỏ thì ổn, nhưng khi app lớn (nhiều component lồng nhau) thì sẽ:
    - Props phải truyền qua nhiều tầng (props drilling).
    - Dữ liệu dễ bị rối, khó quản lý.
    - Component con ở xa nhau không dễ chia sẻ dữ liệu.
- Redux giải quyết các vấn đề này bằng cách:
    - Tạo một Store toàn cục.
    - Tất cả component có thể truy cập state trực tiếp từ store (không cần props drilling).
    - Quản lý dữ liệu theo mô hình dự đoán được (predictable state).

## Cấu trúc cơ bản cuar Redux
```
src/
├── components/                 // Các component UI
├── redux/
│   ├── actions/                // Chứa các action creators
│   │   └── counterActions.js
│   ├── reducers/               // Chứa reducers
│   │   └── counterReducer.js
│   ├── store.js                // Tạo store
│   └── types.js                // (tùy chọn) lưu các action type như "INCREMENT", "DECREMENT"
├── App.js
└── index.js
```

## Các file Sử Dụng
- src/App.js
- src/pages/chapter-06/examples/lecture01-redux.jsx
- src/pages/chapter-06/redux/actions/lecture01-reduxintro.jsx
- src/pages/chapter-06/redux/reducers/lecture01-reduxintro.jsx
- src/pages/chapter-06/redux/store/lecture01-reduxintro.jsx