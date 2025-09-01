# Bài 3: useForm()

## Nội dung
- useForm là hook chính trong thư viện react-hook-form.
- Nó cung cấp cho bạn công cụ quản lý form: lấy giá trị, validate dữ liệu, xử lý submit…
- Giúp bạn không cần viết quá nhiều state và onChange cho từng input như trước.

## Cú pháp
```
const { register, handleSubmit, watch, formState: { errors } } = useForm();
```
- register: kết nối input với hệ thống của react-hook-form.
- handleSubmit: xử lý khi form submit.
- watch: theo dõi giá trị của input (giống như “listen”).
- errors: chứa thông tin validate bị lỗi.