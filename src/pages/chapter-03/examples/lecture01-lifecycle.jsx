/* Import thư viện */
import React, { useEffect, useState } from "react";

/**
 *  UseEffect là gì?
 *  - useEffect là một React Hook giúp bạn kết nối React với hệ thống bên ngoài
 *  - Gọi API 
 *  - Theo dõi sự kiện (addEventListener)
 *  - Tự động focus input 
 *  - Cập nhật tiêu đề trang
 *  
 *  useEffect trong funtions thay thế Lifecycle trong class component
 *  Trong Class Component, bạn có các phương thức như:
 *  - componentDidMount() – chạy lần đầu
 *  - componentDidUpdate() – chạy khi props/state thay đổi
 *  - componentWillUnmount() – chạy trước khi component bị gỡ
 */
function LifeCycle() {
    /**
     *  Gọi Api trong UseEffect()
     */
    const [UserList, SetUserList] = useState([]);
    useEffect(() => {
        const GetApi = async () => {
            try {
                const UserData = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!UserData.ok) {
                    throw new Error('Không thể tải dữ liệu');
                }
                const data = await UserData.json();
                SetUserList(data || [])
            } catch (e) {
                console.log(e)
            }
        }
        GetApi()
    }, [])

    /**
     *  Cleanup function trong useEffect
     */
    const [Time, Updatetime] = useState(new Date());
    useEffect(() => {
        const ResetTime = setInterval(() => {
            Updatetime(new Date())
        }, 1000)

        return () => {
            clearInterval(ResetTime)
        }
    })
    return (
        <React.Fragment>
            <h2><b>Danh sách người dùng</b></h2>
            <ul>
                {UserList.map((item) => (
                    <li key={item.id}>{item.name} - {item.email} - {item.address.street} street, {item.address.city} city</li>
                ))}
            </ul>

            <h2><b> Thời gian hiện tại: {Time.toLocaleTimeString()}</b></h2>
        </React.Fragment>
    )
}

export default LifeCycle