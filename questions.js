// Ngân hàng 300 câu hỏi trắc nghiệm môn Quản trị mạng
// Bám theo giáo trình "QUAN TRI MANG - 2025.pdf" của ThS. Đặng Đức Trung.
// Cấu trúc: 6 chương x 50 câu, dùng cho luyện tập và thi thử 50 câu/60 phút.

const BUILTIN_QUESTIONS = [
  {
    "id": "gt2025_c1_01",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Mạng máy tính là một nhóm các máy tính, thiết bị ngoại vi được nối kết với nhau thông qua các phương tiện truyền dẫn để trao đổi dữ liệu.",
      "B. Hệ thống mạng sẽ dựa vào username và password để biết bạn là ai, có quyền vào mạng hay không và có quyền sử dụng những tài nguyên nào trên mạng.",
      "C. Dịch vụ cơ sở dữ liệu thực hiện các chức năng sau",
      "D. Administrator: là nhà quản trị hệ thống mạng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Mạng máy tính là một nhóm các máy tính, thiết bị ngoại vi được nối kết với nhau thông qua các phương tiện truyền dẫn để trao đổi dữ liệu."
  },
  {
    "id": "gt2025_c1_02",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Do làm chức năng phục vụ cho các máy tính khác nên cấu hình máy server phải mạnh, thông thường là máy chuyên dụng của các hãng như: Compaq, Intel, IBM...",
      "B. Hệ thống mạng sẽ dựa vào username và password để biết bạn là ai, có quyền vào mạng hay không và có quyền sử dụng những tài nguyên nào trên mạng.",
      "C. Các node trong mạng CAN trường được kết nối với nhau bằng cáp quang và tận dụng công nghệ Ethernet 10-Gigabit.",
      "D. Server là máy tính được cài đặt phần mềm chuyên dụng để cung cấp dịch vụ cho các máy tính khác."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Server là máy tính được cài đặt phần mềm chuyên dụng để cung cấp dịch vụ cho các máy tính khác."
  },
  {
    "id": "gt2025_c1_03",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Mạng CAN lớn hơn mạng LAN nhưng nhỏ hơn mạng MAN vàmạng WAN.",
      "B. Peer vừa đóng vai trò là máy sử dụng dịch vụ vừa là máy cung cấp dịch vụ.",
      "C. Client là máy tính sử dụng các dịch vụ mà các máy server cung cấp.",
      "D. Shared data (dữ liệu dùng chung): là tập hợp các tập tin, thư mục mà các máy tính chia sẻ để các máy tính khác truy cập sử dụng chúng thông qua mạng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Client là máy tính sử dụng các dịch vụ mà các máy server cung cấp."
  },
  {
    "id": "gt2025_c1_04",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Các ứng dụng mạng: phần mềm quản lý kho bãi, phần mềm bán vé tàu...",
      "B. Peer vừa đóng vai trò là máy sử dụng dịch vụ vừa là máy cung cấp dịch vụ.",
      "C. Client (máy trạm): là máy tính sử dụng các dịch vụ mà các máy server cung cấp.",
      "D. Ưu điểm: truy xuất nhanh, phần lớn không giới hạn các ứng dụng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Peer vừa đóng vai trò là máy sử dụng dịch vụ vừa là máy cung cấp dịch vụ."
  },
  {
    "id": "gt2025_c1_05",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Tài nguyên mạng gồm tập tin, thư mục, máy in, fax, modem, ổ CDROM và các thành phần người dùng mạng sử dụng.",
      "B. Server (máy phục vụ): là máy tính được cài đặt các phần mềm chuyên dụng làm chức năng cung cấp các dịch vụ cho các máy tính khác.",
      "C. Bên cạnh công nghệ Ethernet 10-Gigabit này, WiFi hotspot và vùng phát sóng là những cách truy cập mạng khác nhau.",
      "D. Máy peer thường sử dụng các hệ điều hành như: DOS, WinNT Workstation, Win9X, Win Me, Win2K Professional, WinXP..."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Tài nguyên mạng gồm tập tin, thư mục, máy in, fax, modem, ổ CDROM và các thành phần người dùng mạng sử dụng."
  },
  {
    "id": "gt2025_c1_06",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Resource (tài nguyên): là tập tin, thư mục, máy in, máy Fax, Modem, ổ CDROM và các thành phần khác mà người dùng mạng sử dụng.",
      "B. Các ứng dụng mạng: phần mềm quản lý kho bãi, phần mềm bán vé tàu...",
      "C. Mạng MAN nối kết các mạng LAN lại với nhau thông qua các phương tiện truyền dẫn khác nhau (cáp quang, cáp đồng, sóng...) và các phương thức truyền thông khác nhau.",
      "D. Trong Workgroup, các máy tính cục bộ tự bảo mật, quản lý tài nguyên và chứng thực người dùng cục bộ."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Trong Workgroup, các máy tính cục bộ tự bảo mật, quản lý tài nguyên và chứng thực người dùng cục bộ."
  },
  {
    "id": "gt2025_c1_07",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Client là máy tính sử dụng các dịch vụ mà các máy server cung cấp.",
      "B. Các protocol: TCP/IP , NetBeui, Apple Talk, IPX/SPX...",
      "C. SNMP là giao thức quản trị mạng đơn giản được sử dụng phổ biến.",
      "D. Mạng máy tính là một nhóm các máy tính, thiết bị ngoại vi được nối kết với nhau thông qua các phương tiện truyền dẫn để trao đổi dữ liệu."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: SNMP là giao thức quản trị mạng đơn giản được sử dụng phổ biến."
  },
  {
    "id": "gt2025_c1_08",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Mạng MAN nối kết các mạng LAN lại với nhau thông qua các phương tiện truyền dẫn khác nhau (cáp quang, cáp đồng, sóng...) và các phương thức truyền thông khác nhau.",
      "B. Wireshark dùng để thu thập, phân tích, lọc gói tin và giám sát gói tin theo thời gian thực.",
      "C. Mô hình xử lý cộng tác bao gồm nhiều máy tính có thể hợp tác để thực hiện một công việc.",
      "D. Khuyết điểm: dữ liệu lưu trữ rời rạc khó đồng bộ, backup và rất dễ nhiễm virus."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Wireshark dùng để thu thập, phân tích, lọc gói tin và giám sát gói tin theo thời gian thực."
  },
  {
    "id": "gt2025_c1_09",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. GIỚI THIỆU MẠNG VÀ CÁC DỊCH VỤ MẠNG MÁY TÍNH",
      "B. Các thiết bị ngoại vi: máy in, máy fax, Modem, Scanner...",
      "C. Cơ bản có ba loại mô hình xử lý mạng bao gồm: - Mô hình xử lý mạng tập trung - Mô hình xử lý mạng phân phối - Mô hình xử lý mạng cộng tác.",
      "D. Khuyết điểm: khó đáp ứng được các yêu cầu của nhiều ứng dụng khác nhau, tốc độ truy xuất chậm."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: GIỚI THIỆU MẠNG VÀ CÁC DỊCH VỤ MẠNG MÁY TÍNH"
  },
  {
    "id": "gt2025_c1_10",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Media (phương tiện truyền dẫn): là cách thức và vật liệu nối kết các máy lại với nhau.",
      "B. Ngoài ra dịch vụ này còn cung cấp các ứng dụng khác như: thư thoại (voice mail), các ứng dụng nhóm làm việc (workgroup application).",
      "C. Bên cạnh công nghệ Ethernet 10-Gigabit này, WiFi hotspot và vùng phát sóng là những cách truy cập mạng khác nhau.",
      "D. CÁC THÀNH PHẦN CƠ BẢN CẤU THÀNH NÊN MẠNG MÁY TÍNH"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: CÁC THÀNH PHẦN CƠ BẢN CẤU THÀNH NÊN MẠNG MÁY TÍNH"
  },
  {
    "id": "gt2025_c1_11",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Server (máy phục vụ): là máy tính được cài đặt các phần mềm chuyên dụng làm chức năng cung cấp các dịch vụ cho các máy tính khác.",
      "B. Dịch vụ in ấn là một ứng dụng mạng điều khiển và quản lý việc truy cập các máy in, máy fax mạng.",
      "C. Các loại máy tính: Palm, Laptop, PC, MainFrame...",
      "D. User (người dùng): là người sử dụng máy trạm (client) để truy xuất các tài nguyên mạng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Các loại máy tính: Palm, Laptop, PC, MainFrame..."
  },
  {
    "id": "gt2025_c1_12",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Mạng WAN thường là mạng của các công ty đa quốc gia hay toàn cầu, điển hình là mạng Internet.",
      "B. Các thiết bị giao tiếp: Card mạng (NIC hay Adapter), Hub, Switch, Router...",
      "C. Toàn bộ các tiến trình xử lý diễn ra tại máy tính trung tâm.",
      "D. Shared data (dữ liệu dùng chung): là tập hợp các tập tin, thư mục mà các máy tính chia sẻ để các máy tính khác truy cập sử dụng chúng thông qua mạng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Các thiết bị giao tiếp: Card mạng (NIC hay Adapter), Hub, Switch, Router..."
  },
  {
    "id": "gt2025_c1_13",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Môi trường truyền dẫn: cáp, sóng điện từ, sóng vi ba, tia hồng ngoại...",
      "B. Tuy dữ liệu được xử lý và lưu trữ tại máy cục bộ nhưng các máy tính này được nối mạng với nhau nên chúng có thể trao đổi dữ liệu và dịch vụ.",
      "C. DỊCH VỤ ỨNG DỤNG (APPLICATION SERVICES)",
      "D. Tăng độ linh hoạt vì các máy tính có thể đặt bất kỳ nơi nào, chứ không chỉ đặt cạnh PC của người dùng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Môi trường truyền dẫn: cáp, sóng điện từ, sóng vi ba, tia hồng ngoại..."
  },
  {
    "id": "gt2025_c1_14",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. KIẾN TRÚC HỆ THỐNG QUẢN LÝ MẠNG 1.2.1.",
      "B. Tối ưu hóa tiến trình thực hiện các tác vụ cơ sở dữ liệu.",
      "C. Khuyết điểm: các dữ liệu được lưu trữ trên các vị trí khác nhau nên rất khó đồng bộ và backup, khả năng nhiễm virus rất cao.",
      "D. Các protocol: TCP/IP , NetBeui, Apple Talk, IPX/SPX..."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Các protocol: TCP/IP , NetBeui, Apple Talk, IPX/SPX..."
  },
  {
    "id": "gt2025_c1_15",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Administrator: là nhà quản trị hệ thống mạng.",
      "B. Các thiết bị giao tiếp: Card mạng (NIC hay Adapter), Hub, Switch, Router...",
      "C. Các hệ điều hành mạng: WinNT, Win2000, Win2003, Novell Netware, Unix...",
      "D. Resource (tài nguyên): là tập tin, thư mục, máy in, máy Fax, Modem, ổ CDROM và các thành phần khác mà người dùng mạng sử dụng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Các hệ điều hành mạng: WinNT, Win2000, Win2003, Novell Netware, Unix..."
  },
  {
    "id": "gt2025_c1_16",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. KIẾN TRÚC HỆ THỐNG QUẢN LÝ MẠNG 1.2.1.",
      "B. Các thiết bị ngoại vi: máy in, máy fax, Modem, Scanner...",
      "C. Các protocol: TCP/IP , NetBeui, Apple Talk, IPX/SPX...",
      "D. Dịch vụ này cho phép các ứng dụng huy động năng lực của các máy tính chuyên dụng khác trên mạng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Các thiết bị ngoại vi: máy in, máy fax, Modem, Scanner..."
  },
  {
    "id": "gt2025_c1_17",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Các ứng dụng mạng: phần mềm quản lý kho bãi, phần mềm bán vé tàu...",
      "B. Các thiết bị ngoại vi: máy in, máy fax, Modem, Scanner...",
      "C. Bên cạnh công nghệ Ethernet 10-Gigabit này, WiFi hotspot và vùng phát sóng là những cách truy cập mạng khác nhau.",
      "D. DỊCH VỤ ỨNG DỤNG (APPLICATION SERVICES)"
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Các ứng dụng mạng: phần mềm quản lý kho bãi, phần mềm bán vé tàu..."
  },
  {
    "id": "gt2025_c1_18",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Dịch vụ này cho phép tích hợp mọi thông tin về các đối tượng trên mạng thành một cấu trúc thư mục dùng chung nhờ đó mà quá trình quản lý và chia sẻ tài nguyên trở nên hiệu quả hơn.",
      "B. Mạng WAN thường là mạng của các công ty đa quốc gia hay toàn cầu, điển hình là mạng Internet.",
      "C. Mạng MAN nối kết các mạng LAN lại với nhau thông qua các phương tiện truyền dẫn khác nhau (cáp quang, cáp đồng, sóng...) và các phương thức truyền thông khác nhau.",
      "D. Server (máy phục vụ): là máy tính được cài đặt các phần mềm chuyên dụng làm chức năng cung cấp các dịch vụ cho các máy tính khác."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Server (máy phục vụ): là máy tính được cài đặt các phần mềm chuyên dụng làm chức năng cung cấp các dịch vụ cho các máy tính khác."
  },
  {
    "id": "gt2025_c1_19",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Máy peer thường sử dụng các hệ điều hành như: DOS, WinNT Workstation, Win9X, Win Me, Win2K Professional, WinXP...",
      "B. Dịch vụ tập tin cho phép các máy tính chia sẻ các tập tin, thao tác trên các tập tin chia sẻ này như: lưu trữ, tìm kiếm, di chuyển...",
      "C. Do làm chức năng phục vụ cho các máy tính khác nên cấu hình máy server phải mạnh, thông thường là máy chuyên dụng của các hãng như: Compaq, Intel, IBM...",
      "D. Server là máy tính được cài đặt phần mềm chuyên dụng để cung cấp dịch vụ cho các máy tính khác."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Do làm chức năng phục vụ cho các máy tính khác nên cấu hình máy server phải mạnh, thông thường là máy chuyên dụng của các hãng như: Compaq, Intel, IBM..."
  },
  {
    "id": "gt2025_c1_20",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Môi trường truyền dẫn: cáp, sóng điện từ, sóng vi ba, tia hồng ngoại...",
      "B. Client (máy trạm): là máy tính sử dụng các dịch vụ mà các máy server cung cấp.",
      "C. Shared data (dữ liệu dùng chung): là tập hợp các tập tin, thư mục mà các máy tính chia sẻ để các máy tính khác truy cập sử dụng chúng thông qua mạng.",
      "D. Ưu điểm: truy xuất nhanh, phần lớn không giới hạn các ứng dụng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Client (máy trạm): là máy tính sử dụng các dịch vụ mà các máy server cung cấp."
  },
  {
    "id": "gt2025_c1_21",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Do xử lý số công việc không lớn nên thông thường các máy này không yêu cầu có cấu hình mạnh.",
      "B. Peer: là những máy tính vừa đóng vai trò là máy sử dụng vừa là máy cung cấp các dịch vụ.",
      "C. Toàn bộ các tiến trình xử lý diễn ra tại máy tính trung tâm.",
      "D. Shared data (dữ liệu dùng chung): là tập hợp các tập tin, thư mục mà các máy tính chia sẻ để các máy tính khác truy cập sử dụng chúng thông qua mạng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Do xử lý số công việc không lớn nên thông thường các máy này không yêu cầu có cấu hình mạnh."
  },
  {
    "id": "gt2025_c1_22",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. DỊCH VỤ THƯ MỤC (DIRECTORY SERVICES)",
      "B. Các protocol: TCP/IP , NetBeui, Apple Talk, IPX/SPX...",
      "C. Các thiết bị giao tiếp: Card mạng (NIC hay Adapter), Hub, Switch, Router...",
      "D. Peer: là những máy tính vừa đóng vai trò là máy sử dụng vừa là máy cung cấp các dịch vụ."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Peer: là những máy tính vừa đóng vai trò là máy sử dụng vừa là máy cung cấp các dịch vụ."
  },
  {
    "id": "gt2025_c1_23",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. User (người dùng): là người sử dụng máy trạm (client) để truy xuất các tài nguyên mạng.",
      "B. Các ứng dụng mạng: phần mềm quản lý kho bãi, phần mềm bán vé tàu...",
      "C. Máy peer thường sử dụng các hệ điều hành như: DOS, WinNT Workstation, Win9X, Win Me, Win2K Professional, WinXP...",
      "D. Các máy trạm đầu cuối không lưu trữ và xử lý dữ liệu."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Máy peer thường sử dụng các hệ điều hành như: DOS, WinNT Workstation, Win9X, Win Me, Win2K Professional, WinXP..."
  },
  {
    "id": "gt2025_c1_24",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Client là máy tính sử dụng các dịch vụ mà các máy server cung cấp.",
      "B. Media (phương tiện truyền dẫn): là cách thức và vật liệu nối kết các máy lại với nhau.",
      "C. Do làm chức năng phục vụ cho các máy tính khác nên cấu hình máy server phải mạnh, thông thường là máy chuyên dụng của các hãng như: Compaq, Intel, IBM...",
      "D. Do xử lý số công việc không lớn nên thông thường các máy này không yêu cầu có cấu hình mạnh."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Media (phương tiện truyền dẫn): là cách thức và vật liệu nối kết các máy lại với nhau."
  },
  {
    "id": "gt2025_c1_25",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Shared data (dữ liệu dùng chung): là tập hợp các tập tin, thư mục mà các máy tính chia sẻ để các máy tính khác truy cập sử dụng chúng thông qua mạng.",
      "B. Peer vừa đóng vai trò là máy sử dụng dịch vụ vừa là máy cung cấp dịch vụ.",
      "C. SNMP là giao thức quản trị mạng đơn giản được sử dụng phổ biến.",
      "D. Dịch vụ này cung cấp kết quả cho các chương trình ở client bằng cách thực hiện các chương trình trên server."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Shared data (dữ liệu dùng chung): là tập hợp các tập tin, thư mục mà các máy tính chia sẻ để các máy tính khác truy cập sử dụng chúng thông qua mạng."
  },
  {
    "id": "gt2025_c1_26",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Mạng máy tính là một nhóm các máy tính, thiết bị ngoại vi được nối kết với nhau thông qua các phương tiện truyền dẫn để trao đổi dữ liệu.",
      "B. Dịch vụ này cho phép các ứng dụng huy động năng lực của các máy tính chuyên dụng khác trên mạng.",
      "C. Wireshark dùng để thu thập, phân tích, lọc gói tin và giám sát gói tin theo thời gian thực.",
      "D. Resource (tài nguyên): là tập tin, thư mục, máy in, máy Fax, Modem, ổ CDROM và các thành phần khác mà người dùng mạng sử dụng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Resource (tài nguyên): là tập tin, thư mục, máy in, máy Fax, Modem, ổ CDROM và các thành phần khác mà người dùng mạng sử dụng."
  },
  {
    "id": "gt2025_c1_27",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Bên cạnh công nghệ Ethernet 10-Gigabit này, WiFi hotspot và vùng phát sóng là những cách truy cập mạng khác nhau.",
      "B. Truyền tập tin: không có mạng, các khả năng truyền tải tập tin giữa các máy tính bị hạn chế.",
      "C. User (người dùng): là người sử dụng máy trạm (client) để truy xuất các tài nguyên mạng.",
      "D. Các loại máy tính: Palm, Laptop, PC, MainFrame..."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: User (người dùng): là người sử dụng máy trạm (client) để truy xuất các tài nguyên mạng."
  },
  {
    "id": "gt2025_c1_28",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Media (phương tiện truyền dẫn): là cách thức và vật liệu nối kết các máy lại với nhau.",
      "B. Thông thường một user sẽ có một username (account) và một password.",
      "C. Phục vụ số lượng người dùng lớn, truy cập nhanh vào các cơ sở dữ liệu.",
      "D. Trong Workgroup, các máy tính cục bộ tự bảo mật, quản lý tài nguyên và chứng thực người dùng cục bộ."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Thông thường một user sẽ có một username (account) và một password."
  },
  {
    "id": "gt2025_c1_29",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Hệ thống mạng sẽ dựa vào username và password để biết bạn là ai, có quyền vào mạng hay không và có quyền sử dụng những tài nguyên nào trên mạng.",
      "B. Các dịch vụ mạng phổ biến nhất là: - Dịch vụ tập tin. - Dịch vụ in ấn. - Dịch vụ thông điệp. - Dịch vụ thư mục. - Dịch vụ ứng dụng. - Dịch vụ cơ sở dữ liệu. - Dịch vụ Web.",
      "C. Client là máy tính sử dụng các dịch vụ mà các máy server cung cấp.",
      "D. Tuy dữ liệu được xử lý và lưu trữ tại máy cục bộ nhưng các máy tính này được nối mạng với nhau nên chúng có thể trao đổi dữ liệu và dịch vụ."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Hệ thống mạng sẽ dựa vào username và password để biết bạn là ai, có quyền vào mạng hay không và có quyền sử dụng những tài nguyên nào trên mạng."
  },
  {
    "id": "gt2025_c1_30",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Phục vụ số lượng người dùng lớn, truy cập nhanh vào các cơ sở dữ liệu.",
      "B. Server là máy tính được cài đặt phần mềm chuyên dụng để cung cấp dịch vụ cho các máy tính khác.",
      "C. Dịch vụ tập tin cho phép các máy tính chia sẻ các tập tin, thao tác trên các tập tin chia sẻ này như: lưu trữ, tìm kiếm, di chuyển...",
      "D. Administrator: là nhà quản trị hệ thống mạng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Administrator: là nhà quản trị hệ thống mạng."
  },
  {
    "id": "gt2025_c1_31",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Thông thường một user sẽ có một username (account) và một password.",
      "B. Client (máy trạm): là máy tính sử dụng các dịch vụ mà các máy server cung cấp.",
      "C. Mạng CAN lớn hơn mạng LAN nhưng nhỏ hơn mạng MAN vàmạng WAN.",
      "D. Là dịch vụ cho phép gởi/nhận các thư điện tử (e-mail)."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Mạng CAN lớn hơn mạng LAN nhưng nhỏ hơn mạng MAN vàmạng WAN."
  },
  {
    "id": "gt2025_c1_32",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Client (máy trạm): là máy tính sử dụng các dịch vụ mà các máy server cung cấp.",
      "B. Mạng Campus Area Network (CAN) sử dụng cùng một loại công nghệ như mạng LAN.",
      "C. Các máy tính có khả năng hoạt động độc lập, các công việc được tách nhỏ và giao cho nhiều máy tính khác nhau thay vì tập trung xử lý trên máy trung tâm.",
      "D. Các node trong mạng CAN trường được kết nối với nhau bằng cáp quang và tận dụng công nghệ Ethernet 10-Gigabit."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Mạng Campus Area Network (CAN) sử dụng cùng một loại công nghệ như mạng LAN."
  },
  {
    "id": "gt2025_c1_33",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Các node trong mạng CAN trường được kết nối với nhau bằng cáp quang và tận dụng công nghệ Ethernet 10-Gigabit.",
      "B. DỊCH VỤ CƠ SỞ DỮ LIỆU (DATABASE SERVICES)",
      "C. Giảm chi phí cho nhiều người có thể chia nhau dùng chung các thiết bị đắt tiền như máy in màu, máy vẽ, máy in khổ giấy lớn.",
      "D. Tăng độ linh hoạt vì các máy tính có thể đặt bất kỳ nơi nào, chứ không chỉ đặt cạnh PC của người dùng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Các node trong mạng CAN trường được kết nối với nhau bằng cáp quang và tận dụng công nghệ Ethernet 10-Gigabit."
  },
  {
    "id": "gt2025_c1_34",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Ưu điểm: truy xuất nhanh, phần lớn không giới hạn các ứng dụng.",
      "B. User (người dùng): là người sử dụng máy trạm (client) để truy xuất các tài nguyên mạng.",
      "C. Là dịch vụ cho phép gởi/nhận các thư điện tử (e-mail).",
      "D. Bên cạnh công nghệ Ethernet 10-Gigabit này, WiFi hotspot và vùng phát sóng là những cách truy cập mạng khác nhau."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Bên cạnh công nghệ Ethernet 10-Gigabit này, WiFi hotspot và vùng phát sóng là những cách truy cập mạng khác nhau."
  },
  {
    "id": "gt2025_c1_35",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Mạng MAN nối kết các mạng LAN lại với nhau thông qua các phương tiện truyền dẫn khác nhau (cáp quang, cáp đồng, sóng...) và các phương thức truyền thông khác nhau.",
      "B. KIẾN TRÚC HỆ THỐNG QUẢN LÝ MẠNG 1.2.1.",
      "C. Mạng MAN gần giống như mạng LAN nhưng giới hạn của nó là một thành phố hay một quốc gia.",
      "D. Ưu điểm: truy xuất nhanh, phần lớn không giới hạn các ứng dụng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Mạng MAN gần giống như mạng LAN nhưng giới hạn của nó là một thành phố hay một quốc gia."
  },
  {
    "id": "gt2025_c1_36",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Các node trong mạng CAN trường được kết nối với nhau bằng cáp quang và tận dụng công nghệ Ethernet 10-Gigabit.",
      "B. Mạng MAN nối kết các mạng LAN lại với nhau thông qua các phương tiện truyền dẫn khác nhau (cáp quang, cáp đồng, sóng...) và các phương thức truyền thông khác nhau.",
      "C. Các thiết bị giao tiếp: Card mạng (NIC hay Adapter), Hub, Switch, Router...",
      "D. Một máy tính có thể mượn năng lực xử lý bằng cách chạy các chương trình trên các máy nằm trong mạng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Mạng MAN nối kết các mạng LAN lại với nhau thông qua các phương tiện truyền dẫn khác nhau (cáp quang, cáp đồng, sóng...) và các phương thức truyền thông khác nhau."
  },
  {
    "id": "gt2025_c1_37",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Mạng WAN bao phủ vùng địa lý rộng lớn có thể là một quốc gia, một lục địa hay toàn cầu.",
      "B. DỊCH VỤ CƠ SỞ DỮ LIỆU (DATABASE SERVICES)",
      "C. User (người dùng): là người sử dụng máy trạm (client) để truy xuất các tài nguyên mạng.",
      "D. Các node trong mạng CAN trường được kết nối với nhau bằng cáp quang và tận dụng công nghệ Ethernet 10-Gigabit."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Mạng WAN bao phủ vùng địa lý rộng lớn có thể là một quốc gia, một lục địa hay toàn cầu."
  },
  {
    "id": "gt2025_c1_38",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Mạng MAN gần giống như mạng LAN nhưng giới hạn của nó là một thành phố hay một quốc gia.",
      "B. Ưu điểm: dữ liệu được bảo mật an toàn, dễ backup và diệt virus.",
      "C. Dịch vụ này rất phổ biến và đơn giản.",
      "D. Mạng WAN thường là mạng của các công ty đa quốc gia hay toàn cầu, điển hình là mạng Internet."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Mạng WAN thường là mạng của các công ty đa quốc gia hay toàn cầu, điển hình là mạng Internet."
  },
  {
    "id": "gt2025_c1_39",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Ưu điểm: rất nhanh và mạnh, có thể dùng để chạy các ứng dụng có các phép toán lớn.",
      "B. Mạng WAN thường là mạng của các công ty đa quốc gia hay toàn cầu, điển hình là mạng Internet.",
      "C. Các dịch vụ mạng phổ biến nhất là: - Dịch vụ tập tin. - Dịch vụ in ấn. - Dịch vụ thông điệp. - Dịch vụ thư mục. - Dịch vụ ứng dụng. - Dịch vụ cơ sở dữ liệu. - Dịch vụ Web.",
      "D. Server là máy tính được cài đặt phần mềm chuyên dụng để cung cấp dịch vụ cho các máy tính khác."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Các dịch vụ mạng phổ biến nhất là: - Dịch vụ tập tin. - Dịch vụ in ấn. - Dịch vụ thông điệp. - Dịch vụ thư mục. - Dịch vụ ứng dụng. - Dịch vụ cơ sở dữ liệu. - Dịch vụ Web."
  },
  {
    "id": "gt2025_c1_40",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Các loại máy tính: Palm, Laptop, PC, MainFrame...",
      "B. Dịch vụ tập tin cho phép các máy tính chia sẻ các tập tin, thao tác trên các tập tin chia sẻ này như: lưu trữ, tìm kiếm, di chuyển...",
      "C. Một máy tính có thể mượn năng lực xử lý bằng cách chạy các chương trình trên các máy nằm trong mạng.",
      "D. Mô hình xử lý cộng tác bao gồm nhiều máy tính có thể hợp tác để thực hiện một công việc."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Dịch vụ tập tin cho phép các máy tính chia sẻ các tập tin, thao tác trên các tập tin chia sẻ này như: lưu trữ, tìm kiếm, di chuyển..."
  },
  {
    "id": "gt2025_c1_41",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Truyền tập tin: không có mạng, các khả năng truyền tải tập tin giữa các máy tính bị hạn chế.",
      "B. Phục vụ số lượng người dùng lớn, truy cập nhanh vào các cơ sở dữ liệu.",
      "C. Hệ thống mạng sẽ dựa vào username và password để biết bạn là ai, có quyền vào mạng hay không và có quyền sử dụng những tài nguyên nào trên mạng.",
      "D. Mạng Campus Area Network (CAN) sử dụng cùng một loại công nghệ như mạng LAN."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Truyền tập tin: không có mạng, các khả năng truyền tải tập tin giữa các máy tính bị hạn chế."
  },
  {
    "id": "gt2025_c1_42",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Các node trong mạng CAN trường được kết nối với nhau bằng cáp quang và tận dụng công nghệ Ethernet 10-Gigabit.",
      "B. Các hệ điều hành mạng: WinNT, Win2000, Win2003, Novell Netware, Unix...",
      "C. Nói cách khác đây là quá trình chuyển các tập tin từ dạng lưu trữ này sang dạng lưu trữ khác.",
      "D. Ví dụ như chúng ta muốn sao chép một tập tin từ máy tính cục bộ ở Việt Nam sang một máy tính server đặt tại Pháp thì chúng ta dùng dịch vụ FTP để sao chép."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Ví dụ như chúng ta muốn sao chép một tập tin từ máy tính cục bộ ở Việt Nam sang một máy tính server đặt tại Pháp thì chúng ta dùng dịch vụ FTP để sao chép."
  },
  {
    "id": "gt2025_c1_43",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. User (người dùng): là người sử dụng máy trạm (client) để truy xuất các tài nguyên mạng.",
      "B. Server (máy phục vụ): là máy tính được cài đặt các phần mềm chuyên dụng làm chức năng cung cấp các dịch vụ cho các máy tính khác.",
      "C. Dịch vụ này rất phổ biến và đơn giản.",
      "D. Là dịch vụ cho phép gởi/nhận các thư điện tử (e-mail)."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Dịch vụ này rất phổ biến và đơn giản."
  },
  {
    "id": "gt2025_c1_44",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Peer vừa đóng vai trò là máy sử dụng dịch vụ vừa là máy cung cấp dịch vụ.",
      "B. Di trú dữ liệu (data migration) là công nghệ tự động dời các dữ liệu ít dùng từ kho lưu trữ trực tuyến sang kho lưu trữ cận tuyến hay ngoại tuyến.",
      "C. Mạng WAN bao phủ vùng địa lý rộng lớn có thể là một quốc gia, một lục địa hay toàn cầu.",
      "D. Resource (tài nguyên): là tập tin, thư mục, máy in, máy Fax, Modem, ổ CDROM và các thành phần khác mà người dùng mạng sử dụng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Di trú dữ liệu (data migration) là công nghệ tự động dời các dữ liệu ít dùng từ kho lưu trữ trực tuyến sang kho lưu trữ cận tuyến hay ngoại tuyến."
  },
  {
    "id": "gt2025_c1_45",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Nói cách khác đây là quá trình chuyển các tập tin từ dạng lưu trữ này sang dạng lưu trữ khác.",
      "B. Dịch vụ này cho phép tích hợp mọi thông tin về các đối tượng trên mạng thành một cấu trúc thư mục dùng chung nhờ đó mà quá trình quản lý và chia sẻ tài nguyên trở nên hiệu quả hơn.",
      "C. Mạng WAN thường là mạng của các công ty đa quốc gia hay toàn cầu, điển hình là mạng Internet.",
      "D. Khuyết điểm: dữ liệu lưu trữ rời rạc khó đồng bộ, backup và rất dễ nhiễm virus."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Nói cách khác đây là quá trình chuyển các tập tin từ dạng lưu trữ này sang dạng lưu trữ khác."
  },
  {
    "id": "gt2025_c1_46",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Dịch vụ cơ sở dữ liệu thực hiện các chức năng sau",
      "B. DỊCH VỤ THÔNG ĐIỆP (MESSAGE SERVICES)",
      "C. Resource (tài nguyên): là tập tin, thư mục, máy in, máy Fax, Modem, ổ CDROM và các thành phần khác mà người dùng mạng sử dụng.",
      "D. Sao lưu dự phòng (backup) là quá trình sao chép và lưu trữ một bản sao dữ liệu từ thiết bị lưu trữ chính."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Sao lưu dự phòng (backup) là quá trình sao chép và lưu trữ một bản sao dữ liệu từ thiết bị lưu trữ chính."
  },
  {
    "id": "gt2025_c1_47",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Mạng MAN gần giống như mạng LAN nhưng giới hạn của nó là một thành phố hay một quốc gia.",
      "B. Do xử lý số công việc không lớn nên thông thường các máy này không yêu cầu có cấu hình mạnh.",
      "C. Khi thiết bị lưu trữ chính có sự cố thì chúng ta dùng bản sao này để phục hồi dữ liệu.",
      "D. Client (máy trạm): là máy tính sử dụng các dịch vụ mà các máy server cung cấp."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Khi thiết bị lưu trữ chính có sự cố thì chúng ta dùng bản sao này để phục hồi dữ liệu."
  },
  {
    "id": "gt2025_c1_48",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Dùng cơ chế hàng đợi in để ấn định mức độ ưu tiên nội dung nào được in trước, nội dung nào được in sau.",
      "B. Dịch vụ in ấn là một ứng dụng mạng điều khiển và quản lý việc truy cập các máy in, máy fax mạng.",
      "C. DỊCH VỤ THƯ MỤC (DIRECTORY SERVICES)",
      "D. Các thiết bị ngoại vi: máy in, máy fax, Modem, Scanner..."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Dịch vụ in ấn là một ứng dụng mạng điều khiển và quản lý việc truy cập các máy in, máy fax mạng."
  },
  {
    "id": "gt2025_c1_49",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính?",
    "options": [
      "A. Giảm chi phí cho nhiều người có thể chia nhau dùng chung các thiết bị đắt tiền như máy in màu, máy vẽ, máy in khổ giấy lớn.",
      "B. Dùng cơ chế hàng đợi in để ấn định mức độ ưu tiên nội dung nào được in trước, nội dung nào được in sau.",
      "C. DỊCH VỤ THÔNG ĐIỆP (MESSAGE SERVICES)",
      "D. Là dịch vụ cho phép gởi/nhận các thư điện tử (e-mail)."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Giảm chi phí cho nhiều người có thể chia nhau dùng chung các thiết bị đắt tiền như máy in màu, máy vẽ, máy in khổ giấy lớn."
  },
  {
    "id": "gt2025_c1_50",
    "chapter": 1,
    "chapterName": "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính",
    "question": "Khi ôn Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính, nhận định nào đúng nhất?",
    "options": [
      "A. Shared data (dữ liệu dùng chung): là tập hợp các tập tin, thư mục mà các máy tính chia sẻ để các máy tính khác truy cập sử dụng chúng thông qua mạng.",
      "B. Hệ thống mạng sẽ dựa vào username và password để biết bạn là ai, có quyền vào mạng hay không và có quyền sử dụng những tài nguyên nào trên mạng.",
      "C. DỊCH VỤ ỨNG DỤNG (APPLICATION SERVICES)",
      "D. Tăng độ linh hoạt vì các máy tính có thể đặt bất kỳ nơi nào, chứ không chỉ đặt cạnh PC của người dùng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Tăng độ linh hoạt vì các máy tính có thể đặt bất kỳ nơi nào, chứ không chỉ đặt cạnh PC của người dùng."
  },
  {
    "id": "gt2025_c2_01",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Logstash xử lý dữ liệu rồi gửi dữ liệu nhận được cho ElasticSearch để lưu trữ.",
      "B. Xây dựng mô hình thu thập dữ liệu dựa trên luồng",
      "C. Cơ chế thu thập dựa trên SNMP là một cơ chế thu thập dữ liệu dựa trên gói hoạt động điển hình.",
      "D. Giám sát luồng mạng có thể xảy ra ở mọi vị trí của mạng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Cơ chế thu thập dựa trên SNMP là một cơ chế thu thập dữ liệu dựa trên gói hoạt động điển hình."
  },
  {
    "id": "gt2025_c2_02",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Dự đoán các mối đe dọa mạng trong tương lai.",
      "B. WBEM là tiêu chuẩn quản lý doanh nghiệp dựa trên web trong hệ thống quản lý mạng.",
      "C. Các công cụ WireShark và TCPdump là các cơ chế bắt gói tin dựa trên phần mềm thụ động.",
      "D. Một số công cụ bắt gói mạng thuận tiện được chọn để thu thập dữ liệu và phân tích thêm."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: WBEM là tiêu chuẩn quản lý doanh nghiệp dựa trên web trong hệ thống quản lý mạng."
  },
  {
    "id": "gt2025_c2_03",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. DiCAP dùng thiết bị phản chiếu và các nút chụp phân tán để xử lý lưu lượng mạng tốc độ cao.",
      "B. Kibana là ứng dụng nền web để tìm kiếm và xem trực quan các log.",
      "C. TỔNG QUAN CÁC PHƯƠNG PHÁP THU THẬP THÔNG TIN QUẢN LÝ MẠNG",
      "D. Một phần nhỏ dữ liệu chứa thông tin hữu ích và nhạy cảm cần được thu thập bảo vệ, phân tích và quản lý tốt."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: DiCAP dùng thiết bị phản chiếu và các nút chụp phân tán để xử lý lưu lượng mạng tốc độ cao."
  },
  {
    "id": "gt2025_c2_04",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Mạng máy tính cũng phải gánh chịu thường xuyên các cuộc tấn công thông minh và các cuộc xâm nhập độc hại.",
      "B. Tệp nhật ký là một định dạng dữ liệu được sử dụng rộng rãi trong hệ thống ghi các sự kiện mạng.",
      "C. Có một số tính năng chung của nhật ký: thông tin cần ghi, ngày, giờ chính xác, người điều hành và hành động.",
      "D. DPI là công nghệ kiểm tra gói tin sâu, nhận biết nội dung để xác định lưu lượng truy cập."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: DPI là công nghệ kiểm tra gói tin sâu, nhận biết nội dung để xác định lưu lượng truy cập."
  },
  {
    "id": "gt2025_c2_05",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Nhật ký sự kiện thường được sử dụng để thu thập dữ liệu.",
      "B. Nhật ký sự kiện ghi lại các dấu vết của người dùng, trạng thái sự kiện và các lỗi chẩn đoán nếu cần thiết.",
      "C. ELK là hệ thống mã nguồn mở để tìm kiếm, phân tích và trực quan hóa log.",
      "D. Thông tin về hiệu suất mạng: mất gói, trễ thời gian, tiêu thụ băng thông, v.v."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: ELK là hệ thống mã nguồn mở để tìm kiếm, phân tích và trực quan hóa log."
  },
  {
    "id": "gt2025_c2_06",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Tệp nhật ký là một định dạng dữ liệu được sử dụng rộng rãi trong hệ thống ghi các sự kiện mạng.",
      "B. ElasticSearch là máy chủ lưu trữ và tìm kiếm dữ liệu trong ELK Stack.",
      "C. Tải trọng chứa dữ liệu được trao đổi giữa các bên giao tiếp, mặc dù một số trong số chúng có thể được mã hóa.",
      "D. Trong khi đó, dữ liệu liên quan đến quản lý và dữ liệu thống kê được tạo và tổng hợp tại kế hoạch kiểm soát cũng có thể được thu thập."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: ElasticSearch là máy chủ lưu trữ và tìm kiếm dữ liệu trong ELK Stack."
  },
  {
    "id": "gt2025_c2_07",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Logstash xử lý dữ liệu rồi gửi dữ liệu nhận được cho ElasticSearch để lưu trữ.",
      "B. Các cơ chế thu thập dữ liệu thụ động thường giám sát lưu lượng mạng bằng các công cụ giám sát hoặc phần mềm hoặc phần cứng.",
      "C. Ngày nay khối lượng mạng là áp đảo các bộ bắt gói, vì vậy đề xuất chuyển sang phương pháp lấy mẫu gói.",
      "D. CÁC NGUYÊN TẮC BẢO MẬT THÔNG TIN QUẢN LÝ MẠNG"
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Logstash xử lý dữ liệu rồi gửi dữ liệu nhận được cho ElasticSearch để lưu trữ."
  },
  {
    "id": "gt2025_c2_08",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Các phương pháp thu thập dữ liệu chủ động thường đưa dữ liệu thử nghiệm vào lưu lượng và chờ phản hồi để đạt được mục đích đo chất lượng mạng.",
      "B. Theo các nguồn nhật ký, chúng bao gồm nhật ký hệ điều hành, nhật ký Web và nhật ký thiết bị.",
      "C. Lấy mẫu đơn giản và lấy mẫu phân tầng là hai trường hợp của chúng.",
      "D. Kibana là ứng dụng nền web để tìm kiếm và xem trực quan các log."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Kibana là ứng dụng nền web để tìm kiếm và xem trực quan các log."
  },
  {
    "id": "gt2025_c2_09",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Giao thức xử lý gói đầu tiên của một loại luồng và tạo bộ nhớ đệm tương ứng.",
      "B. Gói tin có nhiều định dạng khác nhau tùy theo loại giao thức mạng.",
      "C. CHƯƠNG 2: MÔ HÌNH THÔNG TIN QUẢN LÝ MẠNG 2.1.",
      "D. TỔNG QUAN CÁC PHƯƠNG PHÁP THU THẬP THÔNG TIN QUẢN LÝ MẠNG"
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: CHƯƠNG 2: MÔ HÌNH THÔNG TIN QUẢN LÝ MẠNG 2.1."
  },
  {
    "id": "gt2025_c2_10",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Một nút nguồn gửi các gói bao gồm địa chỉ nguồn và địa chỉ đích đến một nút đích.",
      "B. Phương pháp thu thập thông tin quản lý mạng máy tính 2.2.",
      "C. Các cơ chế phát hiện luồng phổ biến nhất dựa trên năm bộ giá trị bao gồm địa chỉ IP nguồn và đích, cổng nguồn và cổng đích cũng như các loại giao thức.",
      "D. Các tệp nhật ký không có định dạng tiêu chuẩn."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Phương pháp thu thập thông tin quản lý mạng máy tính 2.2."
  },
  {
    "id": "gt2025_c2_11",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Đa số dữ liệu trên mạng là không có ý nghĩa đối với công tác quản lý mạng.",
      "B. Thông tin dịch vụ mạng: các giao thức mạng như HTTP , FTP, TCP và một số chức năng mạng được xác định như yêu cầu DNS, SQL và phản hồi.",
      "C. CHƯƠNG 2: MÔ HÌNH THÔNG TIN QUẢN LÝ MẠNG 2.1.",
      "D. Trong mạng trao đổi gói, thông tin hiệu quả được phân chia và mã hóa thành các gói."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Đa số dữ liệu trên mạng là không có ý nghĩa đối với công tác quản lý mạng."
  },
  {
    "id": "gt2025_c2_12",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Xây dựng mô hình thu thập dữ liệu dựa trên gói",
      "B. Khi một gói khác đi vào bộ thu, các chính sách của nó như kiểm soát truy cập được kế thừa từ các gói trước trong cùng một luồng.",
      "C. Ví dụ, một số phương pháp dựa trên tiêu đề, phân loại các gói tin thành nhiều luồng theo địa chỉ IP, cổng và giao thức chứa trong tiêu đề.",
      "D. Một phần nhỏ dữ liệu chứa thông tin hữu ích và nhạy cảm cần được thu thập bảo vệ, phân tích và quản lý tốt."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Một phần nhỏ dữ liệu chứa thông tin hữu ích và nhạy cảm cần được thu thập bảo vệ, phân tích và quản lý tốt."
  },
  {
    "id": "gt2025_c2_13",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Gói thông thường bao gồm hai phần: tiêu đề gói (header) và tải trọng (data) của nó.",
      "B. Thông tin về hiệu suất mạng: mất gói, trễ thời gian, tiêu thụ băng thông, v.v.",
      "C. Mạng máy tính cũng phải gánh chịu thường xuyên các cuộc tấn công thông minh và các cuộc xâm nhập độc hại.",
      "D. Do đó, thu thập luồng tại các thiết bị lõi mạng (điển hình là router) là cơ chế thu thập dữ liệu phổ biến nhất hiện nay."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Mạng máy tính cũng phải gánh chịu thường xuyên các cuộc tấn công thông minh và các cuộc xâm nhập độc hại."
  },
  {
    "id": "gt2025_c2_14",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Một số công cụ bắt gói mạng thuận tiện được chọn để thu thập dữ liệu và phân tích thêm.",
      "B. Để phát hiện các cuộc tấn công này, một số dữ liệu mạng cần được thu thập để tìm ra các lỗ hổng mạng.",
      "C. Nhật ký có thể bao gồm nhật ký sự kiện và nhật ký tin nhắn.",
      "D. Gói thông thường bao gồm hai phần: tiêu đề gói (header) và tải trọng (data) của nó."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Để phát hiện các cuộc tấn công này, một số dữ liệu mạng cần được thu thập để tìm ra các lỗ hổng mạng."
  },
  {
    "id": "gt2025_c2_15",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Theo các lỗ hổng, quản trị viên mạng có thể thực hiện các hành động tương ứng",
      "B. Do đó, cơ chế thu thập dữ liệu dựa trên nhật ký được đề xuất trong SDN.",
      "C. Bắt gói là một phương pháp truyền thống để thu thập thông tin quản lý mạng.",
      "D. Trong nhiều phương pháp thu thập dữ liệu, phần đầu trở nên quan trọng để xác định và lọc các gói."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Theo các lỗ hổng, quản trị viên mạng có thể thực hiện các hành động tương ứng"
  },
  {
    "id": "gt2025_c2_16",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. LỢI ÍCH CỦA THU THẬP THÔNG TIN QUẢN LÝ MẠNG",
      "B. DiCAP dùng thiết bị phản chiếu và các nút chụp phân tán để xử lý lưu lượng mạng tốc độ cao.",
      "C. MÔ HÌNH THU THẬP DỮ LIỆU DỰA TRÊN GÓI",
      "D. Dự đoán các mối đe dọa mạng trong tương lai."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Dự đoán các mối đe dọa mạng trong tương lai."
  },
  {
    "id": "gt2025_c2_17",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Trái ngược với các thiết bị lõi, các máy chủ chỉ giám sát các luồng đi qua các máy chủ và thu thập các bản ghi luồng cho phù hợp.",
      "B. Khi một dịch vụ được bật, tệp nhật ký của dịch vụ đó sẽ được tạo.",
      "C. LỢI ÍCH CỦA THU THẬP THÔNG TIN QUẢN LÝ MẠNG",
      "D. Một nút nguồn gửi các gói bao gồm địa chỉ nguồn và địa chỉ đích đến một nút đích."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: LỢI ÍCH CỦA THU THẬP THÔNG TIN QUẢN LÝ MẠNG"
  },
  {
    "id": "gt2025_c2_18",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Theo các lỗ hổng, quản trị viên mạng có thể thực hiện các hành động tương ứng",
      "B. TỔNG QUAN CÁC PHƯƠNG PHÁP THU THẬP THÔNG TIN QUẢN LÝ MẠNG",
      "C. Xây dựng mô hình thu thập dữ liệu dựa trên luồng",
      "D. Trong nhiều phương pháp thu thập dữ liệu, phần đầu trở nên quan trọng để xác định và lọc các gói."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: TỔNG QUAN CÁC PHƯƠNG PHÁP THU THẬP THÔNG TIN QUẢN LÝ MẠNG"
  },
  {
    "id": "gt2025_c2_19",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Packet là một vật mang dữ liệu rất quan trọng trong các mạng dựa trên giao thức TCP / IP.",
      "B. NetFLow là một trong những giao thức chính để triển khai cơ chế thu thập dữ liệu luồng năm bộ giá trị.",
      "C. Trái ngược với các thiết bị lõi, các máy chủ chỉ giám sát các luồng đi qua các máy chủ và thu thập các bản ghi luồng cho phù hợp.",
      "D. Nhật ký được lưu trữ liên tục trong kho lưu trữ."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Packet là một vật mang dữ liệu rất quan trọng trong các mạng dựa trên giao thức TCP / IP."
  },
  {
    "id": "gt2025_c2_20",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Packet là một vật mang dữ liệu rất quan trọng trong các mạng dựa trên giao thức TCP / IP.",
      "B. Thông tin động: mức tiêu thụ CPU và mức sử dụng bộ nhớ, lưu lượng giao diện, v.v.",
      "C. Log tập trung: là quá trình tập trung, thu thập, phân tích các log cần thiết từ nhiều nguồn khác nhau về một nơi an toàn để thuận lợi cho việc phân tích và theo dõi hệ thống.",
      "D. Trong mạng trao đổi gói, thông tin hiệu quả được phân chia và mã hóa thành các gói."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Trong mạng trao đổi gói, thông tin hiệu quả được phân chia và mã hóa thành các gói."
  },
  {
    "id": "gt2025_c2_21",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Thông tin về hiệu suất mạng: mất gói, trễ thời gian, tiêu thụ băng thông, v.v.",
      "B. Gói tin có nhiều định dạng khác nhau tùy theo loại giao thức mạng.",
      "C. Một nút nguồn gửi các gói bao gồm địa chỉ nguồn và địa chỉ đích đến một nút đích.",
      "D. Khi một gói khác đi vào bộ thu, các chính sách của nó như kiểm soát truy cập được kế thừa từ các gói trước trong cùng một luồng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Một nút nguồn gửi các gói bao gồm địa chỉ nguồn và địa chỉ đích đến một nút đích."
  },
  {
    "id": "gt2025_c2_22",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Bắt gói là một phương pháp truyền thống để thu thập thông tin quản lý mạng.",
      "B. Khi đích nhận được các gói, quá trình giải mã và tổng hợp được thực thi để có được dữ liệu mong đợi.",
      "C. Theo các nguồn nhật ký, chúng bao gồm nhật ký hệ điều hành, nhật ký Web và nhật ký thiết bị.",
      "D. Trái ngược với các thiết bị lõi, các máy chủ chỉ giám sát các luồng đi qua các máy chủ và thu thập các bản ghi luồng cho phù hợp."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Khi đích nhận được các gói, quá trình giải mã và tổng hợp được thực thi để có được dữ liệu mong đợi."
  },
  {
    "id": "gt2025_c2_23",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Gói tin có nhiều định dạng khác nhau tùy theo loại giao thức mạng.",
      "B. Luồng là một tập hợp các gói có các đặc tính giống nhau đi qua một điểm quan sát cụ thể trong một khoảng thời gian.",
      "C. Xây dựng mô hình thu thập dữ liệu dựa trên luồng",
      "D. Để phát hiện các cuộc tấn công này, một số dữ liệu mạng cần được thu thập để tìm ra các lỗ hổng mạng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Gói tin có nhiều định dạng khác nhau tùy theo loại giao thức mạng."
  },
  {
    "id": "gt2025_c2_24",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Thông tin dịch vụ mạng: các giao thức mạng như HTTP , FTP, TCP và một số chức năng mạng được xác định như yêu cầu DNS, SQL và phản hồi.",
      "B. Đa số dữ liệu trên mạng là không có ý nghĩa đối với công tác quản lý mạng.",
      "C. Nhật ký sự kiện thường được sử dụng để thu thập dữ liệu.",
      "D. Gói thông thường bao gồm hai phần: tiêu đề gói (header) và tải trọng (data) của nó."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Gói thông thường bao gồm hai phần: tiêu đề gói (header) và tải trọng (data) của nó."
  },
  {
    "id": "gt2025_c2_25",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Nhật ký sự kiện ghi lại các dấu vết của người dùng, trạng thái sự kiện và các lỗi chẩn đoán nếu cần thiết.",
      "B. Có một số tính năng chung của nhật ký: thông tin cần ghi, ngày, giờ chính xác, người điều hành và hành động.",
      "C. Phần đầu đóng vai trò hướng dẫn gói tin truyền đi trong một mạng và đánh dấu thông tin nguồn của gói tin.",
      "D. Ví dụ, một số phương pháp dựa trên tiêu đề, phân loại các gói tin thành nhiều luồng theo địa chỉ IP, cổng và giao thức chứa trong tiêu đề."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Phần đầu đóng vai trò hướng dẫn gói tin truyền đi trong một mạng và đánh dấu thông tin nguồn của gói tin."
  },
  {
    "id": "gt2025_c2_26",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Nhật ký được lưu trữ liên tục trong kho lưu trữ.",
      "B. Trong nhiều phương pháp thu thập dữ liệu, phần đầu trở nên quan trọng để xác định và lọc các gói.",
      "C. Nhật ký SDN, đặc biệt là nhật ký bộ điều khiển, được tổ chức tốt hơn so với nhật ký trong các mạng khác.",
      "D. Mạng máy tính cũng phải gánh chịu thường xuyên các cuộc tấn công thông minh và các cuộc xâm nhập độc hại."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Trong nhiều phương pháp thu thập dữ liệu, phần đầu trở nên quan trọng để xác định và lọc các gói."
  },
  {
    "id": "gt2025_c2_27",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Ví dụ, một số phương pháp dựa trên tiêu đề, phân loại các gói tin thành nhiều luồng theo địa chỉ IP, cổng và giao thức chứa trong tiêu đề.",
      "B. Log local trên các máy được đẩy về Log Server bằng các giao thức đẩy log khác nhau.",
      "C. WBEM là tiêu chuẩn quản lý doanh nghiệp dựa trên web trong hệ thống quản lý mạng.",
      "D. Đây cũng là phương pháp được sử dụng phổ biến nhất để thu thập dữ liệu mạng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Ví dụ, một số phương pháp dựa trên tiêu đề, phân loại các gói tin thành nhiều luồng theo địa chỉ IP, cổng và giao thức chứa trong tiêu đề."
  },
  {
    "id": "gt2025_c2_28",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. CÁC TIÊU CHÍ ĐÁNH GIÁ HIỆU QUẢ CỦA CƠ CHẾ THU THẬP THÔNG TIN QUẢN LÝ MẠNG",
      "B. Các phương pháp thu thập dữ liệu chủ động thường đưa dữ liệu thử nghiệm vào lưu lượng và chờ phản hồi để đạt được mục đích đo chất lượng mạng.",
      "C. DiCAP dùng thiết bị phản chiếu và các nút chụp phân tán để xử lý lưu lượng mạng tốc độ cao.",
      "D. Tải trọng chứa dữ liệu được trao đổi giữa các bên giao tiếp, mặc dù một số trong số chúng có thể được mã hóa."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Tải trọng chứa dữ liệu được trao đổi giữa các bên giao tiếp, mặc dù một số trong số chúng có thể được mã hóa."
  },
  {
    "id": "gt2025_c2_29",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Log local trên các máy được đẩy về Log Server bằng các giao thức đẩy log khác nhau.",
      "B. Xây dựng mô hình thu thập dữ liệu dựa trên luồng",
      "C. Bắt gói là một phương pháp truyền thống để thu thập thông tin quản lý mạng.",
      "D. Packet là một vật mang dữ liệu rất quan trọng trong các mạng dựa trên giao thức TCP / IP."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Bắt gói là một phương pháp truyền thống để thu thập thông tin quản lý mạng."
  },
  {
    "id": "gt2025_c2_30",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Do đó, thu thập luồng tại các thiết bị lõi mạng (điển hình là router) là cơ chế thu thập dữ liệu phổ biến nhất hiện nay.",
      "B. Đây cũng là phương pháp được sử dụng phổ biến nhất để thu thập dữ liệu mạng.",
      "C. Trái ngược với các thiết bị lõi, các máy chủ chỉ giám sát các luồng đi qua các máy chủ và thu thập các bản ghi luồng cho phù hợp.",
      "D. Một nút nguồn gửi các gói bao gồm địa chỉ nguồn và địa chỉ đích đến một nút đích."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Đây cũng là phương pháp được sử dụng phổ biến nhất để thu thập dữ liệu mạng."
  },
  {
    "id": "gt2025_c2_31",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Ngày nay khối lượng mạng là áp đảo các bộ bắt gói, vì vậy đề xuất chuyển sang phương pháp lấy mẫu gói.",
      "B. Cơ chế lấy mẫu đơn giản trích xuất ngẫu nhiên các gói từ tất cả lưu lượng truy cập, trong khi lấy mẫu phân tầng sẽ phân loại các gói và loại bỏ một số gói theo nhóm.",
      "C. Để phát hiện các cuộc tấn công này, một số dữ liệu mạng cần được thu thập để tìm ra các lỗ hổng mạng.",
      "D. Khi một dịch vụ được bật, tệp nhật ký của dịch vụ đó sẽ được tạo."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Ngày nay khối lượng mạng là áp đảo các bộ bắt gói, vì vậy đề xuất chuyển sang phương pháp lấy mẫu gói."
  },
  {
    "id": "gt2025_c2_32",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Ví dụ, một số phương pháp dựa trên tiêu đề, phân loại các gói tin thành nhiều luồng theo địa chỉ IP, cổng và giao thức chứa trong tiêu đề.",
      "B. WireShark và TCPdump là hai ứng dụng kinh điển của chúng.",
      "C. Xây dựng mô hình thu thập dữ liệu dựa trên luồng",
      "D. Lấy mẫu đơn giản và lấy mẫu phân tầng là hai trường hợp của chúng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Lấy mẫu đơn giản và lấy mẫu phân tầng là hai trường hợp của chúng."
  },
  {
    "id": "gt2025_c2_33",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Logstash xử lý dữ liệu rồi gửi dữ liệu nhận được cho ElasticSearch để lưu trữ.",
      "B. Một số công cụ bắt gói mạng thuận tiện được chọn để thu thập dữ liệu và phân tích thêm.",
      "C. Cơ chế lấy mẫu đơn giản trích xuất ngẫu nhiên các gói từ tất cả lưu lượng truy cập, trong khi lấy mẫu phân tầng sẽ phân loại các gói và loại bỏ một số gói theo nhóm.",
      "D. Có một số tính năng chung của nhật ký: thông tin cần ghi, ngày, giờ chính xác, người điều hành và hành động."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Cơ chế lấy mẫu đơn giản trích xuất ngẫu nhiên các gói từ tất cả lưu lượng truy cập, trong khi lấy mẫu phân tầng sẽ phân loại các gói và loại bỏ một số gói theo nhóm."
  },
  {
    "id": "gt2025_c2_34",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Thông tin động: mức tiêu thụ CPU và mức sử dụng bộ nhớ, lưu lượng giao diện, v.v.",
      "B. Luồng là một tập hợp các gói có các đặc tính giống nhau đi qua một điểm quan sát cụ thể trong một khoảng thời gian.",
      "C. Packet là một vật mang dữ liệu rất quan trọng trong các mạng dựa trên giao thức TCP / IP.",
      "D. Thông tin tĩnh: thông số phần cứng và phần mềm, người dùng và quản trị viên, thông tin đăng ký, v.v."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Luồng là một tập hợp các gói có các đặc tính giống nhau đi qua một điểm quan sát cụ thể trong một khoảng thời gian."
  },
  {
    "id": "gt2025_c2_35",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Giám sát luồng mạng có thể xảy ra ở mọi vị trí của mạng.",
      "B. ElasticSearch là máy chủ lưu trữ và tìm kiếm dữ liệu trong ELK Stack.",
      "C. Ví dụ, một số phương pháp dựa trên tiêu đề, phân loại các gói tin thành nhiều luồng theo địa chỉ IP, cổng và giao thức chứa trong tiêu đề.",
      "D. Trong khi đó, dữ liệu liên quan đến quản lý và dữ liệu thống kê được tạo và tổng hợp tại kế hoạch kiểm soát cũng có thể được thu thập."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Giám sát luồng mạng có thể xảy ra ở mọi vị trí của mạng."
  },
  {
    "id": "gt2025_c2_36",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Trong nhiều phương pháp thu thập dữ liệu, phần đầu trở nên quan trọng để xác định và lọc các gói.",
      "B. Do đó, thu thập luồng tại các thiết bị lõi mạng (điển hình là router) là cơ chế thu thập dữ liệu phổ biến nhất hiện nay.",
      "C. Nhật ký tin nhắn bao gồm Trò chuyện chuyển tiếp qua Internet (IRC), Nhắn tin tức thì (IM), v.v., thường được nhà cung cấp dịch vụ mã hóa.",
      "D. Các thiết bị lõi mạng là các nút hiệu quả nhất cần được giám sát và kiểm soát vì các thiết bị này có thể thu được dữ liệu quan trọng về các mối đe dọa và tấn công mạng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Các thiết bị lõi mạng là các nút hiệu quả nhất cần được giám sát và kiểm soát vì các thiết bị này có thể thu được dữ liệu quan trọng về các mối đe dọa và tấn công mạng."
  },
  {
    "id": "gt2025_c2_37",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Thông tin động: mức tiêu thụ CPU và mức sử dụng bộ nhớ, lưu lượng giao diện, v.v.",
      "B. LỢI ÍCH CỦA THU THẬP THÔNG TIN QUẢN LÝ MẠNG",
      "C. Do đó, thu thập luồng tại các thiết bị lõi mạng (điển hình là router) là cơ chế thu thập dữ liệu phổ biến nhất hiện nay.",
      "D. Các phương pháp thu thập dữ liệu chủ động thường đưa dữ liệu thử nghiệm vào lưu lượng và chờ phản hồi để đạt được mục đích đo chất lượng mạng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Do đó, thu thập luồng tại các thiết bị lõi mạng (điển hình là router) là cơ chế thu thập dữ liệu phổ biến nhất hiện nay."
  },
  {
    "id": "gt2025_c2_38",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Trong khi đó, dữ liệu liên quan đến quản lý và dữ liệu thống kê được tạo và tổng hợp tại kế hoạch kiểm soát cũng có thể được thu thập.",
      "B. Thu thập luồng cũng tồn tại trong các nút và máy chủ biên của mạng.",
      "C. Các công cụ WireShark và TCPdump là các cơ chế bắt gói tin dựa trên phần mềm thụ động.",
      "D. Các cơ chế phát hiện luồng phổ biến nhất dựa trên năm bộ giá trị bao gồm địa chỉ IP nguồn và đích, cổng nguồn và cổng đích cũng như các loại giao thức."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Thu thập luồng cũng tồn tại trong các nút và máy chủ biên của mạng."
  },
  {
    "id": "gt2025_c2_39",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Trái ngược với các thiết bị lõi, các máy chủ chỉ giám sát các luồng đi qua các máy chủ và thu thập các bản ghi luồng cho phù hợp.",
      "B. Một phần nhỏ dữ liệu chứa thông tin hữu ích và nhạy cảm cần được thu thập bảo vệ, phân tích và quản lý tốt.",
      "C. Các phương pháp tiếp cận phổ biến nhất trong các quy trình này là đối sánh mẫu và phương pháp học máy học.",
      "D. Chúng dựa vào thư viện libpcap và bộ lọc gói Berkeley (BPF)."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Trái ngược với các thiết bị lõi, các máy chủ chỉ giám sát các luồng đi qua các máy chủ và thu thập các bản ghi luồng cho phù hợp."
  },
  {
    "id": "gt2025_c2_40",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Trái ngược với các thiết bị lõi, các máy chủ chỉ giám sát các luồng đi qua các máy chủ và thu thập các bản ghi luồng cho phù hợp.",
      "B. Log tập trung: là quá trình tập trung, thu thập, phân tích các log cần thiết từ nhiều nguồn khác nhau về một nơi an toàn để thuận lợi cho việc phân tích và theo dõi hệ thống.",
      "C. Đa số dữ liệu trên mạng là không có ý nghĩa đối với công tác quản lý mạng.",
      "D. Các cơ chế phát hiện luồng phổ biến nhất dựa trên năm bộ giá trị bao gồm địa chỉ IP nguồn và đích, cổng nguồn và cổng đích cũng như các loại giao thức."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Các cơ chế phát hiện luồng phổ biến nhất dựa trên năm bộ giá trị bao gồm địa chỉ IP nguồn và đích, cổng nguồn và cổng đích cũng như các loại giao thức."
  },
  {
    "id": "gt2025_c2_41",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Nhật ký sự kiện thường được sử dụng để thu thập dữ liệu.",
      "B. Phần đầu đóng vai trò hướng dẫn gói tin truyền đi trong một mạng và đánh dấu thông tin nguồn của gói tin.",
      "C. NetFLow là một trong những giao thức chính để triển khai cơ chế thu thập dữ liệu luồng năm bộ giá trị.",
      "D. ELK là hệ thống mã nguồn mở để tìm kiếm, phân tích và trực quan hóa log."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: NetFLow là một trong những giao thức chính để triển khai cơ chế thu thập dữ liệu luồng năm bộ giá trị."
  },
  {
    "id": "gt2025_c2_42",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Thu thập luồng cũng tồn tại trong các nút và máy chủ biên của mạng.",
      "B. Giao thức xử lý gói đầu tiên của một loại luồng và tạo bộ nhớ đệm tương ứng.",
      "C. Trong mạng trao đổi gói, thông tin hiệu quả được phân chia và mã hóa thành các gói.",
      "D. Các cơ chế thu thập dữ liệu thụ động thường giám sát lưu lượng mạng bằng các công cụ giám sát hoặc phần mềm hoặc phần cứng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Giao thức xử lý gói đầu tiên của một loại luồng và tạo bộ nhớ đệm tương ứng."
  },
  {
    "id": "gt2025_c2_43",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Khi một gói khác đi vào bộ thu, các chính sách của nó như kiểm soát truy cập được kế thừa từ các gói trước trong cùng một luồng.",
      "B. ElasticSearch là máy chủ lưu trữ và tìm kiếm dữ liệu trong ELK Stack.",
      "C. CHƯƠNG 2: MÔ HÌNH THÔNG TIN QUẢN LÝ MẠNG 2.1.",
      "D. Một nút nguồn gửi các gói bao gồm địa chỉ nguồn và địa chỉ đích đến một nút đích."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Khi một gói khác đi vào bộ thu, các chính sách của nó như kiểm soát truy cập được kế thừa từ các gói trước trong cùng một luồng."
  },
  {
    "id": "gt2025_c2_44",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Thu thập luồng cũng tồn tại trong các nút và máy chủ biên của mạng.",
      "B. Log tập trung: là quá trình tập trung, thu thập, phân tích các log cần thiết từ nhiều nguồn khác nhau về một nơi an toàn để thuận lợi cho việc phân tích và theo dõi hệ thống.",
      "C. Các công cụ WireShark và TCPdump là các cơ chế bắt gói tin dựa trên phần mềm thụ động.",
      "D. Cơ chế NetFLow đơn giản chỉ liên quan đến tiêu đề gói, nó không xem xét trọng tải gói."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Cơ chế NetFLow đơn giản chỉ liên quan đến tiêu đề gói, nó không xem xét trọng tải gói."
  },
  {
    "id": "gt2025_c2_45",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. WBEM là tiêu chuẩn quản lý doanh nghiệp dựa trên web trong hệ thống quản lý mạng.",
      "B. DPI là công nghệ kiểm tra gói tin sâu, nhận biết nội dung để xác định lưu lượng truy cập.",
      "C. Tệp nhật ký là một định dạng dữ liệu được sử dụng rộng rãi trong hệ thống ghi các sự kiện mạng.",
      "D. Phương pháp thu thập thông tin quản lý mạng máy tính 2.2."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Tệp nhật ký là một định dạng dữ liệu được sử dụng rộng rãi trong hệ thống ghi các sự kiện mạng."
  },
  {
    "id": "gt2025_c2_46",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Một phần nhỏ dữ liệu chứa thông tin hữu ích và nhạy cảm cần được thu thập bảo vệ, phân tích và quản lý tốt.",
      "B. Nhật ký có thể bao gồm nhật ký sự kiện và nhật ký tin nhắn.",
      "C. Lấy mẫu đơn giản và lấy mẫu phân tầng là hai trường hợp của chúng.",
      "D. Logstash xử lý dữ liệu rồi gửi dữ liệu nhận được cho ElasticSearch để lưu trữ."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Nhật ký có thể bao gồm nhật ký sự kiện và nhật ký tin nhắn."
  },
  {
    "id": "gt2025_c2_47",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Nhật ký sự kiện ghi lại các dấu vết của người dùng, trạng thái sự kiện và các lỗi chẩn đoán nếu cần thiết.",
      "B. Khi một dịch vụ được bật, tệp nhật ký của dịch vụ đó sẽ được tạo.",
      "C. CÁC TIÊU CHÍ ĐÁNH GIÁ HIỆU QUẢ CỦA CƠ CHẾ THU THẬP THÔNG TIN QUẢN LÝ MẠNG",
      "D. Cơ chế lấy mẫu đơn giản trích xuất ngẫu nhiên các gói từ tất cả lưu lượng truy cập, trong khi lấy mẫu phân tầng sẽ phân loại các gói và loại bỏ một số gói theo nhóm."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Nhật ký sự kiện ghi lại các dấu vết của người dùng, trạng thái sự kiện và các lỗi chẩn đoán nếu cần thiết."
  },
  {
    "id": "gt2025_c2_48",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. ELK là hệ thống mã nguồn mở để tìm kiếm, phân tích và trực quan hóa log.",
      "B. Log local trên các máy được đẩy về Log Server bằng các giao thức đẩy log khác nhau.",
      "C. DPI là công nghệ kiểm tra gói tin sâu, nhận biết nội dung để xác định lưu lượng truy cập.",
      "D. Khi một dịch vụ được bật, tệp nhật ký của dịch vụ đó sẽ được tạo."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Khi một dịch vụ được bật, tệp nhật ký của dịch vụ đó sẽ được tạo."
  },
  {
    "id": "gt2025_c2_49",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 2: Mô hình thông tin quản lý mạng?",
    "options": [
      "A. Nhật ký SDN, đặc biệt là nhật ký bộ điều khiển, được tổ chức tốt hơn so với nhật ký trong các mạng khác.",
      "B. Có thể dùng các lệnh file, tail để xem log.",
      "C. Nhật ký tin nhắn bao gồm Trò chuyện chuyển tiếp qua Internet (IRC), Nhắn tin tức thì (IM), v.v., thường được nhà cung cấp dịch vụ mã hóa.",
      "D. Trong mạng trao đổi gói, thông tin hiệu quả được phân chia và mã hóa thành các gói."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Nhật ký tin nhắn bao gồm Trò chuyện chuyển tiếp qua Internet (IRC), Nhắn tin tức thì (IM), v.v., thường được nhà cung cấp dịch vụ mã hóa."
  },
  {
    "id": "gt2025_c2_50",
    "chapter": 2,
    "chapterName": "Chương 2: Mô hình thông tin quản lý mạng",
    "question": "Khi ôn Chương 2: Mô hình thông tin quản lý mạng, nhận định nào đúng nhất?",
    "options": [
      "A. Mạng máy tính cũng phải gánh chịu thường xuyên các cuộc tấn công thông minh và các cuộc xâm nhập độc hại.",
      "B. Nhật ký sự kiện thường được sử dụng để thu thập dữ liệu.",
      "C. Các phương pháp tiếp cận phổ biến nhất trong các quy trình này là đối sánh mẫu và phương pháp học máy học.",
      "D. Gói thông thường bao gồm hai phần: tiêu đề gói (header) và tải trọng (data) của nó."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Nhật ký sự kiện thường được sử dụng để thu thập dữ liệu."
  },
  {
    "id": "gt2025_c3_01",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Quản lý cấu hình mạng theo dõi và thu thập thông tin cấu hình hệ thống của mạng, phần cứng và phần mềm.",
      "B. Ví dụ với mạng sử dụng cáp đồng trục 50 thì khoảng cách tối đa là 2.8 km, cho dù sử dụng thêm Repeater.",
      "C. Mô hình xử lý mạng: Client – Server, Peer – to – Peer",
      "D. Ví dụ: mạng của bạn sử dụng giao thức IP và mạng của ai đó sử dụng giao thức IPX, Novell, DECnet, SNA... thì Gateway sẽ chuyển đổi từ loại giao thức này sang loại khác."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Quản lý cấu hình mạng theo dõi và thu thập thông tin cấu hình hệ thống của mạng, phần cứng và phần mềm."
  },
  {
    "id": "gt2025_c3_02",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. BLUETOOTH: Bluetooth 2.1, Bluetooth 3.1, Bluetooth 3.0 + HS (High Speed), Bluetooth 4.0",
      "B. Hai loại mật khẩu truy cập vào enable mode của router: Router(config)#enable secret vip ¬ mật khẩu là vip Router(config)#enable password cisco ¬ mật khẩu là cisco",
      "C. Bridge biên dịch dùng để nối hai mạng LAN có giao thức khác nhau nó có khả năng chuyển một gói tin thuộc mạng này sang gói tin thuộc mạng kia, cùng kích thước.",
      "D. Quản lý thiết bị mạng gồm môi trường truyền, dây nối, thiết bị, số lượng thiết bị và mô hình mạng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Quản lý thiết bị mạng gồm môi trường truyền, dây nối, thiết bị, số lượng thiết bị và mô hình mạng."
  },
  {
    "id": "gt2025_c3_03",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Repeater dùng để nối 2 mạng giống nhau, đoạn mạng.",
      "B. CẤU HÌNH HOSTNAME VÀ PASSWORD CHO ROUTER",
      "C. Bridge vận chuyển nối hai mạng LAN có giao thức tầng liên kết dữ liệu giống nhau.",
      "D. Khi một trạm muốn gửi gói tin qua Router thì nó phải gửi gói tin với địa chỉ trực tiếp của Router và khi gói tin đến Router thì Router mới xử lý và gửi tiếp."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Bridge vận chuyển nối hai mạng LAN có giao thức tầng liên kết dữ liệu giống nhau."
  },
  {
    "id": "gt2025_c3_04",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Là thiết bị đơn giản nhất trong các thiết bị liên kết mạng, hoạt động tầng vật lý của mô hình OSI.",
      "B. Bridge biên dịch nối hai mạng LAN có giao thức khác nhau và chuyển gói tin giữa hai mạng.",
      "C. Bridge vận chuyển dùng để nối hai mạng LAN có giao thức ở tầng LKDL giống nhau, nhưng có thể có loại dây nối khác nhau.",
      "D. Mô hình xử lý mạng: Client – Server, Peer – to – Peer"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Bridge biên dịch nối hai mạng LAN có giao thức khác nhau và chuyển gói tin giữa hai mạng."
  },
  {
    "id": "gt2025_c3_05",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Switch chuyển các khung dữ liệu từ nguồn đến đích và xây dựng bảng switch.",
      "B. Làm cho tín hiệu trở nên tốt hơn, ít nhạy cảm với lỗi do vậy khoảng cách mạng có thể tăng lên.",
      "C. Là Hub chủ động, nhưng có bộ vi xử lý và bộ nhớ vì vậy nó có thể hoạt động như bộ tìm đường hay một cầu nối.",
      "D. Một số giao thức hoạt động chính của Router"
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Switch chuyển các khung dữ liệu từ nguồn đến đích và xây dựng bảng switch."
  },
  {
    "id": "gt2025_c3_06",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Nó cũng sẽ kiểm soát bất kỳ phần mềm hỗ trợ nào đã được sử dụng trong quá trình phát triển.",
      "B. Các tài nguyên mạng cũng được quản lý tập trung và cấp quyền hạn cho từng người dùng.",
      "C. Router có địa chỉ nên nó nhận và xử lý các gói tin gửi đến nó mà thôi.",
      "D. Router nhận, xử lý và chuyển tiếp gói tin dựa trên bảng định tuyến để chọn đường tối ưu."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Router nhận, xử lý và chuyển tiếp gói tin dựa trên bảng định tuyến để chọn đường tối ưu."
  },
  {
    "id": "gt2025_c3_07",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Việc sử dụng Repeater làm tăng thêm chiều dài của mạng.",
      "B. Hub bị động (Passive Hub) : Không chứa các linh kiện điện tử và cũng không xử lý các tín hiệu dữ liệu, chức năng duy nhất là tổ hợp các tín hiệu từ một số đoạn cáp mạng.",
      "C. SolarWinds hỗ trợ nhiều nhà cung cấp, tự động hóa tác vụ lặp lại và phục hồi sự cố nhanh.",
      "D. Ở chế độ mặc định, mật khẩu ở dạng không mã hóa(clear-text) trong file cấu hình; Lệnh enable secret password sẽ mã hóa các mật khẩu hiện có của router."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: SolarWinds hỗ trợ nhiều nhà cung cấp, tự động hóa tác vụ lặp lại và phục hồi sự cố nhanh."
  },
  {
    "id": "gt2025_c3_08",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Chuyển các khung dữ liệu từ nguồn đến đích, và xây dựng các bảng Switch.",
      "B. Tích hợp National Vulnerability Database giúp truy cập CVE hiện tại và phát hiện sớm lỗ hổng.",
      "C. Lúc đó trong hệ thống có các máy tính chuyên dụng làm nhiệm vụ cung cấp các dịch vụ và quản lý các máy trạm.",
      "D. Hai loại mật khẩu truy cập vào enable mode của router: Router(config)#enable secret vip ¬ mật khẩu là vip Router(config)#enable password cisco ¬ mật khẩu là cisco"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Tích hợp National Vulnerability Database giúp truy cập CVE hiện tại và phát hiện sớm lỗ hổng."
  },
  {
    "id": "gt2025_c3_09",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Khái niệm về quản lý cấu hình mạng máy tính 3.2.",
      "B. Quản lý thiết bị mạng gồm môi trường truyền, dây nối, thiết bị, số lượng thiết bị và mô hình mạng.",
      "C. Peer-to-Peer: mạng có cấu trúc và mạng không có cấu trúc.",
      "D. Cáp đồng trục: cáp đồng trục gầy, cáp đồng trục béo"
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Khái niệm về quản lý cấu hình mạng máy tính 3.2."
  },
  {
    "id": "gt2025_c3_10",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Việc sử dụng Repeater không thay đổi nội dung các tín hiện đi qua nên nó chỉ được dùng để nối hai mạng có cùng giao thức truyền thông.",
      "B. WIFI: 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac, 802.11ad",
      "C. Ethernet: 10Base2, 10Base5, 10BaseT, 100BaseT, Gigabit Ethernet",
      "D. KHÁI NIỆM VỀ QUẢN LÝ CẤU HÌNH MẠNG MÁY TÍNH"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: KHÁI NIỆM VỀ QUẢN LÝ CẤU HÌNH MẠNG MÁY TÍNH"
  },
  {
    "id": "gt2025_c3_11",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Ở chế độ mặc định, mật khẩu ở dạng không mã hóa(clear-text) trong file cấu hình; Lệnh enable secret password sẽ mã hóa các mật khẩu hiện có của router.",
      "B. Repeater loại bỏ các tín hiệu méo, nhiễu, khuếch đại tín hiệu đã bị suy hao.",
      "C. Network Configuration Management: quản lý cấu hình mạng máy tính",
      "D. Nó cũng sẽ kiểm soát bất kỳ phần mềm hỗ trợ nào đã được sử dụng trong quá trình phát triển."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Network Configuration Management: quản lý cấu hình mạng máy tính"
  },
  {
    "id": "gt2025_c3_12",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Switch chuyển các khung dữ liệu từ nguồn đến đích và xây dựng bảng switch.",
      "B. Lĩnh vực này lo việc theo dõi và thu thập thông tin cấu hình hệ thống của mạng, của phần cứng và cả phần mềm.",
      "C. Kiến trúc: hình tuyến, hình sao, hình vòng, hình lưới, kết hợp star-bus, kết hợp star-ring",
      "D. WIFI: 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac, 802.11ad"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Lĩnh vực này lo việc theo dõi và thu thập thông tin cấu hình hệ thống của mạng, của phần cứng và cả phần mềm."
  },
  {
    "id": "gt2025_c3_13",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Thông tin thu thập được thường được lưu trữ vào cơ sở dữ liệu để sao cho dễ dàng truy cập và phân tích.",
      "B. Việc sử dụng Repeater không thay đổi nội dung các tín hiện đi qua nên nó chỉ được dùng để nối hai mạng có cùng giao thức truyền thông.",
      "C. Tích hợp National Vulnerability Database giúp truy cập CVE hiện tại và phát hiện sớm lỗ hổng.",
      "D. Hub bị động (Passive Hub) : Không chứa các linh kiện điện tử và cũng không xử lý các tín hiệu dữ liệu, chức năng duy nhất là tổ hợp các tín hiệu từ một số đoạn cáp mạng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Thông tin thu thập được thường được lưu trữ vào cơ sở dữ liệu để sao cho dễ dàng truy cập và phân tích."
  },
  {
    "id": "gt2025_c3_14",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Kiến trúc: hình tuyến, hình sao, hình vòng, hình lưới, kết hợp star-bus, kết hợp star-ring",
      "B. Domain: việc quản lý và chứng thực người dùng mạng tập trung tại máy tính Primary Domain Controller.",
      "C. Là thiết bị đơn giản nhất trong các thiết bị liên kết mạng, hoạt động tầng vật lý của mô hình OSI.",
      "D. Quản lý thiết bị mạng: quản lý môi trường truyền, dây nối và các thiết bị mạng, số lượng thiết bị, mô hình mạng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Quản lý thiết bị mạng: quản lý môi trường truyền, dây nối và các thiết bị mạng, số lượng thiết bị, mô hình mạng."
  },
  {
    "id": "gt2025_c3_15",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Hub chủ động (Active Hub) : có các linh kiện điện tử có thể khuyếch đại và xử lý các tín hiệu.",
      "B. Quản lý thiết bị mạng gồm môi trường truyền, dây nối, thiết bị, số lượng thiết bị và mô hình mạng.",
      "C. Quản lý cấu hình thiết bị mạng: tìm tải hệ điều hành thiết bị và quản lý tập tin cấu hình thiết bị mạng.",
      "D. Nó có thể cho phép các gói tin tìm đường rất nhanh trên các cổng của nó, các gói tin được định tuyến."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Quản lý cấu hình thiết bị mạng: tìm tải hệ điều hành thiết bị và quản lý tập tin cấu hình thiết bị mạng."
  },
  {
    "id": "gt2025_c3_16",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Việc sử dụng Repeater làm tăng thêm chiều dài của mạng.",
      "B. Quản lý cấu hình phần mềm: hệ thống quản lý và kiểm soát tất cả các thay đổi được thực hiện đối với phần mềm trong quá trình phát triển và bảo trì.",
      "C. Repeater điện quang: liên kết với một đầu cáp quang và một đầu là cáp điện.",
      "D. Bridge biên dịch dùng để nối hai mạng LAN có giao thức khác nhau nó có khả năng chuyển một gói tin thuộc mạng này sang gói tin thuộc mạng kia, cùng kích thước."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Quản lý cấu hình phần mềm: hệ thống quản lý và kiểm soát tất cả các thay đổi được thực hiện đối với phần mềm trong quá trình phát triển và bảo trì."
  },
  {
    "id": "gt2025_c3_17",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Nó cũng sẽ kiểm soát bất kỳ phần mềm hỗ trợ nào đã được sử dụng trong quá trình phát triển.",
      "B. Cập nhật bảng dựa trên các Router gần đó và các mạng trong liên mạng nhờ thuật toán xác định trước.",
      "C. Nó có thể cho phép các gói tin tìm đường rất nhanh trên các cổng của nó, các gói tin được định tuyến.",
      "D. Domain controller là một Server quản lý tất cả các khía cạnh bảo mật của Domain."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Nó cũng sẽ kiểm soát bất kỳ phần mềm hỗ trợ nào đã được sử dụng trong quá trình phát triển."
  },
  {
    "id": "gt2025_c3_18",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. WIFI: 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac, 802.11ad",
      "B. Repeater nhận được một tín hiệu từ một phía của mạng thì nó sẽ phát tiếp vào phía kia của mạng.",
      "C. Hub chủ động (Active Hub) : có các linh kiện điện tử có thể khuyếch đại và xử lý các tín hiệu.",
      "D. Sơ đồ mạng: Sơ đồ logic, sơ đồ vật lý, sơ đồ địa chỉ"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Sơ đồ mạng: Sơ đồ logic, sơ đồ vật lý, sơ đồ địa chỉ"
  },
  {
    "id": "gt2025_c3_19",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Ethernet: 10Base2, 10Base5, 10BaseT, 100BaseT, Gigabit Ethernet",
      "B. Hiện nay có hai loại Bridge đang được sử dụng là Bridge vận chuyển và Bridge biên dịch.",
      "C. Môi trường truyền dẫn: cáp mạng, vô tuyến.",
      "D. Router có địa chỉ nên nó nhận và xử lý các gói tin gửi đến nó mà thôi."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Môi trường truyền dẫn: cáp mạng, vô tuyến."
  },
  {
    "id": "gt2025_c3_20",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Tích hợp National Vulnerability Database giúp truy cập CVE hiện tại và phát hiện sớm lỗ hổng.",
      "B. Mô hình xử lý mạng: Client – Server, Peer – to – Peer",
      "C. Repeater điện có thể làm tăng khoảng cách mạng, nhưng vẫn bị hạn chế do độ trễ của tín hiệu.",
      "D. Hub: thiết bị trung tâm mạng hình sao"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Mô hình xử lý mạng: Client – Server, Peer – to – Peer"
  },
  {
    "id": "gt2025_c3_21",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Mô hình quản lý mạng: workgroup, domain",
      "B. Client – Server: các máy chủ và dịch vụ cung cấp",
      "C. Repeater điện: hai phía là tín hiệu điện",
      "D. SolarWinds hỗ trợ nhiều nhà cung cấp, tự động hóa tác vụ lặp lại và phục hồi sự cố nhanh."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Mô hình quản lý mạng: workgroup, domain"
  },
  {
    "id": "gt2025_c3_22",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Ở chế độ mặc định, mật khẩu ở dạng không mã hóa(clear-text) trong file cấu hình; Lệnh enable secret password sẽ mã hóa các mật khẩu hiện có của router.",
      "B. Chuyển các khung dữ liệu từ nguồn đến đích, và xây dựng các bảng Switch.",
      "C. Bridge vận chuyển nối hai mạng LAN có giao thức tầng liên kết dữ liệu giống nhau.",
      "D. Kiến trúc: hình tuyến, hình sao, hình vòng, hình lưới, kết hợp star-bus, kết hợp star-ring"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Kiến trúc: hình tuyến, hình sao, hình vòng, hình lưới, kết hợp star-bus, kết hợp star-ring"
  },
  {
    "id": "gt2025_c3_23",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Chuyển các khung dữ liệu từ nguồn đến đích, và xây dựng các bảng Switch.",
      "B. Peer-to-Peer: mạng có cấu trúc và mạng không có cấu trúc.",
      "C. Ethernet: 10Base2, 10Base5, 10BaseT, 100BaseT, Gigabit Ethernet",
      "D. Bridge vận chuyển nối hai mạng LAN có giao thức tầng liên kết dữ liệu giống nhau."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Ethernet: 10Base2, 10Base5, 10BaseT, 100BaseT, Gigabit Ethernet"
  },
  {
    "id": "gt2025_c3_24",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Nó có thể cho phép các gói tin tìm đường rất nhanh trên các cổng của nó, các gói tin được định tuyến.",
      "B. Cáp đồng trục: cáp đồng trục gầy, cáp đồng trục béo",
      "C. ZIGBEE: một công nghệ hoạt động trong phạm vi hẹp, tiêu thụ ít năng lượng để phục vụ việc kết nối và quản lý các cảm biến – sensor.",
      "D. CẤU HÌNH HOSTNAME VÀ PASSWORD CHO ROUTER"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Cáp đồng trục: cáp đồng trục gầy, cáp đồng trục béo"
  },
  {
    "id": "gt2025_c3_25",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. WIFI: 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac, 802.11ad",
      "B. Mật khẩu truy cập vào User mode của Router",
      "C. Lĩnh vực này lo việc theo dõi và thu thập thông tin cấu hình hệ thống của mạng, của phần cứng và cả phần mềm.",
      "D. RIP (Routing Information Protocol): sử dụng SPX/IPX và TCP/IP, RIP hoạt động theo phương thức véc tơ khoảng cách."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: WIFI: 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac, 802.11ad"
  },
  {
    "id": "gt2025_c3_26",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Hiện nay có nhiều loại switch có khả năng hoạt động ở tầng mạng.",
      "B. Việc sử dụng Repeater làm tăng thêm chiều dài của mạng.",
      "C. OSPF (Open Shortest Path First): là một phần của TCP/IP với phương thức trạng thái tĩnh, trong đó có xét tới ưu tiên, giá đường truyền, mật độ truyền thông...",
      "D. BLUETOOTH: Bluetooth 2.1, Bluetooth 3.1, Bluetooth 3.0 + HS (High Speed), Bluetooth 4.0"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: BLUETOOTH: Bluetooth 2.1, Bluetooth 3.1, Bluetooth 3.0 + HS (High Speed), Bluetooth 4.0"
  },
  {
    "id": "gt2025_c3_27",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Các tài nguyên mạng cũng được quản lý tập trung và cấp quyền hạn cho từng người dùng.",
      "B. Là Hub chủ động, nhưng có bộ vi xử lý và bộ nhớ vì vậy nó có thể hoạt động như bộ tìm đường hay một cầu nối.",
      "C. ZIGBEE: một công nghệ hoạt động trong phạm vi hẹp, tiêu thụ ít năng lượng để phục vụ việc kết nối và quản lý các cảm biến – sensor.",
      "D. Bridge biên dịch nối hai mạng LAN có giao thức khác nhau và chuyển gói tin giữa hai mạng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: ZIGBEE: một công nghệ hoạt động trong phạm vi hẹp, tiêu thụ ít năng lượng để phục vụ việc kết nối và quản lý các cảm biến – sensor."
  },
  {
    "id": "gt2025_c3_28",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Kiến trúc: hình tuyến, hình sao, hình vòng, hình lưới, kết hợp star-bus, kết hợp star-ring",
      "B. Client – Server: các máy chủ và dịch vụ cung cấp",
      "C. Repeater điện: hai phía là tín hiệu điện",
      "D. Hub: thiết bị trung tâm mạng hình sao"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Client – Server: các máy chủ và dịch vụ cung cấp"
  },
  {
    "id": "gt2025_c3_29",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Peer-to-Peer: mạng có cấu trúc và mạng không có cấu trúc.",
      "B. Ví dụ với mạng sử dụng cáp đồng trục 50 thì khoảng cách tối đa là 2.8 km, cho dù sử dụng thêm Repeater.",
      "C. Quản lý thiết bị mạng: quản lý môi trường truyền, dây nối và các thiết bị mạng, số lượng thiết bị, mô hình mạng.",
      "D. Để chọn đường tối ưu cho các gói tin Router có một bảng định tuyến."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Peer-to-Peer: mạng có cấu trúc và mạng không có cấu trúc."
  },
  {
    "id": "gt2025_c3_30",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Thông tin thu thập được thường được lưu trữ vào cơ sở dữ liệu để sao cho dễ dàng truy cập và phân tích.",
      "B. Repeater điện: hai phía là tín hiệu điện",
      "C. Sơ đồ mạng: Sơ đồ logic, sơ đồ vật lý, sơ đồ địa chỉ",
      "D. Workgroup: Đó là một nhóm logic các máy tính mà tất cả chúng có cùng tên nhóm."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Workgroup: Đó là một nhóm logic các máy tính mà tất cả chúng có cùng tên nhóm."
  },
  {
    "id": "gt2025_c3_31",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Ví dụ: mạng của bạn sử dụng giao thức IP và mạng của ai đó sử dụng giao thức IPX, Novell, DECnet, SNA... thì Gateway sẽ chuyển đổi từ loại giao thức này sang loại khác.",
      "B. Gateway dùng để kết nối các mạng không thuần nhất chẳng hạn như các mạng LAN, WAN, interne và điện thoại; việc chuyển đổi thực hiện trên cả 7 tầng.",
      "C. Ở một mạng cục bộ LAN có thể có nhiều nhóm làm việc Workgroup khác nhau cùng kết nối.",
      "D. Lúc đó trong hệ thống có các máy tính chuyên dụng làm nhiệm vụ cung cấp các dịch vụ và quản lý các máy trạm."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Ở một mạng cục bộ LAN có thể có nhiều nhóm làm việc Workgroup khác nhau cùng kết nối."
  },
  {
    "id": "gt2025_c3_32",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Ethernet: 10Base2, 10Base5, 10BaseT, 100BaseT, Gigabit Ethernet",
      "B. Các máy tính có quyền hạn ngang nhau và không có các máy tính chuyên dụng làm nhiệm vụ cung cấp dịch vụ hay quản lý.",
      "C. Kiến trúc: hình tuyến, hình sao, hình vòng, hình lưới, kết hợp star-bus, kết hợp star-ring",
      "D. Bridge vận chuyển nối hai mạng LAN có giao thức tầng liên kết dữ liệu giống nhau."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Các máy tính có quyền hạn ngang nhau và không có các máy tính chuyên dụng làm nhiệm vụ cung cấp dịch vụ hay quản lý."
  },
  {
    "id": "gt2025_c3_33",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Domain: việc quản lý và chứng thực người dùng mạng tập trung tại máy tính Primary Domain Controller.",
      "B. Peer-to-Peer: mạng có cấu trúc và mạng không có cấu trúc.",
      "C. Cấu hình hostname và password cho router",
      "D. Chuyển các khung dữ liệu từ nguồn đến đích, và xây dựng các bảng Switch."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Domain: việc quản lý và chứng thực người dùng mạng tập trung tại máy tính Primary Domain Controller."
  },
  {
    "id": "gt2025_c3_34",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Ở một mạng cục bộ LAN có thể có nhiều nhóm làm việc Workgroup khác nhau cùng kết nối.",
      "B. Môi trường truyền dẫn: cáp mạng, vô tuyến.",
      "C. Repeater: thiết bị khuếch đại tín hiệu",
      "D. Domain controller là một Server quản lý tất cả các khía cạnh bảo mật của Domain."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Domain controller là một Server quản lý tất cả các khía cạnh bảo mật của Domain."
  },
  {
    "id": "gt2025_c3_35",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Giá thành cao hơn nhiều Hub bị động.",
      "B. Bridge biên dịch nối hai mạng LAN có giao thức khác nhau và chuyển gói tin giữa hai mạng.",
      "C. Các tài nguyên mạng cũng được quản lý tập trung và cấp quyền hạn cho từng người dùng.",
      "D. Quản lý cấu hình phần mềm: hệ thống quản lý và kiểm soát tất cả các thay đổi được thực hiện đối với phần mềm trong quá trình phát triển và bảo trì."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Các tài nguyên mạng cũng được quản lý tập trung và cấp quyền hạn cho từng người dùng."
  },
  {
    "id": "gt2025_c3_36",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Bridge vận chuyển dùng để nối hai mạng LAN có giao thức ở tầng LKDL giống nhau, nhưng có thể có loại dây nối khác nhau.",
      "B. Lúc đó trong hệ thống có các máy tính chuyên dụng làm nhiệm vụ cung cấp các dịch vụ và quản lý các máy trạm.",
      "C. Ở chế độ mặc định, mật khẩu ở dạng không mã hóa(clear-text) trong file cấu hình; Lệnh enable secret password sẽ mã hóa các mật khẩu hiện có của router.",
      "D. OSPF (Open Shortest Path First): là một phần của TCP/IP với phương thức trạng thái tĩnh, trong đó có xét tới ưu tiên, giá đường truyền, mật độ truyền thông..."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Lúc đó trong hệ thống có các máy tính chuyên dụng làm nhiệm vụ cung cấp các dịch vụ và quản lý các máy trạm."
  },
  {
    "id": "gt2025_c3_37",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Repeater: thiết bị khuếch đại tín hiệu",
      "B. Cập nhật bảng dựa trên các Router gần đó và các mạng trong liên mạng nhờ thuật toán xác định trước.",
      "C. Repeater nhận được một tín hiệu từ một phía của mạng thì nó sẽ phát tiếp vào phía kia của mạng.",
      "D. Làm cho tín hiệu trở nên tốt hơn, ít nhạy cảm với lỗi do vậy khoảng cách mạng có thể tăng lên."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Repeater: thiết bị khuếch đại tín hiệu"
  },
  {
    "id": "gt2025_c3_38",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Repeater điện có thể làm tăng khoảng cách mạng, nhưng vẫn bị hạn chế do độ trễ của tín hiệu.",
      "B. Ở một mạng cục bộ LAN có thể có nhiều nhóm làm việc Workgroup khác nhau cùng kết nối.",
      "C. Ethernet: 10Base2, 10Base5, 10BaseT, 100BaseT, Gigabit Ethernet",
      "D. Hub: thiết bị trung tâm mạng hình sao"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Hub: thiết bị trung tâm mạng hình sao"
  },
  {
    "id": "gt2025_c3_39",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Repeater: thiết bị khuếch đại tín hiệu",
      "B. Bridge vận chuyển dùng để nối hai mạng LAN có giao thức ở tầng LKDL giống nhau, nhưng có thể có loại dây nối khác nhau.",
      "C. Switch: thiết bị chuyển mạch mạng hình sao",
      "D. Bridge biên dịch nối hai mạng LAN có giao thức khác nhau và chuyển gói tin giữa hai mạng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Switch: thiết bị chuyển mạch mạng hình sao"
  },
  {
    "id": "gt2025_c3_40",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Router nhận, xử lý và chuyển tiếp gói tin dựa trên bảng định tuyến để chọn đường tối ưu.",
      "B. Router: thiết bị định tuyến mạng WAN",
      "C. Client – Server: các máy chủ và dịch vụ cung cấp",
      "D. Quản lý thiết bị mạng gồm môi trường truyền, dây nối, thiết bị, số lượng thiết bị và mô hình mạng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Router: thiết bị định tuyến mạng WAN"
  },
  {
    "id": "gt2025_c3_41",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Là thiết bị đơn giản nhất trong các thiết bị liên kết mạng, hoạt động tầng vật lý của mô hình OSI.",
      "B. Lĩnh vực này lo việc theo dõi và thu thập thông tin cấu hình hệ thống của mạng, của phần cứng và cả phần mềm.",
      "C. RIP (Routing Information Protocol): sử dụng SPX/IPX và TCP/IP, RIP hoạt động theo phương thức véc tơ khoảng cách.",
      "D. Ví dụ: mạng của bạn sử dụng giao thức IP và mạng của ai đó sử dụng giao thức IPX, Novell, DECnet, SNA... thì Gateway sẽ chuyển đổi từ loại giao thức này sang loại khác."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Là thiết bị đơn giản nhất trong các thiết bị liên kết mạng, hoạt động tầng vật lý của mô hình OSI."
  },
  {
    "id": "gt2025_c3_42",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Là thiết bị đơn giản nhất trong các thiết bị liên kết mạng, hoạt động tầng vật lý của mô hình OSI.",
      "B. Lĩnh vực này lo việc theo dõi và thu thập thông tin cấu hình hệ thống của mạng, của phần cứng và cả phần mềm.",
      "C. Repeater nhận được một tín hiệu từ một phía của mạng thì nó sẽ phát tiếp vào phía kia của mạng.",
      "D. Repeater dùng để nối 2 mạng giống nhau, đoạn mạng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Repeater dùng để nối 2 mạng giống nhau, đoạn mạng."
  },
  {
    "id": "gt2025_c3_43",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Việc sử dụng Repeater không thay đổi nội dung các tín hiện đi qua nên nó chỉ được dùng để nối hai mạng có cùng giao thức truyền thông.",
      "B. Hub bị động (Passive Hub) : Không chứa các linh kiện điện tử và cũng không xử lý các tín hiệu dữ liệu, chức năng duy nhất là tổ hợp các tín hiệu từ một số đoạn cáp mạng.",
      "C. Repeater nhận được một tín hiệu từ một phía của mạng thì nó sẽ phát tiếp vào phía kia của mạng.",
      "D. Router nhận, xử lý và chuyển tiếp gói tin dựa trên bảng định tuyến để chọn đường tối ưu."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Repeater nhận được một tín hiệu từ một phía của mạng thì nó sẽ phát tiếp vào phía kia của mạng."
  },
  {
    "id": "gt2025_c3_44",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Quản lý thiết bị mạng gồm môi trường truyền, dây nối, thiết bị, số lượng thiết bị và mô hình mạng.",
      "B. Repeater loại bỏ các tín hiệu méo, nhiễu, khuếch đại tín hiệu đã bị suy hao.",
      "C. Cáp đồng trục: cáp đồng trục gầy, cáp đồng trục béo",
      "D. Mật khẩu truy cập vào User mode của Router"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Repeater loại bỏ các tín hiệu méo, nhiễu, khuếch đại tín hiệu đã bị suy hao."
  },
  {
    "id": "gt2025_c3_45",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Việc sử dụng Repeater làm tăng thêm chiều dài của mạng.",
      "B. Hub: thiết bị trung tâm mạng hình sao",
      "C. Việc sử dụng Repeater không thay đổi nội dung các tín hiện đi qua nên nó chỉ được dùng để nối hai mạng có cùng giao thức truyền thông.",
      "D. Bridge vận chuyển nối hai mạng LAN có giao thức tầng liên kết dữ liệu giống nhau."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Việc sử dụng Repeater làm tăng thêm chiều dài của mạng."
  },
  {
    "id": "gt2025_c3_46",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Cáp đồng trục: cáp đồng trục gầy, cáp đồng trục béo",
      "B. Domain: việc quản lý và chứng thực người dùng mạng tập trung tại máy tính Primary Domain Controller.",
      "C. Các máy tính có quyền hạn ngang nhau và không có các máy tính chuyên dụng làm nhiệm vụ cung cấp dịch vụ hay quản lý.",
      "D. Repeater điện: hai phía là tín hiệu điện"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Repeater điện: hai phía là tín hiệu điện"
  },
  {
    "id": "gt2025_c3_47",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Giá thành cao hơn nhiều Hub bị động.",
      "B. Client – Server: các máy chủ và dịch vụ cung cấp",
      "C. Repeater điện có thể làm tăng khoảng cách mạng, nhưng vẫn bị hạn chế do độ trễ của tín hiệu.",
      "D. Router có địa chỉ nên nó nhận và xử lý các gói tin gửi đến nó mà thôi."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Repeater điện có thể làm tăng khoảng cách mạng, nhưng vẫn bị hạn chế do độ trễ của tín hiệu."
  },
  {
    "id": "gt2025_c3_48",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Sơ đồ mạng: Sơ đồ logic, sơ đồ vật lý, sơ đồ địa chỉ",
      "B. Ví dụ với mạng sử dụng cáp đồng trục 50 thì khoảng cách tối đa là 2.8 km, cho dù sử dụng thêm Repeater.",
      "C. Switch hoạt động ở tốc độ cao hơn nhiều so với Repeater và có thể cung cấp nhiều chức năng hơn như khả năng tạo mạng LAN ảo (VLAN).",
      "D. Router phụ thuộc giao thức: Chỉ thực hiện việc tìm đường và truyền gói tin từ mạng này sang mạng khác, có chung một giao thức truyền thông."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Ví dụ với mạng sử dụng cáp đồng trục 50 thì khoảng cách tối đa là 2.8 km, cho dù sử dụng thêm Repeater."
  },
  {
    "id": "gt2025_c3_49",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 3: Quản lý cấu hình?",
    "options": [
      "A. Repeater điện quang: liên kết với một đầu cáp quang và một đầu là cáp điện.",
      "B. Ở một mạng cục bộ LAN có thể có nhiều nhóm làm việc Workgroup khác nhau cùng kết nối.",
      "C. Môi trường truyền dẫn: cáp mạng, vô tuyến.",
      "D. Repeater nhận được một tín hiệu từ một phía của mạng thì nó sẽ phát tiếp vào phía kia của mạng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Repeater điện quang: liên kết với một đầu cáp quang và một đầu là cáp điện."
  },
  {
    "id": "gt2025_c3_50",
    "chapter": 3,
    "chapterName": "Chương 3: Quản lý cấu hình",
    "question": "Khi ôn Chương 3: Quản lý cấu hình, nhận định nào đúng nhất?",
    "options": [
      "A. Router không phụ thuộc vào giao thức: dùng liên kết các mạng có giao thức khác nhau và kích thức các gói tin có thể khác nhau (chia nhỏ một gói tin).",
      "B. Hub bị động (Passive Hub) : Không chứa các linh kiện điện tử và cũng không xử lý các tín hiệu dữ liệu, chức năng duy nhất là tổ hợp các tín hiệu từ một số đoạn cáp mạng.",
      "C. Chuyển các khung dữ liệu từ nguồn đến đích, và xây dựng các bảng Switch.",
      "D. Việc sử dụng Repeater không thay đổi nội dung các tín hiện đi qua nên nó chỉ được dùng để nối hai mạng có cùng giao thức truyền thông."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Việc sử dụng Repeater không thay đổi nội dung các tín hiện đi qua nên nó chỉ được dùng để nối hai mạng có cùng giao thức truyền thông."
  },
  {
    "id": "gt2025_c4_01",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Bạn có thể đặt các cường độ giám sát khác nhau dựa trên mức độ hoạt động của khu vực có vấn đề theo truyền thống.",
      "B. Cô lập lỗi nhằm khoanh vùng thành phần gây sự cố để xử lý hiệu quả.",
      "C. Fault Management là quá trình định vị lỗi, bao gồm tìm lỗi, cô lập lỗi và sửa chữa nếu có thể.",
      "D. Có khả năng tạo bản đồ của mọi thiết bị và nút được kết nối với mạng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Fault Management là quá trình định vị lỗi, bao gồm tìm lỗi, cô lập lỗi và sửa chữa nếu có thể."
  },
  {
    "id": "gt2025_c4_02",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Tùy thuộc vào sự cố, công cụ quản lý lỗi có thể tự động gửi các tập lệnh hoặc chương trình khôi phục để khắc phục sự cố ngay lập tức.",
      "B. Công cụ quản lý lỗi liên tục quét mạng, phân tích tình hình và cung cấp giải pháp cần thực hiện.",
      "C. Cần tích cực bảo vệ hệ thống mạng, chống lại những rủi ro, những nguy cơ",
      "D. Bảo trì hệ thống làm mát, tản nhiệt."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Công cụ quản lý lỗi liên tục quét mạng, phân tích tình hình và cung cấp giải pháp cần thực hiện."
  },
  {
    "id": "gt2025_c4_03",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Tùy sự cố, công cụ quản lý lỗi có thể tự động gửi tập lệnh hoặc chương trình khôi phục.",
      "B. Điều này cho phép các nhóm CNTT tập trung vào các vấn đề thực tế sẽ cần thời gian và nỗ lực để khắc phục.",
      "C. Nếu một công cụ tạo nhiều cảnh báo về cùng một vấn đề, nó sẽ tự động so sánh chúng và kết hợp chúng thành một cảnh báo trước khi gửi đi.",
      "D. Điều này bao gồm phần cứng như bộ định tuyến và thiết bị chuyển mạch, các dịch vụ như máy chủ DHCP và DNS hoặc bất kỳ thứ gì khác giữ cho dữ liệu lưu thông trên mạng của bạn."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Tùy sự cố, công cụ quản lý lỗi có thể tự động gửi tập lệnh hoặc chương trình khôi phục."
  },
  {
    "id": "gt2025_c4_04",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Tấn công thông qua phần mềm độc hại và virus.",
      "B. Tùy thuộc vào sự cố, công cụ quản lý lỗi có thể tự động gửi các tập lệnh hoặc chương trình khôi phục để khắc phục sự cố ngay lập tức.",
      "C. Cảnh báo: Công cụ cảnh báo người dùng về sự cố.",
      "D. Các nút có thể thu thập log hệ thống và dữ liệu SNMP để phân tích hoạt động hoặc hiệu suất bất thường."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Các nút có thể thu thập log hệ thống và dữ liệu SNMP để phân tích hoạt động hoặc hiệu suất bất thường."
  },
  {
    "id": "gt2025_c4_05",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Có thể xây dựng hệ thống ngăn chặn hỏa hoạn dạng khí, không độc hại và không gây hư hại thiết bị điện tử.",
      "B. Vì các công cụ quản lý lỗi liên tục tìm kiếm các vấn đề về hiệu suất, chương trình sẽ khắc phục những vấn đề này trước khi bạn biết về chúng.",
      "C. Cô lập lỗi nhằm khoanh vùng thành phần gây sự cố để xử lý hiệu quả.",
      "D. Điều này cho phép các chức năng quản lý lỗi có thể định vị thành phần gặp trục trặc hoặc gây ra các vấn đề về hiệu suất."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Cô lập lỗi nhằm khoanh vùng thành phần gây sự cố để xử lý hiệu quả."
  },
  {
    "id": "gt2025_c4_06",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Các cuộc tấn công DDOS (Tấn công từ chối dịch vụ) làm quá tải máy chủ dẫn đến ngưng cung cấp dịch vụ theo yêu cầu của máy khách.",
      "B. Quản lý lỗi: ( FM:Fault Management)",
      "C. Mất điện đột ngột hoặc dài hạn có thể làm cho các dịch vụ trực tuyến không hoạt động được.",
      "D. Sử dụng nguồn điện thay thế như điện năng lượng mặt trời."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Quản lý lỗi: ( FM:Fault Management)"
  },
  {
    "id": "gt2025_c4_07",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. FM là một quá trình định vị các lỗi, nó bao gồm các vấn đề sau",
      "B. TÀI NGUYÊN BỊ LỖI VÀ CÁCH PHÒNG TRÁNH",
      "C. Cần thay thế thiết bị khi hết hạn bảo hành.",
      "D. Bất cứ thứ gì liên quan đến cơ sở hạ tầng mạng đề coi như một tài nguyên mạng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: FM là một quá trình định vị các lỗi, nó bao gồm các vấn đề sau"
  },
  {
    "id": "gt2025_c4_08",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Quản lý lỗi rất quan trọng trong cả việc tìm kiếm và khắc phục các sự cố mạng và là nguồn tài nguyên vô giá cho các nhóm mạng.",
      "B. Quản lý lỗi: ( FM:Fault Management)",
      "C. Thiết bị lỗi thời: khi bị hỏng sẽ khó sửa chữa hoặc thay thế, chi phí cao.",
      "D. SỰ CẦN THIẾT CỦA HỆ THỐNG QUẢN LÝ LỖI"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: SỰ CẦN THIẾT CỦA HỆ THỐNG QUẢN LÝ LỖI"
  },
  {
    "id": "gt2025_c4_09",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Ổ cứng gắn trực tiếp vào bo mạch máy chủ sẽ tối ưu tốc độ truy xuất nhưng có nguy cơ khi bị lỗi mà không có ổ cứng dự phòng.",
      "B. Nếu các giải pháp tự động không hoạt động, chương trình quản lý đề xuất can thiệp thủ công.",
      "C. Khi sự cố xảy ra trên mạng của bạn, bạn cần có một hệ thống để phát hiện sự cố và nguồn gốc của sự cố.",
      "D. Vì các công cụ quản lý lỗi liên tục tìm kiếm các vấn đề về hiệu suất, chương trình sẽ khắc phục những vấn đề này trước khi bạn biết về chúng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Khi sự cố xảy ra trên mạng của bạn, bạn cần có một hệ thống để phát hiện sự cố và nguồn gốc của sự cố."
  },
  {
    "id": "gt2025_c4_10",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Biện pháp: tích hợp giải pháp phát hiện và phòng chống xâm nhập, điều hướng lưu lượng.",
      "B. Các công cụ quản lý lỗi liên tục quét mạng để tìm các sự cố, sau đó phân tích tình hình và cung cấp cho người dùng giải pháp họ cần thực hiện.",
      "C. Chúng thu thập thông tin như nhật ký hệ thống và dữ liệu thu thập SNMP và phân tích nó để tìm bất kỳ hoạt động hoặc hiệu suất bất thường nào.",
      "D. Điều này có nghĩa là nếu một ổ đĩa bị lỗi, thì hệ thống có thể tiếp tục chạy mà không bị mất dữ liệu."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Các công cụ quản lý lỗi liên tục quét mạng để tìm các sự cố, sau đó phân tích tình hình và cung cấp cho người dùng giải pháp họ cần thực hiện."
  },
  {
    "id": "gt2025_c4_11",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Tùy thuộc vào sự cố, công cụ quản lý lỗi có thể tự động gửi các tập lệnh hoặc chương trình khôi phục để khắc phục sự cố ngay lập tức.",
      "B. Nhiệt độ cao: nhiệt độ cao có thể gây lỗi thiết bị và nhanh hư hỏng.",
      "C. Tệp cấu hình có thể bị thiếu hoặc bị hỏng",
      "D. Có thể xây dựng hệ thống ngăn chặn hỏa hoạn dạng khí, không độc hại và không gây hư hại thiết bị điện tử."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Tùy thuộc vào sự cố, công cụ quản lý lỗi có thể tự động gửi các tập lệnh hoặc chương trình khôi phục để khắc phục sự cố ngay lập tức."
  },
  {
    "id": "gt2025_c4_12",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Chẩn đoán: Công cụ xác định vấn đề thực sự là gì và vị trí của nó trên mạng.",
      "B. Một công cụ quản lý lỗi không thể hoạt động hiệu quả nếu nó không có bức tranh rõ ràng về cấu trúc liên kết của mạng.",
      "C. Sử dụng nguồn điện thay thế như điện năng lượng mặt trời.",
      "D. Quản lý lỗi rất quan trọng trong cả việc tìm kiếm và khắc phục các sự cố mạng và là nguồn tài nguyên vô giá cho các nhóm mạng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Quản lý lỗi rất quan trọng trong cả việc tìm kiếm và khắc phục các sự cố mạng và là nguồn tài nguyên vô giá cho các nhóm mạng."
  },
  {
    "id": "gt2025_c4_13",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Các điểm hư hỏng có thể là cấu trúc và tòa nhà có thể sụp đổ hoặc một đường ống dẫn chính có thể bị đứt, làm hỏng tất cả dữ liệu và đầu nối nguồn của mạng.",
      "B. Tất cả các khả năng cần được giải quyết trong thử nghiệm khôi phục sau thảm họa.",
      "C. Phát hiện: Công cụ quản lý lỗi sẽ kiểm tra mạng và phát hiện ra các vấn đề ảnh hưởng đến hiệu suất hoặc quá trình truyền dữ liệu.",
      "D. Tấn công thông qua phần mềm độc hại và virus."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Phát hiện: Công cụ quản lý lỗi sẽ kiểm tra mạng và phát hiện ra các vấn đề ảnh hưởng đến hiệu suất hoặc quá trình truyền dữ liệu."
  },
  {
    "id": "gt2025_c4_14",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Bạn vẫn sẽ được thông báo về bất kỳ sự kiện nào xảy ra ngay cả khi phần mềm tự xử lý.",
      "B. Chẩn đoán: Công cụ xác định vấn đề thực sự là gì và vị trí của nó trên mạng.",
      "C. Cần thay thế thiết bị khi hết hạn bảo hành.",
      "D. Một khu vực trong mạng của bạn gặp nhiều sự cố hơn những khu vực khác có thể được giám sát thường xuyên hơn hoặc nghiêm ngặt hơn."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Chẩn đoán: Công cụ xác định vấn đề thực sự là gì và vị trí của nó trên mạng."
  },
  {
    "id": "gt2025_c4_15",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Cảnh báo: Công cụ cảnh báo người dùng về sự cố.",
      "B. Có khả năng tạo bản đồ của mọi thiết bị và nút được kết nối với mạng.",
      "C. Thay đổi thiết bị mới và công nghệ mới để tăng tốc độ và bang thông mạng.",
      "D. Vì các công cụ quản lý lỗi liên tục tìm kiếm các vấn đề về hiệu suất, chương trình sẽ khắc phục những vấn đề này trước khi bạn biết về chúng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Cảnh báo: Công cụ cảnh báo người dùng về sự cố."
  },
  {
    "id": "gt2025_c4_16",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Phát hiện: Công cụ quản lý lỗi sẽ kiểm tra mạng và phát hiện ra các vấn đề ảnh hưởng đến hiệu suất hoặc quá trình truyền dữ liệu.",
      "B. Điều này cho phép các chức năng quản lý lỗi có thể định vị thành phần gặp trục trặc hoặc gây ra các vấn đề về hiệu suất.",
      "C. Biện pháp: tích hợp giải pháp phát hiện và phòng chống xâm nhập, điều hướng lưu lượng.",
      "D. Nếu một công cụ tạo nhiều cảnh báo về cùng một vấn đề, nó sẽ tự động so sánh chúng và kết hợp chúng thành một cảnh báo trước khi gửi đi."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Nếu một công cụ tạo nhiều cảnh báo về cùng một vấn đề, nó sẽ tự động so sánh chúng và kết hợp chúng thành một cảnh báo trước khi gửi đi."
  },
  {
    "id": "gt2025_c4_17",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Đôi khi, các nút phát hiện độc lập các vấn đề về hiệu suất sẽ gửi thông tin đến trình quản lý lỗi mà không được chương trình nhắc nhở.",
      "B. Mất điện đột ngột hoặc dài hạn có thể làm cho các dịch vụ trực tuyến không hoạt động được.",
      "C. Giải quyết: Công cụ tự động thực thi các chương trình hoặc tập lệnh được thiết kế để cô lập và cố gắng khắc phục sự cố.",
      "D. Bất cứ thứ gì liên quan đến cơ sở hạ tầng mạng đề coi như một tài nguyên mạng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Giải quyết: Công cụ tự động thực thi các chương trình hoặc tập lệnh được thiết kế để cô lập và cố gắng khắc phục sự cố."
  },
  {
    "id": "gt2025_c4_18",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Thay đổi cấu hình định tuyến, VLAN mà không kiểm tra trước.",
      "B. Nếu các giải pháp tự động không hoạt động, chương trình quản lý đề xuất can thiệp thủ công.",
      "C. Các cuộc tấn công DDOS (Tấn công từ chối dịch vụ) làm quá tải máy chủ dẫn đến ngưng cung cấp dịch vụ theo yêu cầu của máy khách.",
      "D. Biện pháp: tích hợp giải pháp phát hiện và phòng chống xâm nhập, điều hướng lưu lượng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Nếu các giải pháp tự động không hoạt động, chương trình quản lý đề xuất can thiệp thủ công."
  },
  {
    "id": "gt2025_c4_19",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Một công cụ quản lý lỗi không thể hoạt động hiệu quả nếu nó không có bức tranh rõ ràng về cấu trúc liên kết của mạng.",
      "B. Tấn công thông qua phần mềm độc hại và virus.",
      "C. Đôi khi, các nút phát hiện độc lập các vấn đề về hiệu suất sẽ gửi thông tin đến trình quản lý lỗi mà không được chương trình nhắc nhở.",
      "D. Để giúp tăng hiệu suất và khả năng dự phòng, ổ cứng thường được định cấu hình trong một mảng RAID."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Một công cụ quản lý lỗi không thể hoạt động hiệu quả nếu nó không có bức tranh rõ ràng về cấu trúc liên kết của mạng."
  },
  {
    "id": "gt2025_c4_20",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Người quản lý lỗi lấy tất cả thông tin này và sử dụng nó để tìm bất kỳ vấn đề nào cần được giải quyết.",
      "B. Nhiệt độ cao: nhiệt độ cao có thể gây lỗi thiết bị và nhanh hư hỏng.",
      "C. Điều này cho phép các chức năng quản lý lỗi có thể định vị thành phần gặp trục trặc hoặc gây ra các vấn đề về hiệu suất.",
      "D. Có khả năng tạo bản đồ của mọi thiết bị và nút được kết nối với mạng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Có khả năng tạo bản đồ của mọi thiết bị và nút được kết nối với mạng."
  },
  {
    "id": "gt2025_c4_21",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Các thành phần có thể bị lỗi là bộ nguồn, bo mạch chủ và ổ cứng.",
      "B. Các công cụ quản lý lỗi có thể tự động áp dụng các bản sửa lỗi cho những sự cố này bất cứ khi nào chúng xảy ra.",
      "C. Điều này cho phép các chức năng quản lý lỗi có thể định vị thành phần gặp trục trặc hoặc gây ra các vấn đề về hiệu suất.",
      "D. Một khu vực trong mạng của bạn gặp nhiều sự cố hơn những khu vực khác có thể được giám sát thường xuyên hơn hoặc nghiêm ngặt hơn."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Điều này cho phép các chức năng quản lý lỗi có thể định vị thành phần gặp trục trặc hoặc gây ra các vấn đề về hiệu suất."
  },
  {
    "id": "gt2025_c4_22",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Bạn vẫn sẽ được thông báo về bất kỳ sự kiện nào xảy ra ngay cả khi phần mềm tự xử lý.",
      "B. Các chương trình quản lý lỗi thường xuyên gửi yêu cầu đến các thiết bị và nút để xác định xem phần cứng có hoạt động bình thường hay không.",
      "C. Bạn có thể đặt các cường độ giám sát khác nhau dựa trên mức độ hoạt động của khu vực có vấn đề theo truyền thống.",
      "D. Fault Management là quá trình định vị lỗi, bao gồm tìm lỗi, cô lập lỗi và sửa chữa nếu có thể."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Các chương trình quản lý lỗi thường xuyên gửi yêu cầu đến các thiết bị và nút để xác định xem phần cứng có hoạt động bình thường hay không."
  },
  {
    "id": "gt2025_c4_23",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Chúng thu thập thông tin như nhật ký hệ thống và dữ liệu thu thập SNMP và phân tích nó để tìm bất kỳ hoạt động hoặc hiệu suất bất thường nào.",
      "B. Vì các công cụ quản lý lỗi liên tục tìm kiếm các vấn đề về hiệu suất, chương trình sẽ khắc phục những vấn đề này trước khi bạn biết về chúng.",
      "C. Nên có sẵn nguồn điện, ổ cứng dự phòng.Ổ cứng có thể thay thế mà không cần tắt máy chủ.",
      "D. Có khả năng tạo bản đồ của mọi thiết bị và nút được kết nối với mạng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Chúng thu thập thông tin như nhật ký hệ thống và dữ liệu thu thập SNMP và phân tích nó để tìm bất kỳ hoạt động hoặc hiệu suất bất thường nào."
  },
  {
    "id": "gt2025_c4_24",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Lỗi phần cứng xảy ra khi các bộ phận của Cơ sở hạ tầng CNTT của bạn ngừng hoạt động.",
      "B. Điều này cho phép các chức năng quản lý lỗi có thể định vị thành phần gặp trục trặc hoặc gây ra các vấn đề về hiệu suất.",
      "C. Chúng thu thập thông tin như nhật ký hệ thống và dữ liệu thu thập SNMP và phân tích nó để tìm bất kỳ hoạt động hoặc hiệu suất bất thường nào.",
      "D. Đôi khi, các nút phát hiện độc lập các vấn đề về hiệu suất sẽ gửi thông tin đến trình quản lý lỗi mà không được chương trình nhắc nhở."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Đôi khi, các nút phát hiện độc lập các vấn đề về hiệu suất sẽ gửi thông tin đến trình quản lý lỗi mà không được chương trình nhắc nhở."
  },
  {
    "id": "gt2025_c4_25",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Không phải mọi vấn đề ảnh hưởng đến hiệu suất mạng của bạn đều lớn hoặc cần phải chú ý nhiều.",
      "B. SỰ CẦN THIẾT CỦA HỆ THỐNG QUẢN LÝ LỖI",
      "C. Người quản lý lỗi lấy tất cả thông tin này và sử dụng nó để tìm bất kỳ vấn đề nào cần được giải quyết.",
      "D. Bản vá hoặc nâng cấp chương trình cơ sở không tương thích / không tương thích."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Người quản lý lỗi lấy tất cả thông tin này và sử dụng nó để tìm bất kỳ vấn đề nào cần được giải quyết."
  },
  {
    "id": "gt2025_c4_26",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Các phòng máy, phòng máy chủ, trung tâm dữ liệu … hoạt động trên sàn nâng chống ngập.",
      "B. Không phải mọi vấn đề ảnh hưởng đến hiệu suất mạng của bạn đều lớn hoặc cần phải chú ý nhiều.",
      "C. Cho dù đó là một vụ tai nạn máy bay, hỏa hoạn, lũ lụt, hoặc động đất, mà không thể đoán trước được khi nào những điều đó xảy ra.",
      "D. Tất cả các khả năng cần được giải quyết trong thử nghiệm khôi phục sau thảm họa."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Không phải mọi vấn đề ảnh hưởng đến hiệu suất mạng của bạn đều lớn hoặc cần phải chú ý nhiều."
  },
  {
    "id": "gt2025_c4_27",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Nhiều sự cố chỉ cần sửa một bước mà mất ít thời gian để áp dụng.",
      "B. Nhiệt độ cao: nhiệt độ cao có thể gây lỗi thiết bị và nhanh hư hỏng.",
      "C. Một khu vực trong mạng của bạn gặp nhiều sự cố hơn những khu vực khác có thể được giám sát thường xuyên hơn hoặc nghiêm ngặt hơn.",
      "D. Có hơn 1 đường kết nối ra bên ngoài để phòng ngừa cáp bị đứt."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Nhiều sự cố chỉ cần sửa một bước mà mất ít thời gian để áp dụng."
  },
  {
    "id": "gt2025_c4_28",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Công cụ quản lý lỗi liên tục quét mạng, phân tích tình hình và cung cấp giải pháp cần thực hiện.",
      "B. Tùy sự cố, công cụ quản lý lỗi có thể tự động gửi tập lệnh hoặc chương trình khôi phục.",
      "C. Tấn công thông qua phần mềm độc hại và virus.",
      "D. Các công cụ quản lý lỗi có thể tự động áp dụng các bản sửa lỗi cho những sự cố này bất cứ khi nào chúng xảy ra."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Các công cụ quản lý lỗi có thể tự động áp dụng các bản sửa lỗi cho những sự cố này bất cứ khi nào chúng xảy ra."
  },
  {
    "id": "gt2025_c4_29",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Quản trị viên phải nhận thức được điều gì có thể xảy ra và lập kế hoạch cho phù hợp.",
      "B. Cho dù đó là một vụ tai nạn máy bay, hỏa hoạn, lũ lụt, hoặc động đất, mà không thể đoán trước được khi nào những điều đó xảy ra.",
      "C. Điều này cho phép các nhóm CNTT tập trung vào các vấn đề thực tế sẽ cần thời gian và nỗ lực để khắc phục.",
      "D. Các cuộc tấn công DDOS (Tấn công từ chối dịch vụ) làm quá tải máy chủ dẫn đến ngưng cung cấp dịch vụ theo yêu cầu của máy khách."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Điều này cho phép các nhóm CNTT tập trung vào các vấn đề thực tế sẽ cần thời gian và nỗ lực để khắc phục."
  },
  {
    "id": "gt2025_c4_30",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Nếu các giải pháp tự động không hoạt động, chương trình quản lý đề xuất can thiệp thủ công.",
      "B. Vì các công cụ quản lý lỗi liên tục tìm kiếm các vấn đề về hiệu suất, chương trình sẽ khắc phục những vấn đề này trước khi bạn biết về chúng.",
      "C. Đôi khi, các nút phát hiện độc lập các vấn đề về hiệu suất sẽ gửi thông tin đến trình quản lý lỗi mà không được chương trình nhắc nhở.",
      "D. Giải pháp là phải thử nghiệm bản vá trước trên một mạng thử nghiệm."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Vì các công cụ quản lý lỗi liên tục tìm kiếm các vấn đề về hiệu suất, chương trình sẽ khắc phục những vấn đề này trước khi bạn biết về chúng."
  },
  {
    "id": "gt2025_c4_31",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Bạn vẫn sẽ được thông báo về bất kỳ sự kiện nào xảy ra ngay cả khi phần mềm tự xử lý.",
      "B. Hầu hết các trung tâm dữ liệu đều có máy phát điện chạy dầu diesel có thể chạy trong thời gian dài mà không ảnh hưởng đến hoạt động kinh doanh khi bị cắt điện.",
      "C. Nếu một công cụ tạo nhiều cảnh báo về cùng một vấn đề, nó sẽ tự động so sánh chúng và kết hợp chúng thành một cảnh báo trước khi gửi đi.",
      "D. Nhiệt độ cao: nhiệt độ cao có thể gây lỗi thiết bị và nhanh hư hỏng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Bạn vẫn sẽ được thông báo về bất kỳ sự kiện nào xảy ra ngay cả khi phần mềm tự xử lý."
  },
  {
    "id": "gt2025_c4_32",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Nếu các giải pháp tự động không hoạt động, chương trình quản lý đề xuất can thiệp thủ công.",
      "B. Không phải mọi vấn đề ảnh hưởng đến hiệu suất mạng của bạn đều lớn hoặc cần phải chú ý nhiều.",
      "C. Khắc phục: tự động hóa các công tác bảo trì và vá lỗi phần mềm.",
      "D. Bạn có thể đặt các cường độ giám sát khác nhau dựa trên mức độ hoạt động của khu vực có vấn đề theo truyền thống."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Bạn có thể đặt các cường độ giám sát khác nhau dựa trên mức độ hoạt động của khu vực có vấn đề theo truyền thống."
  },
  {
    "id": "gt2025_c4_33",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Các công cụ quản lý lỗi liên tục quét mạng để tìm các sự cố, sau đó phân tích tình hình và cung cấp cho người dùng giải pháp họ cần thực hiện.",
      "B. Chẩn đoán: Công cụ xác định vấn đề thực sự là gì và vị trí của nó trên mạng.",
      "C. Một khu vực trong mạng của bạn gặp nhiều sự cố hơn những khu vực khác có thể được giám sát thường xuyên hơn hoặc nghiêm ngặt hơn.",
      "D. Điều này cho phép các chức năng quản lý lỗi có thể định vị thành phần gặp trục trặc hoặc gây ra các vấn đề về hiệu suất."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Một khu vực trong mạng của bạn gặp nhiều sự cố hơn những khu vực khác có thể được giám sát thường xuyên hơn hoặc nghiêm ngặt hơn."
  },
  {
    "id": "gt2025_c4_34",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Hậu quả: phần mềm không hoạt động, ảnh hưởng đến hoạt động của đơn vị",
      "B. Dịch vụ, phần cứng và các thành phần khác được kết nối cẩn thận và có thể dễ bị hỏng.",
      "C. Bạn có thể đặt các cường độ giám sát khác nhau dựa trên mức độ hoạt động của khu vực có vấn đề theo truyền thống.",
      "D. Thay đổi cấu hình định tuyến, VLAN mà không kiểm tra trước."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Dịch vụ, phần cứng và các thành phần khác được kết nối cẩn thận và có thể dễ bị hỏng."
  },
  {
    "id": "gt2025_c4_35",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Quản trị viên phải nhận thức được điều gì có thể xảy ra và lập kế hoạch cho phù hợp.",
      "B. Có khả năng tạo bản đồ của mọi thiết bị và nút được kết nối với mạng.",
      "C. Giải quyết: Công cụ tự động thực thi các chương trình hoặc tập lệnh được thiết kế để cô lập và cố gắng khắc phục sự cố.",
      "D. Lưu trữ đám mây, sao lưu ngoại vi và sao chép trang web là tất cả các biện pháp mà bạn có thể thực hiện để ngăn chặn việc mất dữ liệu và khả năng hoạt động vĩnh viễn."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Quản trị viên phải nhận thức được điều gì có thể xảy ra và lập kế hoạch cho phù hợp."
  },
  {
    "id": "gt2025_c4_36",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Khi sự cố xảy ra trên mạng của bạn, bạn cần có một hệ thống để phát hiện sự cố và nguồn gốc của sự cố.",
      "B. Hầu hết các trung tâm dữ liệu đều có máy phát điện chạy dầu diesel có thể chạy trong thời gian dài mà không ảnh hưởng đến hoạt động kinh doanh khi bị cắt điện.",
      "C. Ổ cứng gắn trực tiếp vào bo mạch máy chủ sẽ tối ưu tốc độ truy xuất nhưng có nguy cơ khi bị lỗi mà không có ổ cứng dự phòng.",
      "D. Tùy thuộc vào mức độ quan trọng của thành phần CNTT trong mạng, quản trị viên cần xây dựng dự phòng để đề phòng lỗi, ngừng hoạt động hoặc thảm họa có thể xảy ra."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Tùy thuộc vào mức độ quan trọng của thành phần CNTT trong mạng, quản trị viên cần xây dựng dự phòng để đề phòng lỗi, ngừng hoạt động hoặc thảm họa có thể xảy ra."
  },
  {
    "id": "gt2025_c4_37",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Tùy sự cố, công cụ quản lý lỗi có thể tự động gửi tập lệnh hoặc chương trình khôi phục.",
      "B. Lỗi phần cứng xảy ra khi các bộ phận của Cơ sở hạ tầng CNTT của bạn ngừng hoạt động.",
      "C. loại lỗi mạng: tài nguyên bị lỗi, phần cứng bị lỗi, ổ đĩa lưu trữ bị lỗi, phần mềm bị lỗi, những thất bại của con người.",
      "D. Bất cứ thứ gì liên quan đến cơ sở hạ tầng mạng đề coi như một tài nguyên mạng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: loại lỗi mạng: tài nguyên bị lỗi, phần cứng bị lỗi, ổ đĩa lưu trữ bị lỗi, phần mềm bị lỗi, những thất bại của con người."
  },
  {
    "id": "gt2025_c4_38",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Các bản vá phần mềm cho hệ điều hành cũng có khả năng phá vỡ một số dịch vụ nhất định trên máy chủ.",
      "B. TÀI NGUYÊN BỊ LỖI VÀ CÁCH PHÒNG TRÁNH",
      "C. Nhiệt độ cao: nhiệt độ cao có thể gây lỗi thiết bị và nhanh hư hỏng.",
      "D. Một khu vực trong mạng của bạn gặp nhiều sự cố hơn những khu vực khác có thể được giám sát thường xuyên hơn hoặc nghiêm ngặt hơn."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: TÀI NGUYÊN BỊ LỖI VÀ CÁCH PHÒNG TRÁNH"
  },
  {
    "id": "gt2025_c4_39",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Bất cứ thứ gì liên quan đến cơ sở hạ tầng mạng đề coi như một tài nguyên mạng.",
      "B. SỰ CẦN THIẾT CỦA HỆ THỐNG QUẢN LÝ LỖI",
      "C. Lưu trữ đám mây, sao lưu ngoại vi và sao chép trang web là tất cả các biện pháp mà bạn có thể thực hiện để ngăn chặn việc mất dữ liệu và khả năng hoạt động vĩnh viễn.",
      "D. Phát hiện: Công cụ quản lý lỗi sẽ kiểm tra mạng và phát hiện ra các vấn đề ảnh hưởng đến hiệu suất hoặc quá trình truyền dữ liệu."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Bất cứ thứ gì liên quan đến cơ sở hạ tầng mạng đề coi như một tài nguyên mạng."
  },
  {
    "id": "gt2025_c4_40",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. loại lỗi mạng: tài nguyên bị lỗi, phần cứng bị lỗi, ổ đĩa lưu trữ bị lỗi, phần mềm bị lỗi, những thất bại của con người.",
      "B. Các phòng máy, phòng máy chủ, trung tâm dữ liệu … hoạt động trên sàn nâng chống ngập.",
      "C. Quản lý lỗi rất quan trọng trong cả việc tìm kiếm và khắc phục các sự cố mạng và là nguồn tài nguyên vô giá cho các nhóm mạng.",
      "D. Điều này bao gồm phần cứng như bộ định tuyến và thiết bị chuyển mạch, các dịch vụ như máy chủ DHCP và DNS hoặc bất kỳ thứ gì khác giữ cho dữ liệu lưu thông trên mạng của bạn."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Điều này bao gồm phần cứng như bộ định tuyến và thiết bị chuyển mạch, các dịch vụ như máy chủ DHCP và DNS hoặc bất kỳ thứ gì khác giữ cho dữ liệu lưu thông trên mạng của bạn."
  },
  {
    "id": "gt2025_c4_41",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Nếu các giải pháp tự động không hoạt động, chương trình quản lý đề xuất can thiệp thủ công.",
      "B. SỰ CẦN THIẾT CỦA HỆ THỐNG QUẢN LÝ LỖI",
      "C. Các lỗi liên quan liên kết dữ liệu và cung cấp điện cho trung tâm dữ liệu cũng có thể được coi là lỗi tài nguyên.",
      "D. Không phải mọi vấn đề ảnh hưởng đến hiệu suất mạng của bạn đều lớn hoặc cần phải chú ý nhiều."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Các lỗi liên quan liên kết dữ liệu và cung cấp điện cho trung tâm dữ liệu cũng có thể được coi là lỗi tài nguyên."
  },
  {
    "id": "gt2025_c4_42",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Cần tích cực bảo vệ hệ thống mạng, chống lại những rủi ro, những nguy cơ",
      "B. Mất điện đột ngột hoặc dài hạn có thể làm cho các dịch vụ trực tuyến không hoạt động được.",
      "C. Quản trị viên phải nhận thức được điều gì có thể xảy ra và lập kế hoạch cho phù hợp.",
      "D. Các lỗi liên quan liên kết dữ liệu và cung cấp điện cho trung tâm dữ liệu cũng có thể được coi là lỗi tài nguyên."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Mất điện đột ngột hoặc dài hạn có thể làm cho các dịch vụ trực tuyến không hoạt động được."
  },
  {
    "id": "gt2025_c4_43",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Hầu hết các trung tâm dữ liệu đều có máy phát điện chạy dầu diesel có thể chạy trong thời gian dài mà không ảnh hưởng đến hoạt động kinh doanh khi bị cắt điện.",
      "B. Bạn vẫn sẽ được thông báo về bất kỳ sự kiện nào xảy ra ngay cả khi phần mềm tự xử lý.",
      "C. Điều này cho phép các chức năng quản lý lỗi có thể định vị thành phần gặp trục trặc hoặc gây ra các vấn đề về hiệu suất.",
      "D. Người quản lý lỗi lấy tất cả thông tin này và sử dụng nó để tìm bất kỳ vấn đề nào cần được giải quyết."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Hầu hết các trung tâm dữ liệu đều có máy phát điện chạy dầu diesel có thể chạy trong thời gian dài mà không ảnh hưởng đến hoạt động kinh doanh khi bị cắt điện."
  },
  {
    "id": "gt2025_c4_44",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Điều này cho phép các chức năng quản lý lỗi có thể định vị thành phần gặp trục trặc hoặc gây ra các vấn đề về hiệu suất.",
      "B. Các lỗi liên quan liên kết dữ liệu và cung cấp điện cho trung tâm dữ liệu cũng có thể được coi là lỗi tài nguyên.",
      "C. Giải quyết: Công cụ tự động thực thi các chương trình hoặc tập lệnh được thiết kế để cô lập và cố gắng khắc phục sự cố.",
      "D. Sử dụng nguồn điện thay thế như điện năng lượng mặt trời."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Sử dụng nguồn điện thay thế như điện năng lượng mặt trời."
  },
  {
    "id": "gt2025_c4_45",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Lưu trữ đám mây, sao lưu ngoại vi và sao chép trang web là tất cả các biện pháp mà bạn có thể thực hiện để ngăn chặn việc mất dữ liệu và khả năng hoạt động vĩnh viễn.",
      "B. Là mở rộng của lỗi do con người gây ra.",
      "C. Cho dù đó là một vụ tai nạn máy bay, hỏa hoạn, lũ lụt, hoặc động đất, mà không thể đoán trước được khi nào những điều đó xảy ra.",
      "D. TÀI NGUYÊN BỊ LỖI VÀ CÁCH PHÒNG TRÁNH"
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Cho dù đó là một vụ tai nạn máy bay, hỏa hoạn, lũ lụt, hoặc động đất, mà không thể đoán trước được khi nào những điều đó xảy ra."
  },
  {
    "id": "gt2025_c4_46",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Bạn có thể đặt các cường độ giám sát khác nhau dựa trên mức độ hoạt động của khu vực có vấn đề theo truyền thống.",
      "B. Các điểm hư hỏng có thể là cấu trúc và tòa nhà có thể sụp đổ hoặc một đường ống dẫn chính có thể bị đứt, làm hỏng tất cả dữ liệu và đầu nối nguồn của mạng.",
      "C. Giải quyết: Công cụ tự động thực thi các chương trình hoặc tập lệnh được thiết kế để cô lập và cố gắng khắc phục sự cố.",
      "D. Thay đổi thiết bị mới và công nghệ mới để tăng tốc độ và bang thông mạng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Các điểm hư hỏng có thể là cấu trúc và tòa nhà có thể sụp đổ hoặc một đường ống dẫn chính có thể bị đứt, làm hỏng tất cả dữ liệu và đầu nối nguồn của mạng."
  },
  {
    "id": "gt2025_c4_47",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. Tất cả các khả năng cần được giải quyết trong thử nghiệm khôi phục sau thảm họa.",
      "B. Lỗi ổ cứng trên SAN có thể là một thảm họa nếu dữ liệu không thể được tạo lại trên các ổ đĩa thay thế.",
      "C. Tùy sự cố, công cụ quản lý lỗi có thể tự động gửi tập lệnh hoặc chương trình khôi phục.",
      "D. Lỗi phần cứng xảy ra khi các bộ phận của Cơ sở hạ tầng CNTT của bạn ngừng hoạt động."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Tất cả các khả năng cần được giải quyết trong thử nghiệm khôi phục sau thảm họa."
  },
  {
    "id": "gt2025_c4_48",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Bạn có thể đặt các cường độ giám sát khác nhau dựa trên mức độ hoạt động của khu vực có vấn đề theo truyền thống.",
      "B. TÀI NGUYÊN BỊ LỖI VÀ CÁCH PHÒNG TRÁNH",
      "C. Nhiệt độ cao: nhiệt độ cao có thể gây lỗi thiết bị và nhanh hư hỏng.",
      "D. Có thể xây dựng hệ thống ngăn chặn hỏa hoạn dạng khí, không độc hại và không gây hư hại thiết bị điện tử."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Có thể xây dựng hệ thống ngăn chặn hỏa hoạn dạng khí, không độc hại và không gây hư hại thiết bị điện tử."
  },
  {
    "id": "gt2025_c4_49",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 4: Quản lý lỗi?",
    "options": [
      "A. loại lỗi mạng: tài nguyên bị lỗi, phần cứng bị lỗi, ổ đĩa lưu trữ bị lỗi, phần mềm bị lỗi, những thất bại của con người.",
      "B. Tùy sự cố, công cụ quản lý lỗi có thể tự động gửi tập lệnh hoặc chương trình khôi phục.",
      "C. Các phòng máy, phòng máy chủ, trung tâm dữ liệu … hoạt động trên sàn nâng chống ngập.",
      "D. Tùy thuộc vào mức độ quan trọng của thành phần CNTT trong mạng, quản trị viên cần xây dựng dự phòng để đề phòng lỗi, ngừng hoạt động hoặc thảm họa có thể xảy ra."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Các phòng máy, phòng máy chủ, trung tâm dữ liệu … hoạt động trên sàn nâng chống ngập."
  },
  {
    "id": "gt2025_c4_50",
    "chapter": 4,
    "chapterName": "Chương 4: Quản lý lỗi",
    "question": "Khi ôn Chương 4: Quản lý lỗi, nhận định nào đúng nhất?",
    "options": [
      "A. Có thể xây dựng hệ thống ngăn chặn hỏa hoạn dạng khí, không độc hại và không gây hư hại thiết bị điện tử.",
      "B. Có hơn 1 đường kết nối ra bên ngoài để phòng ngừa cáp bị đứt.",
      "C. Để giúp tăng hiệu suất và khả năng dự phòng, ổ cứng thường được định cấu hình trong một mảng RAID.",
      "D. Các điểm hư hỏng có thể là cấu trúc và tòa nhà có thể sụp đổ hoặc một đường ống dẫn chính có thể bị đứt, làm hỏng tất cả dữ liệu và đầu nối nguồn của mạng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Có hơn 1 đường kết nối ra bên ngoài để phòng ngừa cáp bị đứt."
  },
  {
    "id": "gt2025_c5_01",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Quản lý hiệu suất mạng theo dõi hiệu suất các thành phần để phát hiện tắc nghẽn và đảm bảo hiệu suất yêu cầu.",
      "B. IP (Giao thức Internet) triển khai dịch vụ không hướng đến kết nối.",
      "C. Giới hạn số lượng gửi (tốc độ truyền) do mất mát hoặc chậm trễ trong mạch.",
      "D. NOMINAL CHANNEL CAPACITY – DUNG LƯỢNG KÊNH ĐỊNH MỨC"
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Quản lý hiệu suất mạng theo dõi hiệu suất các thành phần để phát hiện tắc nghẽn và đảm bảo hiệu suất yêu cầu."
  },
  {
    "id": "gt2025_c5_02",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Đánh giá các số liệu về hiệu suất của từng bộ phận trong hệ thống mạng.",
      "B. ĐỘ TRỄ TỪ ĐẦU ĐẾN CUỐI (END-TO-END DELAY)",
      "C. ĐIỀU CHỈNH HIỆU SUẤT CÁC THIẾT BỊ MẠNG",
      "D. Mục tiêu là đánh giá số liệu hiệu suất, tối ưu mạng và phòng tránh tắc nghẽn bằng quản lý lưu lượng, băng thông."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Mục tiêu là đánh giá số liệu hiệu suất, tối ưu mạng và phòng tránh tắc nghẽn bằng quản lý lưu lượng, băng thông."
  },
  {
    "id": "gt2025_c5_03",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Giới thiệu quản lý hiệu suất hoạt động 5.2.",
      "B. Liên quan đến cáp mạng hoặc song điện từ.",
      "C. End-to-end delay là thời gian cần thiết để truyền gói tin dọc theo toàn bộ đường dẫn của nó.",
      "D. Thời gian cần thiết để đẩy tất cả các bit trong một gói lên phương tiện truyền dẫn đang được sử dụng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: End-to-end delay là thời gian cần thiết để truyền gói tin dọc theo toàn bộ đường dẫn của nó."
  },
  {
    "id": "gt2025_c5_04",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Luôn luôn là một phần của dung lượng kênh trên lý thuyết.",
      "B. Ping thường được dùng để đo tổng thời gian khứ hồi RTT.",
      "C. TP (Throughput): Thông lượng cho phép của kết nối",
      "D. Giá trị kinh tế mà dịch vụ mang lại và các giá trị khác."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Ping thường được dùng để đo tổng thời gian khứ hồi RTT."
  },
  {
    "id": "gt2025_c5_05",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. End-to-end delay gồm độ trễ xử lý, độ trễ hàng đợi, độ trễ truyền và độ trễ lan truyền.",
      "B. Các thuật toán hàng đợi của bộ định tuyến cố gắng điều chỉnh độ trễ cho phù hợp với các ưu tiên cụ thể hoặc áp đặt độ trễ như nhau cho tất cả lưu lượng truy cập.",
      "C. THU THẬP CÁC THÔNG SỐ PHỤC VỤ ĐÁNH GIÁ",
      "D. Vận tốc lan truyền của mạch phụ thuộc chủ yếu vào khoảng cách thực tế của mạch vật lý."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: End-to-end delay gồm độ trễ xử lý, độ trễ hàng đợi, độ trễ truyền và độ trễ lan truyền."
  },
  {
    "id": "gt2025_c5_06",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. ĐỘ TRỄ TỪ ĐẦU ĐẾN CUỐI (END-TO-END DELAY)",
      "B. TP (Throughput): Thông lượng cho phép của kết nối",
      "C. DR (Data receive): Lượng dữ liệu nhận về trong thực tế",
      "D. Độ trễ xử lý là thời gian phân tích tiêu đề gói và quyết định nơi gửi gói."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Độ trễ xử lý là thời gian phân tích tiêu đề gói và quyết định nơi gửi gói."
  },
  {
    "id": "gt2025_c5_07",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. ĐỘ TRỄ LAN TRUYỀN (PROPAGATION DELAY)",
      "B. ĐỘ TRỄ TỪ ĐẦU ĐẾN CUỐI (END-TO-END DELAY)",
      "C. Độ trễ hàng đợi là thời gian gói chờ trong hàng đợi trước khi được truyền đi.",
      "D. Điều này có thể bao gồm xác minh lỗi, chẳng hạn như tính toán tổng kiểm tra tiêu đề IPv4, IPv6."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Độ trễ hàng đợi là thời gian gói chờ trong hàng đợi trước khi được truyền đi."
  },
  {
    "id": "gt2025_c5_08",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. DS (Data send): Lượng dữ liệu được gửi đi trong thực tế",
      "B. Giới thiệu quản lý hiệu suất hoạt động 5.2.",
      "C. Giới hạn số lượng gửi (tốc độ truyền) do mất mát hoặc chậm trễ trong mạch.",
      "D. Đánh giá các số liệu về hiệu suất của từng bộ phận trong hệ thống mạng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Giới thiệu quản lý hiệu suất hoạt động 5.2."
  },
  {
    "id": "gt2025_c5_09",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Giám sát và báo cáo hiệu suất hoạt động 5.3.",
      "B. ĐỘ TRỄ LAN TRUYỀN (PROPAGATION DELAY)",
      "C. packets per second (pps): gói trên giây.",
      "D. ĐIỀU CHỈNH HIỆU SUẤT CÁC THIẾT BỊ MẠNG"
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Giám sát và báo cáo hiệu suất hoạt động 5.3."
  },
  {
    "id": "gt2025_c5_10",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. GIỚI THIỆU QUẢN LÝ HIỆU SUẤT HOẠT ĐỘNG",
      "B. Khi một bit được 'đẩy' vào môi trường truyền dẫn, thời gian cần thiết để bit truyền đến cuối quỹ đạo vật lý của nó.",
      "C. Số bit tối đa có thể được truyền trên một đơn vị thời gian (ví dụ: bit trên giây)",
      "D. Điều chỉnh hiệu suất hoạt động 5.4."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Điều chỉnh hiệu suất hoạt động 5.4."
  },
  {
    "id": "gt2025_c5_11",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Nhận thấy được sự tăng trưởng sử dụng nào?",
      "B. Chỉ thực hiện được ở các đầu vì các nút trung gian ở cấp độ mạng không giao tiếp với TCP.",
      "C. GIỚI THIỆU QUẢN LÝ HIỆU SUẤT HOẠT ĐỘNG",
      "D. TCP (Giao thức điều khiển truyền) thực hiện kiểm soát luồng và tắc nghẽn."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: GIỚI THIỆU QUẢN LÝ HIỆU SUẤT HOẠT ĐỘNG"
  },
  {
    "id": "gt2025_c5_12",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Giới hạn số lượng (tốc độ) truyền vì thiết bị nhận không thể xử lý các gói ở cùng tốc độ với các gói đang đến.",
      "B. Đánh giá các số liệu về hiệu suất của từng bộ phận trong hệ thống mạng.",
      "C. Xảy ra do bộ đệm có kích thước hữu hạn.",
      "D. Hiệu suất mạng: là kết quả phân tích đánh giá các thống kê mạng để xác định chất lượng dịch vụ được cung cấp bởi các mạng máy tính."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Đánh giá các số liệu về hiệu suất của từng bộ phận trong hệ thống mạng."
  },
  {
    "id": "gt2025_c5_13",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Tối ưu hóa hiệu suất mạng để cung cấp các dịch vụ quan trọng.",
      "B. Ưu tiên, điều chỉnh lưu lượng và dịch vụ để tận dụng tài nguyên hệ thống.",
      "C. Mục tiêu là đánh giá số liệu hiệu suất, tối ưu mạng và phòng tránh tắc nghẽn bằng quản lý lưu lượng, băng thông.",
      "D. End-to-end delay gồm độ trễ xử lý, độ trễ hàng đợi, độ trễ truyền và độ trễ lan truyền."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Tối ưu hóa hiệu suất mạng để cung cấp các dịch vụ quan trọng."
  },
  {
    "id": "gt2025_c5_14",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Hiệu quả của các thuật toán được sử dụng để truy cập phương tiện.",
      "B. DS (Data send): Lượng dữ liệu được gửi đi trong thực tế",
      "C. Ping thường được dùng để đo tổng thời gian khứ hồi RTT.",
      "D. Phòng tránh các sự cố tắc nghẽn mạng bằng cách chủ động quản lý lưu lượng và băng thông mạng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Phòng tránh các sự cố tắc nghẽn mạng bằng cách chủ động quản lý lưu lượng và băng thông mạng."
  },
  {
    "id": "gt2025_c5_15",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Giới hạn số lượng gửi (tốc độ truyền) do mất mát hoặc chậm trễ trong mạch.",
      "B. Những số liệu dành riêng cho dịch vụ.",
      "C. Ưu tiên, điều chỉnh lưu lượng và dịch vụ để tận dụng tài nguyên hệ thống.",
      "D. Ping thường được dùng để đo tổng thời gian khứ hồi RTT."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Ưu tiên, điều chỉnh lưu lượng và dịch vụ để tận dụng tài nguyên hệ thống."
  },
  {
    "id": "gt2025_c5_16",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. GIỚI THIỆU QUẢN LÝ HIỆU SUẤT HOẠT ĐỘNG",
      "B. Tốc độ mạng: tốc độ truyền dữ liệu thực tế hoặc giới hạn lý thuyết cho băng thông mạng.",
      "C. IP (Giao thức Internet) triển khai dịch vụ không hướng đến kết nối.",
      "D. Độ trễ (delay) và phương sai độ trễ (jitter)"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Tốc độ mạng: tốc độ truyền dữ liệu thực tế hoặc giới hạn lý thuyết cho băng thông mạng."
  },
  {
    "id": "gt2025_c5_17",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Đơn vị đo tốc độ mạng là bit trên giây (bps).",
      "B. Nên đầu tư cập nhật vào những điểm nào?  Giải pháp",
      "C. Độ trễ xử lý là thời gian phân tích tiêu đề gói và quyết định nơi gửi gói.",
      "D. Ping thường được dùng để đo tổng thời gian khứ hồi RTT."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Đơn vị đo tốc độ mạng là bit trên giây (bps)."
  },
  {
    "id": "gt2025_c5_18",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. ĐIỀU CHỈNH BĂNG THÔNG DÀNH CHO ỨNG DỤNG",
      "B. Hiệu quả của các thuật toán được sử dụng để truy cập phương tiện.",
      "C. Đánh giá các số liệu về hiệu suất của từng bộ phận trong hệ thống mạng.",
      "D. Hiệu suất mạng: là kết quả phân tích đánh giá các thống kê mạng để xác định chất lượng dịch vụ được cung cấp bởi các mạng máy tính."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Hiệu suất mạng: là kết quả phân tích đánh giá các thống kê mạng để xác định chất lượng dịch vụ được cung cấp bởi các mạng máy tính."
  },
  {
    "id": "gt2025_c5_19",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Mục tiêu là đánh giá số liệu hiệu suất, tối ưu mạng và phòng tránh tắc nghẽn bằng quản lý lưu lượng, băng thông.",
      "B. Luôn luôn là một phần của dung lượng kênh trên lý thuyết.",
      "C. bit per second (bps): bit trên giây.",
      "D. Liên quan đến cáp mạng hoặc song điện từ."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: bit per second (bps): bit trên giây."
  },
  {
    "id": "gt2025_c5_20",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. ĐỘ TRỄ TỪ ĐẦU ĐẾN CUỐI (END-TO-END DELAY)",
      "B. packets per second (pps): gói trên giây.",
      "C. Điều chỉnh hiệu suất hoạt động 5.4.",
      "D. Thời gian cần thiết để đẩy tất cả các bit trong một gói lên phương tiện truyền dẫn đang được sử dụng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: packets per second (pps): gói trên giây."
  },
  {
    "id": "gt2025_c5_21",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Flows per second: lưu lượng mỗi giây.",
      "B. Chi phí bổ sung của các giao thức trong mỗi lớp.",
      "C. Vận tốc lan truyền của mạch phụ thuộc chủ yếu vào khoảng cách thực tế của mạch vật lý.",
      "D. Tối ưu hóa hiệu suất mạng để cung cấp các dịch vụ quan trọng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Flows per second: lưu lượng mỗi giây."
  },
  {
    "id": "gt2025_c5_22",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Hiệu suất mạng: là kết quả phân tích đánh giá các thống kê mạng để xác định chất lượng dịch vụ được cung cấp bởi các mạng máy tính.",
      "B. Quản lý hiệu suất mạng theo dõi hiệu suất các thành phần để phát hiện tắc nghẽn và đảm bảo hiệu suất yêu cầu.",
      "C. Thời gian cần thiết để phân tích tiêu đề gói và quyết định nơi gửi gói (ví dụ: quyết định định tuyến)",
      "D. Độ trễ (delay) và phương sai độ trễ (jitter)"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Độ trễ (delay) và phương sai độ trễ (jitter)"
  },
  {
    "id": "gt2025_c5_23",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Độ trễ hàng đợi là thời gian gói chờ trong hàng đợi trước khi được truyền đi.",
      "B. Tốc độ mạng: tốc độ truyền dữ liệu thực tế hoặc giới hạn lý thuyết cho băng thông mạng.",
      "C. NOMINAL CHANNEL CAPACITY – DUNG LƯỢNG KÊNH ĐỊNH MỨC",
      "D. Liên quan đến cáp mạng hoặc song điện từ."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: NOMINAL CHANNEL CAPACITY – DUNG LƯỢNG KÊNH ĐỊNH MỨC"
  },
  {
    "id": "gt2025_c5_24",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Xác định dung lượng thực tế đang sử dụng so với dung lượng kênh theo lý thuyết.",
      "B. Số bit tối đa có thể được truyền trên một đơn vị thời gian (ví dụ: bit trên giây)",
      "C. Giới hạn số lượng (tốc độ) truyền vì thiết bị nhận không thể xử lý các gói ở cùng tốc độ với các gói đang đến.",
      "D. Là thời gian cần thiết để truyền gói tin dọc theo toàn bộ đường dẫn của nó."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Số bit tối đa có thể được truyền trên một đơn vị thời gian (ví dụ: bit trên giây)"
  },
  {
    "id": "gt2025_c5_25",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Liên quan đến cáp mạng hoặc song điện từ.",
      "B. Tốc độ mạng: tốc độ truyền dữ liệu thực tế hoặc giới hạn lý thuyết cho băng thông mạng.",
      "C. Hiệu suất mạng: là kết quả phân tích đánh giá các thống kê mạng để xác định chất lượng dịch vụ được cung cấp bởi các mạng máy tính.",
      "D. Những số liệu dành riêng cho dịch vụ."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Liên quan đến cáp mạng hoặc song điện từ."
  },
  {
    "id": "gt2025_c5_26",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Độ trễ xử lý là thời gian phân tích tiêu đề gói và quyết định nơi gửi gói.",
      "B. Luôn luôn là một phần của dung lượng kênh trên lý thuyết.",
      "C. Khi một bit được 'đẩy' vào môi trường truyền dẫn, thời gian cần thiết để bit truyền đến cuối quỹ đạo vật lý của nó.",
      "D. Công suất xử lý của từng phần tử truyền tín hiệu trong mạng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Công suất xử lý của từng phần tử truyền tín hiệu trong mạng."
  },
  {
    "id": "gt2025_c5_27",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Đánh giá các số liệu về hiệu suất của từng bộ phận trong hệ thống mạng.",
      "B. Liên quan đến cáp mạng hoặc song điện từ.",
      "C. Hiệu quả của các thuật toán được sử dụng để truy cập phương tiện.",
      "D. Khi một bit được 'đẩy' vào môi trường truyền dẫn, thời gian cần thiết để bit truyền đến cuối quỹ đạo vật lý của nó."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Hiệu quả của các thuật toán được sử dụng để truy cập phương tiện."
  },
  {
    "id": "gt2025_c5_28",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Flows per second: lưu lượng mỗi giây.",
      "B. Luôn luôn là một phần của dung lượng kênh trên lý thuyết.",
      "C. Giới hạn số lượng gửi (tốc độ truyền) do mất mát hoặc chậm trễ trong mạch.",
      "D. Vận tốc lan truyền của mạch phụ thuộc chủ yếu vào khoảng cách thực tế của mạch vật lý."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Luôn luôn là một phần của dung lượng kênh trên lý thuyết."
  },
  {
    "id": "gt2025_c5_29",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Chi phí bổ sung của các giao thức trong mỗi lớp.",
      "B. Tốc độ mạng: tốc độ truyền dữ liệu thực tế hoặc giới hạn lý thuyết cho băng thông mạng.",
      "C. NOMINAL CHANNEL CAPACITY – DUNG LƯỢNG KÊNH ĐỊNH MỨC",
      "D. Xây dựng kế hoạch sử dụng trong tương lai."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Chi phí bổ sung của các giao thức trong mỗi lớp."
  },
  {
    "id": "gt2025_c5_30",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. DR (Data receive): Lượng dữ liệu nhận về trong thực tế",
      "B. Xây dựng kế hoạch sử dụng trong tương lai.",
      "C. Ping thường được dùng để đo tổng thời gian khứ hồi RTT.",
      "D. Xác định dung lượng thực tế đang sử dụng so với dung lượng kênh theo lý thuyết."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Xác định dung lượng thực tế đang sử dụng so với dung lượng kênh theo lý thuyết."
  },
  {
    "id": "gt2025_c5_31",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. IP (Giao thức Internet) triển khai dịch vụ không hướng đến kết nối.",
      "B. Độ trễ xử lý là thời gian phân tích tiêu đề gói và quyết định nơi gửi gói.",
      "C. Xây dựng kế hoạch sử dụng trong tương lai.",
      "D. TCP (Giao thức điều khiển truyền) thực hiện kiểm soát luồng và tắc nghẽn."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Xây dựng kế hoạch sử dụng trong tương lai."
  },
  {
    "id": "gt2025_c5_32",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Khi một gói đến bộ đệm đầy, nó sẽ bị loại bỏ.",
      "B. Nhận thấy được sự tăng trưởng sử dụng nào?",
      "C. Phòng tránh các sự cố tắc nghẽn mạng bằng cách chủ động quản lý lưu lượng và băng thông mạng.",
      "D. Liên quan đến cáp mạng hoặc song điện từ."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Nhận thấy được sự tăng trưởng sử dụng nào?"
  },
  {
    "id": "gt2025_c5_33",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Nên đầu tư cập nhật vào những điểm nào?  Giải pháp",
      "B. Tối ưu hóa hiệu suất mạng để cung cấp các dịch vụ quan trọng.",
      "C. Điều chỉnh hiệu suất hoạt động 5.4.",
      "D. Số lượng gói chờ trong hàng đợi sẽ phụ thuộc vào cường độ lưu lượng và loại lưu lượng (bùng nổ hoặc liên tục)."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Nên đầu tư cập nhật vào những điểm nào?  Giải pháp"
  },
  {
    "id": "gt2025_c5_34",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Chi phí bổ sung của các giao thức trong mỗi lớp.",
      "B. Ping thường được dùng để đo tổng thời gian khứ hồi RTT.",
      "C. bit per second (bps): bit trên giây.",
      "D. ĐỘ TRỄ TỪ ĐẦU ĐẾN CUỐI (END-TO-END DELAY)"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: ĐỘ TRỄ TỪ ĐẦU ĐẾN CUỐI (END-TO-END DELAY)"
  },
  {
    "id": "gt2025_c5_35",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. ĐIỀU CHỈNH BĂNG THÔNG DÀNH CHO ỨNG DỤNG",
      "B. Trong phần lớn các trường hợp, tốc độ này gần bằng tốc độ ánh sáng.",
      "C. Là thời gian cần thiết để truyền gói tin dọc theo toàn bộ đường dẫn của nó.",
      "D. NOMINAL CHANNEL CAPACITY – DUNG LƯỢNG KÊNH ĐỊNH MỨC"
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Là thời gian cần thiết để truyền gói tin dọc theo toàn bộ đường dẫn của nó."
  },
  {
    "id": "gt2025_c5_36",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. ĐIỀU CHỈNH BĂNG THÔNG DÀNH CHO ỨNG DỤNG",
      "B. Là phép đo phổ biến nhất sử dụng ping cho tổng thời gian khứ hồi (RTT).",
      "C. Những số liệu dành riêng cho dịch vụ.",
      "D. TCP (Giao thức điều khiển truyền) thực hiện kiểm soát luồng và tắc nghẽn."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Là phép đo phổ biến nhất sử dụng ping cho tổng thời gian khứ hồi (RTT)."
  },
  {
    "id": "gt2025_c5_37",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Thời gian cần thiết để phân tích tiêu đề gói và quyết định nơi gửi gói (ví dụ: quyết định định tuyến)",
      "B. Ưu tiên, điều chỉnh lưu lượng và dịch vụ để tận dụng tài nguyên hệ thống.",
      "C. ĐIỀU CHỈNH BĂNG THÔNG DÀNH CHO ỨNG DỤNG",
      "D. Điều này có thể bao gồm xác minh lỗi, chẳng hạn như tính toán tổng kiểm tra tiêu đề IPv4, IPv6."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Thời gian cần thiết để phân tích tiêu đề gói và quyết định nơi gửi gói (ví dụ: quyết định định tuyến)"
  },
  {
    "id": "gt2025_c5_38",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Khả năng sử dụng mạng: NU = 100*(DS + DR) / (TP * ST)",
      "B. Giới hạn số lượng gửi (tốc độ truyền) do mất mát hoặc chậm trễ trong mạch.",
      "C. Không có cơ chế nào trong giao thức IP xử lý cho trường hợp gói bị mất.",
      "D. Bên trong bộ định tuyến, điều này phụ thuộc vào số lượng mục trong bảng định tuyến, việc triển khai cấu trúc dữ liệu, phần cứng đang sử dụng, v.v."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Bên trong bộ định tuyến, điều này phụ thuộc vào số lượng mục trong bảng định tuyến, việc triển khai cấu trúc dữ liệu, phần cứng đang sử dụng, v.v."
  },
  {
    "id": "gt2025_c5_39",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Nên đầu tư cập nhật vào những điểm nào?  Giải pháp",
      "B. ĐIỀU CHỈNH BĂNG THÔNG DÀNH CHO ỨNG DỤNG",
      "C. Điều này có thể bao gồm xác minh lỗi, chẳng hạn như tính toán tổng kiểm tra tiêu đề IPv4, IPv6.",
      "D. Giới thiệu quản lý hiệu suất hoạt động 5.2."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Điều này có thể bao gồm xác minh lỗi, chẳng hạn như tính toán tổng kiểm tra tiêu đề IPv4, IPv6."
  },
  {
    "id": "gt2025_c5_40",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Giá trị kinh tế mà dịch vụ mang lại và các giá trị khác.",
      "B. Thời gian một gói được xếp vào hàng đợi cho đến khi nó được truyền đi.",
      "C. DS (Data send): Lượng dữ liệu được gửi đi trong thực tế",
      "D. Phòng tránh các sự cố tắc nghẽn mạng bằng cách chủ động quản lý lưu lượng và băng thông mạng."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Thời gian một gói được xếp vào hàng đợi cho đến khi nó được truyền đi."
  },
  {
    "id": "gt2025_c5_41",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Số lượng gói chờ trong hàng đợi sẽ phụ thuộc vào cường độ lưu lượng và loại lưu lượng (bùng nổ hoặc liên tục).",
      "B. Đánh giá các số liệu về hiệu suất của từng bộ phận trong hệ thống mạng.",
      "C. Nên đầu tư cập nhật vào những điểm nào?  Giải pháp",
      "D. End-to-end delay gồm độ trễ xử lý, độ trễ hàng đợi, độ trễ truyền và độ trễ lan truyền."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Số lượng gói chờ trong hàng đợi sẽ phụ thuộc vào cường độ lưu lượng và loại lưu lượng (bùng nổ hoặc liên tục)."
  },
  {
    "id": "gt2025_c5_42",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Độ trễ xử lý là thời gian phân tích tiêu đề gói và quyết định nơi gửi gói.",
      "B. Tốc độ mạng: tốc độ truyền dữ liệu thực tế hoặc giới hạn lý thuyết cho băng thông mạng.",
      "C. Giới hạn số lượng gửi (tốc độ truyền) do mất mát hoặc chậm trễ trong mạch.",
      "D. Các thuật toán hàng đợi của bộ định tuyến cố gắng điều chỉnh độ trễ cho phù hợp với các ưu tiên cụ thể hoặc áp đặt độ trễ như nhau cho tất cả lưu lượng truy cập."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Các thuật toán hàng đợi của bộ định tuyến cố gắng điều chỉnh độ trễ cho phù hợp với các ưu tiên cụ thể hoặc áp đặt độ trễ như nhau cho tất cả lưu lượng truy cập."
  },
  {
    "id": "gt2025_c5_43",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Liên quan đến cáp mạng hoặc song điện từ.",
      "B. Độ trễ (delay) và phương sai độ trễ (jitter)",
      "C. Thời gian cần thiết để đẩy tất cả các bit trong một gói lên phương tiện truyền dẫn đang được sử dụng.",
      "D. THU THẬP CÁC THÔNG SỐ PHỤC VỤ ĐÁNH GIÁ"
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Thời gian cần thiết để đẩy tất cả các bit trong một gói lên phương tiện truyền dẫn đang được sử dụng."
  },
  {
    "id": "gt2025_c5_44",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. End-to-end delay gồm độ trễ xử lý, độ trễ hàng đợi, độ trễ truyền và độ trễ lan truyền.",
      "B. ĐỘ TRỄ LAN TRUYỀN (PROPAGATION DELAY)",
      "C. THU THẬP CÁC THÔNG SỐ PHỤC VỤ ĐÁNH GIÁ",
      "D. IP (Giao thức Internet) triển khai dịch vụ không hướng đến kết nối."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: ĐỘ TRỄ LAN TRUYỀN (PROPAGATION DELAY)"
  },
  {
    "id": "gt2025_c5_45",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Khi một bit được 'đẩy' vào môi trường truyền dẫn, thời gian cần thiết để bit truyền đến cuối quỹ đạo vật lý của nó.",
      "B. Phòng tránh các sự cố tắc nghẽn mạng bằng cách chủ động quản lý lưu lượng và băng thông mạng.",
      "C. ST (Sample Time): Thời gian hoạt động.",
      "D. Trong phần lớn các trường hợp, tốc độ này gần bằng tốc độ ánh sáng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Khi một bit được 'đẩy' vào môi trường truyền dẫn, thời gian cần thiết để bit truyền đến cuối quỹ đạo vật lý của nó."
  },
  {
    "id": "gt2025_c5_46",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Giám sát và báo cáo hiệu suất hoạt động 5.3.",
      "B. Độ trễ (delay) và phương sai độ trễ (jitter)",
      "C. Hiệu quả của các thuật toán được sử dụng để truy cập phương tiện.",
      "D. Vận tốc lan truyền của mạch phụ thuộc chủ yếu vào khoảng cách thực tế của mạch vật lý."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Vận tốc lan truyền của mạch phụ thuộc chủ yếu vào khoảng cách thực tế của mạch vật lý."
  },
  {
    "id": "gt2025_c5_47",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. bit per second (bps): bit trên giây.",
      "B. Vận tốc lan truyền của mạch phụ thuộc chủ yếu vào khoảng cách thực tế của mạch vật lý.",
      "C. Trong phần lớn các trường hợp, tốc độ này gần bằng tốc độ ánh sáng.",
      "D. TP (Throughput): Thông lượng cho phép của kết nối"
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Trong phần lớn các trường hợp, tốc độ này gần bằng tốc độ ánh sáng."
  },
  {
    "id": "gt2025_c5_48",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. packets per second (pps): gói trên giây.",
      "B. Xảy ra do bộ đệm có kích thước hữu hạn.",
      "C. Độ trễ (delay) và phương sai độ trễ (jitter)",
      "D. ĐIỀU CHỈNH HIỆU SUẤT CÁC THIẾT BỊ MẠNG"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Xảy ra do bộ đệm có kích thước hữu hạn."
  },
  {
    "id": "gt2025_c5_49",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 5: Quản lý hiệu suất hoạt động?",
    "options": [
      "A. Khi một gói đến bộ đệm đầy, nó sẽ bị loại bỏ.",
      "B. THU THẬP CÁC THÔNG SỐ PHỤC VỤ ĐÁNH GIÁ",
      "C. Xảy ra do bộ đệm có kích thước hữu hạn.",
      "D. bit per second (bps): bit trên giây."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Khi một gói đến bộ đệm đầy, nó sẽ bị loại bỏ."
  },
  {
    "id": "gt2025_c5_50",
    "chapter": 5,
    "chapterName": "Chương 5: Quản lý hiệu suất hoạt động",
    "question": "Khi ôn Chương 5: Quản lý hiệu suất hoạt động, nhận định nào đúng nhất?",
    "options": [
      "A. Không có cơ chế nào trong giao thức IP xử lý cho trường hợp gói bị mất.",
      "B. Những số liệu dành riêng cho dịch vụ.",
      "C. Số liệu người dùng dịch vụ và thời gian sử dụng.",
      "D. Việc mất gói, nếu phải sửa, sẽ được giải quyết ở các cấp cao hơn trong ngăn xếp mạng (lớp vận chuyển hoặc lớp ứng dụng)"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Việc mất gói, nếu phải sửa, sẽ được giải quyết ở các cấp cao hơn trong ngăn xếp mạng (lớp vận chuyển hoặc lớp ứng dụng)"
  },
  {
    "id": "gt2025_c6_01",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Người dùng cung cấp bằng chứng là danh định đó là đúng và phù hợp với mình.",
      "B. Packet filtering: Việc Kiểm soát truy nhập thông tin dựa vào địa chỉ nguồn và địa chỉ đích của gói tin gửi đến",
      "C. Kiểm soát truy cập trong giáo trình dựa trên định danh và xác thực.",
      "D. Nâng cao hiểu biết, ý thức và kỹ năng an toàn bảo mật thông tin"
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Kiểm soát truy cập trong giáo trình dựa trên định danh và xác thực."
  },
  {
    "id": "gt2025_c6_02",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Đặt mật khẩu truy cập bằng chuỗi ký tự",
      "B. Định danh giúp tìm kiếm sự tồn tại và quyền hạn của người dùng.",
      "C. Nâng cao hiểu biết, ý thức và kỹ năng an toàn bảo mật thông tin",
      "D. Signature-Based: Đây là các IDS hoạt động dựa trên chữ ký, giám sát các gói tin trên mạng tương tự như cách phần mềm diệt virus hoạt động."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Định danh giúp tìm kiếm sự tồn tại và quyền hạn của người dùng."
  },
  {
    "id": "gt2025_c6_03",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Xác thực chứng minh danh định là hợp lệ và quyết định quyền truy cập tài nguyên.",
      "B. VPN sử dụng mã hóa để giữ bí mật những thông tin này, đặc biệt là khi bạn kết nối qua mạng Wi-Fi công cộng.",
      "C. NIDS được sử dụng để giám sát traffic đến và đi từ tất cả các thiết bị trên mạng.",
      "D. Người dùng cung cấp bằng chứng là danh định đó là đúng và phù hợp với mình."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Xác thực chứng minh danh định là hợp lệ và quyết định quyền truy cập tài nguyên."
  },
  {
    "id": "gt2025_c6_04",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. VPN là mạng riêng ảo tạo kết nối an toàn khi tham gia mạng công cộng như Internet.",
      "B. HIDS chỉ giám sát các gói dữ liệu inbound và outbound từ thiết bị hoặc những hành động đáng ngờ tại cấp truy cập nội bộ.",
      "C. VPN cũng có thể hoạt động như một cơ chế tắt, hủy bỏ các chương trình được chọn trước đó phòng khi có hoạt động đáng ngờ trên Internet.",
      "D. Firewall là hệ thống hoặc nhóm hệ thống kiểm soát quyền truy cập giữa hai hoặc nhiều vùng mạng."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Firewall là hệ thống hoặc nhóm hệ thống kiểm soát quyền truy cập giữa hai hoặc nhiều vùng mạng."
  },
  {
    "id": "gt2025_c6_05",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. HIDS chỉ giám sát các gói dữ liệu inbound và outbound từ thiết bị hoặc những hành động đáng ngờ tại cấp truy cập nội bộ.",
      "B. VPN sử dụng mã hóa để giữ bí mật những thông tin này, đặc biệt là khi bạn kết nối qua mạng Wi-Fi công cộng.",
      "C. Packet filtering kiểm soát truy nhập thông tin dựa trên thuộc tính của gói tin.",
      "D. VPN hỗ trợ quyền riêng tư, tính ẩn danh và tính bảo mật."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Packet filtering kiểm soát truy nhập thông tin dựa trên thuộc tính của gói tin."
  },
  {
    "id": "gt2025_c6_06",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. HIDS chỉ giám sát các gói dữ liệu inbound và outbound từ thiết bị hoặc những hành động đáng ngờ tại cấp truy cập nội bộ.",
      "B. VPN là mạng riêng ảo tạo kết nối an toàn khi tham gia mạng công cộng như Internet.",
      "C. Đặt mật khẩu truy cập bằng chuỗi ký tự",
      "D. Những tính năng trên cho phép các công ty cấp quyền truy cập từ xa cho người dùng được ủy quyền thuộc mạng lưới kinh doanh của họ."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: VPN là mạng riêng ảo tạo kết nối an toàn khi tham gia mạng công cộng như Internet."
  },
  {
    "id": "gt2025_c6_07",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. VPN hỗ trợ quyền riêng tư, tính ẩn danh và tính bảo mật.",
      "B. Việc này làm giảm khả năng dữ liệu bị xâm phạm.",
      "C. Điểm cộng lớn nhất của NIDS là có thể quét tất cả traffic inbound và outbound, nhưng việc này có thể làm giảm tốc độ chung của mạng.",
      "D. Phương pháp phát hiện dựa trên hành vi (hay còn gọi là dựa trên heuristics) sẽ đánh giá một đối tượng dựa trên hành vi của nó."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: VPN hỗ trợ quyền riêng tư, tính ẩn danh và tính bảo mật."
  },
  {
    "id": "gt2025_c6_08",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Kiểm soát truy cập trong giáo trình dựa trên định danh và xác thực.",
      "B. CÁC TÍNH NĂNG CỦA TƯỜNG LỬA CISCO (1)",
      "C. Anomaly-Based sẽ giám sát traffic mạng và so sánh với baseline đã được thiết lập từ trước.",
      "D. IDS xem lưu lượng, sao chép và cảnh báo vi phạm; IPS hướng tới phòng chống và ngăn chặn xâm nhập."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: IDS xem lưu lượng, sao chép và cảnh báo vi phạm; IPS hướng tới phòng chống và ngăn chặn xâm nhập."
  },
  {
    "id": "gt2025_c6_09",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (2)",
      "B. NIDS được sử dụng để giám sát traffic đến và đi từ tất cả các thiết bị trên mạng.",
      "C. Kiểm soát truy cập bằng định danh và xác thực.",
      "D. Điểm cộng lớn nhất của NIDS là có thể quét tất cả traffic inbound và outbound, nhưng việc này có thể làm giảm tốc độ chung của mạng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Kiểm soát truy cập bằng định danh và xác thực."
  },
  {
    "id": "gt2025_c6_10",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. PHÁT HIỆN MÃ ĐỘC DỰA TRÊN KỸ THUẬT HỌC MÁY",
      "B. Người dùng cung cấp danh định của mình cho hệ thống, có được từ hoạt động đăng ký, tạo tài khoản.",
      "C. Các tập đoàn lớn, các cơ sở giáo dục và cơ quan chính phủ sử dụng công nghệ VPN để cho phép người dùng từ xa kết nối an toàn đến mạng riêng của cơ quan mình.",
      "D. Phương pháp này được áp dụng để phát hiện các loại mã độc có khả năng thay đổi chữ ký (đa hình) hoặc các loại mã độc mới (zero-day)."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Người dùng cung cấp danh định của mình cho hệ thống, có được từ hoạt động đăng ký, tạo tài khoản."
  },
  {
    "id": "gt2025_c6_11",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Mục đích: Tìm kiếm sự tồn tại và quyền hạn cho người dùng",
      "B. VPN là mạng riêng ảo tạo kết nối an toàn khi tham gia mạng công cộng như Internet.",
      "C. Những gì bạn có (Something you have)  Thẻ thông minh (smart card)  Địa chỉ MAC, địa chỉ IP",
      "D. Học máy ứng dụng trong lĩnh vực mã độc để giải quyết hai bài toán lớn là phân loại mã độc và phát hiện mã độc"
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Mục đích: Tìm kiếm sự tồn tại và quyền hạn cho người dùng"
  },
  {
    "id": "gt2025_c6_12",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Kiểm soát truy cập trong giáo trình dựa trên định danh và xác thực.",
      "B. Tính bảo mật: Dịch vụ VPN sử dụng mật mã để bảo vệ kết nối Internet của bạn khỏi những truy cập trái phép.",
      "C. Luật khớp đầu tiên trong bảng: Mảng luật được giả sử là một danh sách tuyến tính của các luật, được đánh số thứ tự từ 1 đến n.",
      "D. Người dùng cung cấp bằng chứng là danh định đó là đúng và phù hợp với mình."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Người dùng cung cấp bằng chứng là danh định đó là đúng và phù hợp với mình."
  },
  {
    "id": "gt2025_c6_13",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Các tập đoàn lớn, các cơ sở giáo dục và cơ quan chính phủ sử dụng công nghệ VPN để cho phép người dùng từ xa kết nối an toàn đến mạng riêng của cơ quan mình.",
      "B. Đặt mật khẩu truy cập bằng chuỗi ký tự",
      "C. Mục đích: Chứng minh danh định là hợp lệ và phù hợp với người dùng.",
      "D. Firewall là hệ thống hoặc nhóm hệ thống kiểm soát quyền truy cập giữa hai hoặc nhiều vùng mạng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Mục đích: Chứng minh danh định là hợp lệ và phù hợp với người dùng."
  },
  {
    "id": "gt2025_c6_14",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. VPN sử dụng mã hóa để giữ bí mật những thông tin này, đặc biệt là khi bạn kết nối qua mạng Wi-Fi công cộng.",
      "B. Những gì bạn biết (Something you know) Ví dụ: Password Số PIN (Personal Identification Number)",
      "C. Những tính năng trên cho phép các công ty cấp quyền truy cập từ xa cho người dùng được ủy quyền thuộc mạng lưới kinh doanh của họ.",
      "D. Đây là bài toán phân loại tập tin với hai nhãn là mã độc và lành tính."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Những gì bạn biết (Something you know) Ví dụ: Password Số PIN (Personal Identification Number)"
  },
  {
    "id": "gt2025_c6_15",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Những gì bạn có (Something you have)  Thẻ thông minh (smart card)  Địa chỉ MAC, địa chỉ IP",
      "B. HIDS chỉ giám sát các gói dữ liệu inbound và outbound từ thiết bị hoặc những hành động đáng ngờ tại cấp truy cập nội bộ.",
      "C. Đặt mật khẩu truy cập bằng chuỗi ký tự",
      "D. IDS xem lưu lượng, sao chép và cảnh báo vi phạm; IPS hướng tới phòng chống và ngăn chặn xâm nhập."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Những gì bạn có (Something you have)  Thẻ thông minh (smart card)  Địa chỉ MAC, địa chỉ IP"
  },
  {
    "id": "gt2025_c6_16",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Chữ ký ở đây có thể là chuỗi giá trị băm của tệp tin mã độc (MD5 hoặc SHA1), một chuỗi cố định nào đó trong tập tin hoặc metadata của tệp tin mã độc đó.",
      "B. Tất cả các trang web trên Internet theo dõi dữ liệu này bằng cookie và công nghệ tương tự.",
      "C. Phát hiện mã độc là khâu quan trọng trong quy trình ứng cứu, xử lý sự cố của bất kỳ hệ thống hay cơ quan, doanh nghiệp nào.",
      "D. Những gì là chính bạn (Something you are) Sinh trắc học: khuôn mặt, tròng mắt, hình học bàn tay, vân tay"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Những gì là chính bạn (Something you are) Sinh trắc học: khuôn mặt, tròng mắt, hình học bàn tay, vân tay"
  },
  {
    "id": "gt2025_c6_17",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. IDS xem lưu lượng, sao chép và cảnh báo vi phạm; IPS hướng tới phòng chống và ngăn chặn xâm nhập.",
      "B. Phương pháp này được áp dụng để phát hiện các loại mã độc có khả năng thay đổi chữ ký (đa hình) hoặc các loại mã độc mới (zero-day).",
      "C. Firewall là một hệ thống hoặc một nhóm các hệ thống Kiểm soát quyền truy cập giữa hai hoặc nhiều vùng mạng.",
      "D. Việc này làm giảm khả năng dữ liệu bị xâm phạm."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Firewall là một hệ thống hoặc một nhóm các hệ thống Kiểm soát quyền truy cập giữa hai hoặc nhiều vùng mạng."
  },
  {
    "id": "gt2025_c6_18",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Phân tích động là việc phân tích các hành vi, chức năng của mã độc bằng cách thực thi phần mềm độc hại.",
      "B. Packet filtering: Việc Kiểm soát truy nhập thông tin dựa vào địa chỉ nguồn và địa chỉ đích của gói tin gửi đến",
      "C. Mục đích: Tìm kiếm sự tồn tại và quyền hạn cho người dùng",
      "D. Anomaly-Based sẽ giám sát traffic mạng và so sánh với baseline đã được thiết lập từ trước."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Packet filtering: Việc Kiểm soát truy nhập thông tin dựa vào địa chỉ nguồn và địa chỉ đích của gói tin gửi đến"
  },
  {
    "id": "gt2025_c6_19",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Proxy server: Các kết nối từ được thông qua một máy chủ đại diện trung gian",
      "B. Những tính năng trên cho phép các công ty cấp quyền truy cập từ xa cho người dùng được ủy quyền thuộc mạng lưới kinh doanh của họ.",
      "C. Xác thực người dùng: Các port cần cho kết nối sẽ được mở một cách an toàn theo từng ứng dụng.",
      "D. HIDS chỉ giám sát các gói dữ liệu inbound và outbound từ thiết bị hoặc những hành động đáng ngờ tại cấp truy cập nội bộ."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Proxy server: Các kết nối từ được thông qua một máy chủ đại diện trung gian"
  },
  {
    "id": "gt2025_c6_20",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Những hành động sau đó sẽ phụ thuộc vào người quản trị.",
      "B. VPN hỗ trợ quyền riêng tư, tính ẩn danh và tính bảo mật.",
      "C. Nâng cao hiểu biết, ý thức và kỹ năng an toàn bảo mật thông tin",
      "D. CÁC TÍNH NĂNG CỦA TƯỜNG LỬA CISCO (1)"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: CÁC TÍNH NĂNG CỦA TƯỜNG LỬA CISCO (1)"
  },
  {
    "id": "gt2025_c6_21",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Điểm cộng lớn nhất của NIDS là có thể quét tất cả traffic inbound và outbound, nhưng việc này có thể làm giảm tốc độ chung của mạng.",
      "B. VPN cũng có thể hoạt động như một cơ chế tắt, hủy bỏ các chương trình được chọn trước đó phòng khi có hoạt động đáng ngờ trên Internet.",
      "C. Hệ điều hành riêng biệt: loại trừ được các nguy cơ bảo mật khi sử dụng chung với các hệ điều hành khác",
      "D. Transparent firewalls: Có khả năng triển khai thiết bị bảo mật ở layer 2, cho phép bảo mật từ layer 2 đến layer 7 và hoạt động như một thiết bị layer 2"
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Hệ điều hành riêng biệt: loại trừ được các nguy cơ bảo mật khi sử dụng chung với các hệ điều hành khác"
  },
  {
    "id": "gt2025_c6_22",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Kết nối VPN sẽ ẩn địa chỉ IP của bạn, để bạn được ẩn danh trên Internet.",
      "B. Xác thực người dùng: Các port cần cho kết nối sẽ được mở một cách an toàn theo từng ứng dụng.",
      "C. Các tập đoàn lớn, các cơ sở giáo dục và cơ quan chính phủ sử dụng công nghệ VPN để cho phép người dùng từ xa kết nối an toàn đến mạng riêng của cơ quan mình.",
      "D. CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (2)"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Xác thực người dùng: Các port cần cho kết nối sẽ được mở một cách an toàn theo từng ứng dụng."
  },
  {
    "id": "gt2025_c6_23",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. CÁC TÍNH NĂNG CỦA TƯỜNG LỬA CISCO (2)",
      "B. Mỗi hành vi có thể không nguy hiểm nhưng kết hợp với nhau có thể làm tăng độ đáng ngờ của đối tượng.",
      "C. Luật khớp ưu tiên cao nhất: Mỗi luật trong bảng được gắn một độ ưu tiên khác nhau.",
      "D. Về phương pháp phân tích, có hai phương pháp phân tích mã độc là phân tích tĩnh và phân tích động."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: CÁC TÍNH NĂNG CỦA TƯỜNG LỬA CISCO (2)"
  },
  {
    "id": "gt2025_c6_24",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Những tính năng trên cho phép các công ty cấp quyền truy cập từ xa cho người dùng được ủy quyền thuộc mạng lưới kinh doanh của họ.",
      "B. Phát hiện mã độc là khâu quan trọng trong quy trình ứng cứu, xử lý sự cố của bất kỳ hệ thống hay cơ quan, doanh nghiệp nào.",
      "C. Nâng cao hiểu biết, ý thức và kỹ năng an toàn bảo mật thông tin",
      "D. Mạng riêng ảo (VPN): cung cấp cơ chế thiết lập mạng riêng ảo."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Mạng riêng ảo (VPN): cung cấp cơ chế thiết lập mạng riêng ảo."
  },
  {
    "id": "gt2025_c6_25",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Proxy server: Các kết nối từ được thông qua một máy chủ đại diện trung gian",
      "B. Luật khớp ưu tiên cao nhất: Mỗi luật trong bảng được gắn một độ ưu tiên khác nhau.",
      "C. Các ngữ cảnh bảo mật (các firewall ảo) : Cung cấp khả năng tạo nhiều firewall ảo trên một thiết bị firewall thật",
      "D. Khi kiểm tra một tệp tin bất kỳ trong hệ thống, phần mềm antivirus sẽ phân tích tệp tin đó, nếu phát hiện chữ ký khớp với cơ sở dữ liệu sẽ thông báo đây là tệp tin đáng ngờ."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Các ngữ cảnh bảo mật (các firewall ảo) : Cung cấp khả năng tạo nhiều firewall ảo trên một thiết bị firewall thật"
  },
  {
    "id": "gt2025_c6_26",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. PHÁT HIỆN MÃ ĐỘC DỰA TRÊN KỸ THUẬT HỌC MÁY",
      "B. Stateful failover: Stateful failover: duy trì trạng thái kết nối khi một thiết bị kết nối chính hỏng.",
      "C. CÁC TÍNH NĂNG CỦA TƯỜNG LỬA CISCO (1)",
      "D. Hệ điều hành riêng biệt: loại trừ được các nguy cơ bảo mật khi sử dụng chung với các hệ điều hành khác"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Stateful failover: Stateful failover: duy trì trạng thái kết nối khi một thiết bị kết nối chính hỏng."
  },
  {
    "id": "gt2025_c6_27",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Transparent firewalls: Có khả năng triển khai thiết bị bảo mật ở layer 2, cho phép bảo mật từ layer 2 đến layer 7 và hoạt động như một thiết bị layer 2",
      "B. Khi kiểm tra một tệp tin bất kỳ trong hệ thống, phần mềm antivirus sẽ phân tích tệp tin đó, nếu phát hiện chữ ký khớp với cơ sở dữ liệu sẽ thông báo đây là tệp tin đáng ngờ.",
      "C. Các tập đoàn lớn, các cơ sở giáo dục và cơ quan chính phủ sử dụng công nghệ VPN để cho phép người dùng từ xa kết nối an toàn đến mạng riêng của cơ quan mình.",
      "D. Luật khớp đầu tiên trong bảng: Mảng luật được giả sử là một danh sách tuyến tính của các luật, được đánh số thứ tự từ 1 đến n."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Transparent firewalls: Có khả năng triển khai thiết bị bảo mật ở layer 2, cho phép bảo mật từ layer 2 đến layer 7 và hoạt động như một thiết bị layer 2"
  },
  {
    "id": "gt2025_c6_28",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Định danh giúp tìm kiếm sự tồn tại và quyền hạn của người dùng.",
      "B. Người dùng cung cấp danh định của mình cho hệ thống, có được từ hoạt động đăng ký, tạo tài khoản.",
      "C. Mục đích: Chứng minh danh định là hợp lệ và phù hợp với người dùng.",
      "D. Luật khớp đầu tiên trong bảng: Mảng luật được giả sử là một danh sách tuyến tính của các luật, được đánh số thứ tự từ 1 đến n."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Luật khớp đầu tiên trong bảng: Mảng luật được giả sử là một danh sách tuyến tính của các luật, được đánh số thứ tự từ 1 đến n."
  },
  {
    "id": "gt2025_c6_29",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Người dùng cung cấp danh định của mình cho hệ thống, có được từ hoạt động đăng ký, tạo tài khoản.",
      "B. Các ngữ cảnh bảo mật (các firewall ảo) : Cung cấp khả năng tạo nhiều firewall ảo trên một thiết bị firewall thật",
      "C. Luật khớp ưu tiên cao nhất: Mỗi luật trong bảng được gắn một độ ưu tiên khác nhau.",
      "D. Stateful failover: Stateful failover: duy trì trạng thái kết nối khi một thiết bị kết nối chính hỏng."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Luật khớp ưu tiên cao nhất: Mỗi luật trong bảng được gắn một độ ưu tiên khác nhau."
  },
  {
    "id": "gt2025_c6_30",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. HIDS: Host Intrusion Detection Systems, hệ thống phát hiện xâm nhập này hoạt động trên tất cả các thiết bị trong hệ thống có thể kết nối Internet.",
      "B. Khi chọn ra được tập hợp các luật khớp với gói tin, luật nào có độ ưu tiên cao hơn sẽ được sử dụng.",
      "C. Khi kiểm tra một tệp tin bất kỳ trong hệ thống, phần mềm antivirus sẽ phân tích tệp tin đó, nếu phát hiện chữ ký khớp với cơ sở dữ liệu sẽ thông báo đây là tệp tin đáng ngờ.",
      "D. Phát hiện mã độc là khâu quan trọng trong quy trình ứng cứu, xử lý sự cố của bất kỳ hệ thống hay cơ quan, doanh nghiệp nào."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Khi chọn ra được tập hợp các luật khớp với gói tin, luật nào có độ ưu tiên cao hơn sẽ được sử dụng."
  },
  {
    "id": "gt2025_c6_31",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Hệ thống phát hiện xâm nhập - IDS (Intrusion Detection Systems) là phần mềm hoặc công cụ giúp bảo mật hệ thống và cảnh báo lỗi khi có các hành vi đáng ngờ xâm nhập vào hệ thống.",
      "B. Phát hiện mã độc dựa trên chữ ký là phương pháp dựa trên các thông tin về mã độc (signatures) đã được định nghĩa sẵn.",
      "C. Chữ ký ở đây có thể là chuỗi giá trị băm của tệp tin mã độc (MD5 hoặc SHA1), một chuỗi cố định nào đó trong tập tin hoặc metadata của tệp tin mã độc đó.",
      "D. NIDS: Network Intrusion Detection Systems thường được bố trí tại những điểm dễ bị tấn công trong hệ thống."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Hệ thống phát hiện xâm nhập - IDS (Intrusion Detection Systems) là phần mềm hoặc công cụ giúp bảo mật hệ thống và cảnh báo lỗi khi có các hành vi đáng ngờ xâm nhập vào hệ thống."
  },
  {
    "id": "gt2025_c6_32",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (3)",
      "B. Đặt mật khẩu truy cập bằng chuỗi ký tự",
      "C. CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (2)",
      "D. CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (1)"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (1)"
  },
  {
    "id": "gt2025_c6_33",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. HIDS chỉ giám sát các gói dữ liệu inbound và outbound từ thiết bị hoặc những hành động đáng ngờ tại cấp truy cập nội bộ.",
      "B. Mục đích: Chứng minh danh định là hợp lệ và phù hợp với người dùng.",
      "C. NIDS: Network Intrusion Detection Systems thường được bố trí tại những điểm dễ bị tấn công trong hệ thống.",
      "D. Tính bảo mật: Dịch vụ VPN sử dụng mật mã để bảo vệ kết nối Internet của bạn khỏi những truy cập trái phép."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: NIDS: Network Intrusion Detection Systems thường được bố trí tại những điểm dễ bị tấn công trong hệ thống."
  },
  {
    "id": "gt2025_c6_34",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Đây là bài toán phân loại tập tin với hai nhãn là mã độc và lành tính.",
      "B. NIDS được sử dụng để giám sát traffic đến và đi từ tất cả các thiết bị trên mạng.",
      "C. Signature-Based: Đây là các IDS hoạt động dựa trên chữ ký, giám sát các gói tin trên mạng tương tự như cách phần mềm diệt virus hoạt động.",
      "D. Anomaly-Based: IDS này được sử dụng để phát hiện mối đe dọa dựa trên sự bất thường."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: NIDS được sử dụng để giám sát traffic đến và đi từ tất cả các thiết bị trên mạng."
  },
  {
    "id": "gt2025_c6_35",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Điểm cộng lớn nhất của NIDS là có thể quét tất cả traffic inbound và outbound, nhưng việc này có thể làm giảm tốc độ chung của mạng.",
      "B. Baseline sẽ xác định đâu là mức bình thường của mạng và cảnh báo cho quản trị viên mạng hoặc người dùng khi phát hiện traffic truy cập bất thường hoặc khác biệt so với baseline.",
      "C. Người dùng cung cấp bằng chứng là danh định đó là đúng và phù hợp với mình.",
      "D. Packet filtering: Việc Kiểm soát truy nhập thông tin dựa vào địa chỉ nguồn và địa chỉ đích của gói tin gửi đến"
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Điểm cộng lớn nhất của NIDS là có thể quét tất cả traffic inbound và outbound, nhưng việc này có thể làm giảm tốc độ chung của mạng."
  },
  {
    "id": "gt2025_c6_36",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Học máy ứng dụng trong lĩnh vực mã độc để giải quyết hai bài toán lớn là phân loại mã độc và phát hiện mã độc",
      "B. Tuy nhiên Signature-Based có thể không phát hiện được những mối đe dọa mới, khi chữ ký để nhận biết nó chưa được IDS cập nhật.",
      "C. Kiểm soát truy cập trong giáo trình dựa trên định danh và xác thực.",
      "D. HIDS: Host Intrusion Detection Systems, hệ thống phát hiện xâm nhập này hoạt động trên tất cả các thiết bị trong hệ thống có thể kết nối Internet."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: HIDS: Host Intrusion Detection Systems, hệ thống phát hiện xâm nhập này hoạt động trên tất cả các thiết bị trong hệ thống có thể kết nối Internet."
  },
  {
    "id": "gt2025_c6_37",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Khi chọn ra được tập hợp các luật khớp với gói tin, luật nào có độ ưu tiên cao hơn sẽ được sử dụng.",
      "B. Mục đích: Chứng minh danh định là hợp lệ và phù hợp với người dùng.",
      "C. HIDS chỉ giám sát các gói dữ liệu inbound và outbound từ thiết bị hoặc những hành động đáng ngờ tại cấp truy cập nội bộ.",
      "D. CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (1)"
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: HIDS chỉ giám sát các gói dữ liệu inbound và outbound từ thiết bị hoặc những hành động đáng ngờ tại cấp truy cập nội bộ."
  },
  {
    "id": "gt2025_c6_38",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. VPN là mạng riêng ảo tạo kết nối an toàn khi tham gia mạng công cộng như Internet.",
      "B. CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (2)",
      "C. Nâng cao hiểu biết, ý thức và kỹ năng an toàn bảo mật thông tin",
      "D. CÁC TÍNH NĂNG CỦA TƯỜNG LỬA CISCO (2)"
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (2)"
  },
  {
    "id": "gt2025_c6_39",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Signature-Based: Đây là các IDS hoạt động dựa trên chữ ký, giám sát các gói tin trên mạng tương tự như cách phần mềm diệt virus hoạt động.",
      "B. Các ngữ cảnh bảo mật (các firewall ảo) : Cung cấp khả năng tạo nhiều firewall ảo trên một thiết bị firewall thật",
      "C. Baseline sẽ xác định đâu là mức bình thường của mạng và cảnh báo cho quản trị viên mạng hoặc người dùng khi phát hiện traffic truy cập bất thường hoặc khác biệt so với baseline.",
      "D. Tính bảo mật: Dịch vụ VPN sử dụng mật mã để bảo vệ kết nối Internet của bạn khỏi những truy cập trái phép."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Signature-Based: Đây là các IDS hoạt động dựa trên chữ ký, giám sát các gói tin trên mạng tương tự như cách phần mềm diệt virus hoạt động."
  },
  {
    "id": "gt2025_c6_40",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Người dùng cung cấp danh định của mình cho hệ thống, có được từ hoạt động đăng ký, tạo tài khoản.",
      "B. CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (3)",
      "C. Phân tích động là việc phân tích các hành vi, chức năng của mã độc bằng cách thực thi phần mềm độc hại.",
      "D. Tuy nhiên Signature-Based có thể không phát hiện được những mối đe dọa mới, khi chữ ký để nhận biết nó chưa được IDS cập nhật."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Tuy nhiên Signature-Based có thể không phát hiện được những mối đe dọa mới, khi chữ ký để nhận biết nó chưa được IDS cập nhật."
  },
  {
    "id": "gt2025_c6_41",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. VPN hỗ trợ quyền riêng tư, tính ẩn danh và tính bảo mật.",
      "B. Có một số hành vi được coi là nguy hiểm như vô hiệu hóa các điều khiển bảo mật, cài đặt rootkits, autostart, sửa tệp tin host, thiết lập các kết nối đáng ngờ,…",
      "C. Anomaly-Based: IDS này được sử dụng để phát hiện mối đe dọa dựa trên sự bất thường.",
      "D. Kiểm soát truy cập trong giáo trình dựa trên định danh và xác thực."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Anomaly-Based: IDS này được sử dụng để phát hiện mối đe dọa dựa trên sự bất thường."
  },
  {
    "id": "gt2025_c6_42",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Phát hiện mã độc dựa trên chữ ký là phương pháp dựa trên các thông tin về mã độc (signatures) đã được định nghĩa sẵn.",
      "B. Anomaly-Based sẽ giám sát traffic mạng và so sánh với baseline đã được thiết lập từ trước.",
      "C. Những gì bạn biết (Something you know) Ví dụ: Password Số PIN (Personal Identification Number)",
      "D. VPN là mạng riêng ảo tạo kết nối an toàn khi tham gia mạng công cộng như Internet."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Anomaly-Based sẽ giám sát traffic mạng và so sánh với baseline đã được thiết lập từ trước."
  },
  {
    "id": "gt2025_c6_43",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Baseline sẽ xác định đâu là mức bình thường của mạng và cảnh báo cho quản trị viên mạng hoặc người dùng khi phát hiện traffic truy cập bất thường hoặc khác biệt so với baseline.",
      "B. Anomaly-Based sẽ giám sát traffic mạng và so sánh với baseline đã được thiết lập từ trước.",
      "C. Tính bảo mật: Dịch vụ VPN sử dụng mật mã để bảo vệ kết nối Internet của bạn khỏi những truy cập trái phép.",
      "D. Hệ điều hành riêng biệt: loại trừ được các nguy cơ bảo mật khi sử dụng chung với các hệ điều hành khác"
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Baseline sẽ xác định đâu là mức bình thường của mạng và cảnh báo cho quản trị viên mạng hoặc người dùng khi phát hiện traffic truy cập bất thường hoặc khác biệt so với baseline."
  },
  {
    "id": "gt2025_c6_44",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Đặt mật khẩu truy cập bằng chuỗi ký tự",
      "B. Kiểm soát truy cập trong giáo trình dựa trên định danh và xác thực.",
      "C. Phân tích động là việc phân tích các hành vi, chức năng của mã độc bằng cách thực thi phần mềm độc hại.",
      "D. CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (3)"
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (3)"
  },
  {
    "id": "gt2025_c6_45",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Mỗi hành vi có thể không nguy hiểm nhưng kết hợp với nhau có thể làm tăng độ đáng ngờ của đối tượng.",
      "B. HIDS chỉ giám sát các gói dữ liệu inbound và outbound từ thiết bị hoặc những hành động đáng ngờ tại cấp truy cập nội bộ.",
      "C. Passive: Đây là IDS thụ động chỉ phát hiện và cảnh báo.",
      "D. Phương pháp phát hiện dựa trên hành vi (hay còn gọi là dựa trên heuristics) sẽ đánh giá một đối tượng dựa trên hành vi của nó."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: Passive: Đây là IDS thụ động chỉ phát hiện và cảnh báo."
  },
  {
    "id": "gt2025_c6_46",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Khi kiểm tra một tệp tin bất kỳ trong hệ thống, phần mềm antivirus sẽ phân tích tệp tin đó, nếu phát hiện chữ ký khớp với cơ sở dữ liệu sẽ thông báo đây là tệp tin đáng ngờ.",
      "B. Khi phát hiện traffic đáng ngờ hoặc độc hại, nó sẽ tạo và gửi cảnh báo đến các nhà quản trị hoặc người dùng.",
      "C. Những gì bạn có (Something you have)  Thẻ thông minh (smart card)  Địa chỉ MAC, địa chỉ IP",
      "D. Packet filtering kiểm soát truy nhập thông tin dựa trên thuộc tính của gói tin."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: Khi phát hiện traffic đáng ngờ hoặc độc hại, nó sẽ tạo và gửi cảnh báo đến các nhà quản trị hoặc người dùng."
  },
  {
    "id": "gt2025_c6_47",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Những hành động sau đó sẽ phụ thuộc vào người quản trị.",
      "B. CÁC LOẠI HỆ THỐNG PHÁT HIỆN XÂM NHẬP (2)",
      "C. Xác thực chứng minh danh định là hợp lệ và quyết định quyền truy cập tài nguyên.",
      "D. Khi phát hiện traffic đáng ngờ hoặc độc hại, nó sẽ tạo và gửi cảnh báo đến các nhà quản trị hoặc người dùng."
    ],
    "answer": "A",
    "explanation": "Giáo trình nêu ý chính: Những hành động sau đó sẽ phụ thuộc vào người quản trị."
  },
  {
    "id": "gt2025_c6_48",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. Điểm cộng lớn nhất của NIDS là có thể quét tất cả traffic inbound và outbound, nhưng việc này có thể làm giảm tốc độ chung của mạng.",
      "B. Anomaly-Based sẽ giám sát traffic mạng và so sánh với baseline đã được thiết lập từ trước.",
      "C. NIDS được sử dụng để giám sát traffic đến và đi từ tất cả các thiết bị trên mạng.",
      "D. Các tập đoàn lớn, các cơ sở giáo dục và cơ quan chính phủ sử dụng công nghệ VPN để cho phép người dùng từ xa kết nối an toàn đến mạng riêng của cơ quan mình."
    ],
    "answer": "D",
    "explanation": "Giáo trình nêu ý chính: Các tập đoàn lớn, các cơ sở giáo dục và cơ quan chính phủ sử dụng công nghệ VPN để cho phép người dùng từ xa kết nối an toàn đến mạng riêng của cơ quan mình."
  },
  {
    "id": "gt2025_c6_49",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Theo giáo trình, nội dung nào sau đây thuộc Chương 6: Quản lý bảo mật?",
    "options": [
      "A. Điểm cộng lớn nhất của NIDS là có thể quét tất cả traffic inbound và outbound, nhưng việc này có thể làm giảm tốc độ chung của mạng.",
      "B. Định danh giúp tìm kiếm sự tồn tại và quyền hạn của người dùng.",
      "C. CHỨC NĂNG CHÍNH CỦA VPN HỖ TRỢ BẢO MẬT",
      "D. Mạng riêng ảo (VPN): cung cấp cơ chế thiết lập mạng riêng ảo."
    ],
    "answer": "C",
    "explanation": "Giáo trình nêu ý chính: CHỨC NĂNG CHÍNH CỦA VPN HỖ TRỢ BẢO MẬT"
  },
  {
    "id": "gt2025_c6_50",
    "chapter": 6,
    "chapterName": "Chương 6: Quản lý bảo mật",
    "question": "Khi ôn Chương 6: Quản lý bảo mật, nhận định nào đúng nhất?",
    "options": [
      "A. IDS xem lưu lượng, sao chép và cảnh báo vi phạm; IPS hướng tới phòng chống và ngăn chặn xâm nhập.",
      "B. VPN sử dụng mã hóa để giữ bí mật những thông tin này, đặc biệt là khi bạn kết nối qua mạng Wi-Fi công cộng.",
      "C. Hệ điều hành riêng biệt: loại trừ được các nguy cơ bảo mật khi sử dụng chung với các hệ điều hành khác",
      "D. Khi một đối tượng cố gắng thực thi các hành vi bất thường hoặc không được cấp quyền biểu thị đối tượng đó độc hại hoặc đáng ngờ."
    ],
    "answer": "B",
    "explanation": "Giáo trình nêu ý chính: VPN sử dụng mã hóa để giữ bí mật những thông tin này, đặc biệt là khi bạn kết nối qua mạng Wi-Fi công cộng."
  }
];
