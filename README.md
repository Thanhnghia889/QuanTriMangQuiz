# Ứng dụng Ôn thi Quản trị mạng

Ứng dụng ôn thi trắc nghiệm môn **Quản trị mạng**, bám theo giáo trình `QUAN TRI MANG - 2025.pdf`.

## Nội dung hiện có

- Ngân hàng mặc định: **300 câu hỏi**, chia đều **6 chương x 50 câu**.
- Luyện tập theo chương, có chế độ **hiện đáp án và giải thích ngay sau khi chọn**.
- Thi thử mặc định: **50 câu / 60 phút**, trộn ngẫu nhiên từ các chương được chọn.
- Có giao diện **Dark / Light** và bố cục dùng được trên mobile.
- Dữ liệu ghim câu hỏi, lịch sử thi và câu hỏi tự thêm được lưu trong trình duyệt bằng `LocalStorage`.

## Mở trên máy tính

Mở trực tiếp file:

```text
D:\QuanTriMangQuiz\index.html
```

Hoặc chạy server local trong PowerShell:

```powershell
cd D:\QuanTriMangQuiz
python -m http.server 8765 --bind 0.0.0.0
```

Sau đó mở:

```text
http://127.0.0.1:8765/index.html
```

## Dùng trên điện thoại

1. Cho máy tính và điện thoại dùng cùng một mạng Wi-Fi.
2. Trên máy tính, chạy:

```powershell
cd D:\QuanTriMangQuiz
python -m http.server 8765 --bind 0.0.0.0
```

3. Xem IP Wi-Fi của máy tính bằng PowerShell:

```powershell
Get-NetIPAddress -AddressFamily IPv4
```

4. Trên điện thoại, mở trình duyệt và nhập:

```text
http://IP_MAY_TINH:8765/index.html
```

Ví dụ máy hiện tại đang có IP Wi-Fi:

```text
http://192.168.2.4:8765/index.html
```

Nếu điện thoại không mở được, kiểm tra Windows Firewall có đang chặn Python không và cho phép truy cập trong mạng riêng.

## Cấu trúc file

```text
D:\QuanTriMangQuiz
├── index.html    # Giao diện chính
├── style.css     # Dark/Light theme và responsive mobile
├── app.js        # Logic luyện tập, thi thử, localStorage
├── questions.js  # 300 câu hỏi mặc định
└── README.md     # Hướng dẫn sử dụng
```
