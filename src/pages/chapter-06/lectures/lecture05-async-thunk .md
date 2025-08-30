# Bài 5: Async thunk

## Nội dung
- Trong Redux, action thường là đồng bộ. Điều này có nghĩa là khi bạn gửi một action, state sẽ thay đổi ngay lập tức. Tuy nhiên, trong trường hợp gọi API, bạn không thể đợi API trả kết quả xong rồi mới tiếp tục, vì vậy cần có cách để xử lý action bất đồng bộ.
- Thunk là gì?
    - Thunk là một middleware cho phép trì hoãn việc dispatch action cho đến khi ta hoàn thành một công việc bất đồng bộ.
    - Khi bạn sử dụng createAsyncThunk (trong Redux Toolkit), nó sẽ tự động dispatch pending, fulfilled, rejected actions cho bạn.

## Các file Sử Dụng