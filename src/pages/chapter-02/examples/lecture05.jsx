import React, { useEffect, useState, useRef } from "react";

function UseStateFunc() {
    /**
     *  Cú pháp useState:
     *      $ const [state, setState] = useState('giá_trị_ban_đầu');
     *  state: biến chứa giá trị hiện tại
     *  setState: hàm dùng để cập nhật giá trị mới cho state
     *  [giá_trị_ban_đầu]: có thể là số, chuỗi, mảng, object,...
     */
    /**
     *  Trạng thái boolean – bật/tắt
     */
    const [IsOn, SetOnStatus] = useState('false');

    /**
     *  Trạng thái số – đếm số lần nhấn
     */
    const [Count, SetCount] = useState(0);
    const HandleCount = () => {
        SetCount(Count + 1);
    }

    /**
     *  Trạng thái đối tượng – thông tin người dùng
     */
    const [User, UpdateUser] = useState({
        name: 'khang',
        age: 25,
        role: 'User',
    })
    const HandleUpdate = () => {
        UpdateUser({ ...User, role: 'Admin' });
    }

    /**
     *  Cú pháp useEffect:
     *      useEffect(() => { [Code bạn muốn chạy] return () => { [Code dọn dẹp (nếu cần)] }; }, [deps]);
     *  Chạy khi nào?
     *  - Khi component mount
     *  - Khi state hoặc props thay đổi (nếu bạn chỉ định trong [deps])
     *  - Có thể dùng để gọi API, subscribe sự kiện, tạo timer,...
     * 
     *  Giải thích rõ hơn về useEffect:
     *  - Được gọi sau mỗi lần render (nếu không có mảng dependency)
     *  - return () => {...}: hàm dọn dẹp, được gọi trước khi hàm callback chạy lại hoặc component bị hủy
     *  - [deps]  chỉ định khi nào useEffect được chạy lại
     * 
     *  Trường hợp 1:
     *      const [item, updateItem] = useState(0);
     *      useEffect(() => {
     *          console.log('Chạy 1 lần duy nhất khi component mount');
     *          return () => {
     *              console.log('Dọn dẹp khi component unmount');
     *          };
     *      }, []);
     *  Giải thích:
     *  - Chỉ chạy duy nhất 1 lần khi component mount
     *  - Không bao giờ chạy lại dù biến item có thay đổi hay không
     *  - Phù hợp để khởi tạo dữ liệu ban đầu, đăng ký sự kiện toàn cục,...
     * 
     *  Trường hợp 2:
     *      const [item, updateItem] = useState(0);
     *      useEffect(() => {
     *          console.log('Chạy khi item thay đổi', item);
     *          return () => {
     *              console.log('Dọn dẹp trước khi useEffect chạy lại hoặc component unmount');
     *          };
     *      }, [item]);
     *  Giải thích:
     *  - Chạy lần đầu tiên khi component mount
     *  - Mỗi khi item thay đổi → useEffect chạy lại
     *  - Trước khi chạy lại → nếu có hàm return, sẽ chạy hàm dọn dẹp trước
     */

    useEffect(() => {
        const HandleClick = () => {
            var AddHtml = '<span>Thêm thành công</span>';
            var TargetHtml = document.querySelector('#target');
            if (TargetHtml) {
                TargetHtml.innerHTML = AddHtml;
            }
        }
        var clickbtn = document.querySelector('#click');
        clickbtn.addEventListener('click', HandleClick);

        // gỡ trạng js khi trở về
        return () => {
            clickbtn.removeEventListener('click', HandleClick);
        }
    })

    /**
     *  Kết hợp giữa useStage() và useEffect()
     */
    const [Time, SetTime] = useState(new Date());
    useEffect(() => {
        const UpdateTime = setInterval(() => {
            SetTime(new Date());
        }, 1000)

        return () => {
            clearInterval(UpdateTime);
        }
    })

    /**
     *  Bài 1: Tạo component ToggleText – Ẩn/hiện đoạn văn bản
     *  - Có nút "Ẩn/Hiện"
     *  - Khi click → ẩn/hiện nội dung
     */
    const [Paragraph, ToggleParagraph] = useState(true)
    const HandleParagraph = () => {
        console.log(123)
        var paragraph = document.querySelector('#paragraph');
        if (Paragraph) {
            ToggleParagraph(false)
            paragraph.style.visibility = "hidden";
            console.log('hidden');
        } else {
            ToggleParagraph(true)
            paragraph.style.visibility = "";
            console.log('shown');
        }
    }
    useEffect(() => {
        var Btn = document.querySelector('#toggle-p');
        Btn.addEventListener('click', HandleParagraph);
        return () => {
            Btn.removeEventListener('click', HandleParagraph);
        }
    })

    /**
     *  Bài 2: Tạo component SearchBox – ô tìm kiếm đơn giản
     *  - Có ô input
     *  - Giá trị input được lưu trong useState
     *  - Khi người dùng gõ chữ → in ra bên dưới
     */
    const [SearchKey, SearchResult] = useState('');
    const SearchInputRef = useRef(null);
    const HandleSearch = () => {
        SearchResult(SearchInputRef.current.value);
    }
    useEffect(() => {
        const InputElement = SearchInputRef.current;
        InputElement.addEventListener('input', HandleSearch);
        return () => {
            InputElement.removeEventListener('input', HandleSearch);
        }
    })

    /**
     *  Bài 3: Tự động lưu vào localStorage mỗi khi thay đổi
     */
    const [DarkMode, SetDarkMode] = useState(() => {
        const SavedMode = localStorage.getItem('DarkMode');
        return SavedMode === "false";
    })
    const UpdateDarkMode = () => {
        SetDarkMode(!DarkMode);
    }
    useEffect(() => {
        localStorage.setItem('DarkMode', DarkMode);
    }, [DarkMode]) // Lắng nghe biến darkmode thay đổi giá trị thì chạy hàm này

    return (
        <React.Fragment>
            <p>Trạng thái: {IsOn ? 'Bật' : 'Tắt'}</p>
            <button onClick={() => { SetOnStatus(!IsOn) }}>
                {IsOn ? 'Tắt' : 'Bật'}
            </button><br />

            <p>Số đếm hiện tại {Count}</p>
            <button onClick={HandleCount}>Click vào đây để tăng số đếm</button><br /><br />

            <ul>
                <li>Tên: {User.name}</li>
                <li>Tuổi: {User.age}</li>
                <li>Vai Trò: {User.role}</li>
                <li>
                    <button onClick={HandleUpdate}>Cập Nhật Vị Trí</button>
                </li>
            </ul><br />

            <div id="target"></div>
            <button id="click">Click vào đây</button><br />

            <div>Thời gian hiện tại {Time.toLocaleTimeString()}</div><br />

            <h2>Bài 1: Ẩn/hiện đoạn văn bản</h2>
            <button id='toggle-p'>{Paragraph ? 'Ẩn Văn Bản' : 'Hiện Văn Bản'}</button>
            <p id='paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam nesciunt fugit, sapiente incidunt nemo voluptatem enim nostrum blanditiis placeat delectus rerum modi eius magnam earum non deleniti officia. Dicta!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit earum, ut nisi nostrum debitis praesentium, ex maiores, labore blanditiis molestiae perspiciatis fuga dolore assumenda optio veniam saepe deserunt nam ducimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam architecto sit similique! Commodi cumque iste cum. Quae, fugit dolore incidunt totam eveniet rem sapiente ipsum voluptatem, hic corporis dignissimos autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga nemo hic sit aspernatur, dicta doloremque perspiciatis at non eum necessitatibus iusto, quae voluptatum. Sint id commodi dolore ipsum? Ad?
            </p><br />

            <h2>Bài 2: Tạo component SearchBox – ô tìm kiếm đơn giản</h2>
            <input type="search" name="" id="search-ip" value={SearchKey} ref={SearchInputRef} placeholder="Nhập vào đây" /><br />
            <span>Bạn đang tìm kiếm: {SearchKey}</span><br /><br />

            <h2>Bài 3: Tự động lưu vào localStorage mỗi khi thay đổi</h2>
            <p>Chế độ {DarkMode ? 'tối' : 'sáng'}</p>
            <button id='change-mode' onClick={UpdateDarkMode}>Đổi qua chế độ {DarkMode ? 'sáng' : 'tối'}</button>
        </React.Fragment>
    )


}

export default UseStateFunc