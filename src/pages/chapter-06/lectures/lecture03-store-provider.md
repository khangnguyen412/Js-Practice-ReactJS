# Bài 3: Store và Provider

## Nội dung
- Store là gì?
    - Store = nơi lưu trữ toàn bộ state toàn cục của ứng dụng.
    - Nó được tạo ra từ reducer hoặc slice.
    - Trong Redux Toolkit, ta thường dùng configureStore.
- Provider là gì?
    - Provider là một component đặc biệt đến từ thư viện react-redux.
    - Nó truyền store xuống toàn bộ cây React thông qua React Context.
    - Nhờ vậy, bất kỳ component nào bên trong <Provider> đều có thể gọi useSelector hoặc useDispatch để làm việc với store.
* <b>Không có Provider → useSelector và useDispatch sẽ báo lỗi “could not find react-redux context value”