import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetUser = createAsyncThunk(
    "user/get-user", // tên action
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    }
)

/**
 * - reducers dùng cho action đồng bộ
 * - extraReducers dùng cho action bất đồng bộ
 * - Các method trong builder
 *      - addCase: Dùng để xử lý action của createAsyncThunk hoặc bất kỳ action nào bạn cần thêm vào reducer.
 *      - addMatcher: Dùng để thêm các rule chung cho các action có kiểu giống nhau, không phải mỗi action đều khai báo một addCase.
 *      - addDefaultCase: Dùng để thêm một default case (tức là xử lý action không xác định), điều này thường ít khi dùng.
 * - Tham số của các action như .pending, .fulfilled, .rejected
 *      - pending: Không có payload, chỉ báo hiệu rằng một hành động bất đồng bộ đã bắt đầu.
 *      - fulfilled: payload chứa kết quả trả về từ API hoặc bất kỳ dữ liệu nào bạn trả về từ async function.
 *      - rejected: payload chứa lỗi hoặc thông tin khi có sự cố xảy ra.
 */
const UserSlide = createSlice({
    name: "users",
    initialState: {
        list_user: [],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(GetUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(GetUser.fulfilled, (state, action) => {
                state.loading = false;
                state.list_user = action.payload;
            })
            .addCase(GetUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})
export default UserSlide.reducer;
