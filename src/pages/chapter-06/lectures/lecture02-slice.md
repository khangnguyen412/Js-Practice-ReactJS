# Bài 2: Redux Toolkit – Slice

## Nội dung
- Khi không có Redux Toolkit, ta phải viết nhiều file gồm:
    - actions
    - reducers
    - store
- Redux Toolkit (RTK) gom Action + Reducer vào chung 1 khái niệm gọi là Slice.
- Một slice đại diện cho 1 phần (feature) của state.

## Cấu trúc Slice
```
src/
├── app/                        // Cấu hình toàn cục của ứng dụng
│   └── store.js                // Tạo Redux store
├── features/                   // Chứa các feature/module riêng biệt
│   └── counter/                // Feature "counter"
│       ├── counterSlice.js     // Slice: định nghĩa state, reducer, action
│       └── Counter.js          // Component UI cho counter
├── App.js                      // Component gốc của ứng dụng
└── index.js                    // Entry point: render App vào DOM
```

## Các file Sử Dụng
- src/pages/chapter-06/examples/lecture02-slice.jsx
- src/pages/chapter-06/redux/store-slice.jsx
- src/pages/chapter-06/redux/slice/lecture02-slice.jsx