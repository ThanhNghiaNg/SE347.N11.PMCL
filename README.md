# Hướng dẫn cài đặt cho dự án

## I. Các cài đặt cần thiết cho dự án

1.  Tới [trang chủ của NodeJS](https://nodejs.org/en/) cài đặt NodeJS phiên bản 18.9.1, hoặc phiên bản được đề xuất cho đa số người dùng.

    ![](./setup/InstallNode.png)

2.  Tải source code của dự án từ [github](https://github.com/ThanhNghiaNg/SE347.N11.PMCL.git).

    Nếu đã có sẵn Git Bash. Chạy câu lệnh sau với Git Bash để có thể tải về source code:

    ```
    git clone https://github.com/ThanhNghiaNg/SE347.N11.PMCL.git
    ```

3.  Sau khi cài đặt NodeJS, dùng terminal đi đến từng thư mục _admin, client, server_.

    Chạy lệnh sau trong từng thư mục để cài các thư viện cần thiết.

    ```
    npm install
    ```

4.  Khởi chạy dự án

    Dùng terminal đi đến từng thư mục _server, admin, client_ và chạy lệnh

    ```
    npm start
    ```

 _Như vậy, chúng ta đã có thể tạo và khởi chạy dự án thành công với dữ liệu từ Database đã được tạo sẵn._

 _Hoặc nếu muốn sử dụng và quản lý Database cho chính mình, hãy tiếp tục thực hiện phần II_


## II. Tạo và kết nối MongoDB Cloud với NodeJS Server

1. Tạo database với MongoDB Cloud

   Truy cập đến [Trang đăng nhập của MongoDB](account.mongodb.com) và tạo tài khoản hoặc đăng nhập.

   Sau đó tạo Cluster

   ![](./setup/CreateCluster.png)

   Điền username và password để kết nối với database

   ![](./setup//Account.png)

   Ở bước tiếp theo, chọn `Add My Current IP Address` để cấp quyền truy cập vào MongoDB Cloud cho máy tính hiện tại. Và hoàn thành việc tạo Database

   ![](./setup/AddIP.png)

2. Liên kết MongoDB Cloud với dự án

   Sau khi đã tạo xong Database với MongoDB Cloud, chúng ta cần lấy được URI ở MongoDB Cloud để kết nối Server và Database

   ![](./setup//GetURI.png)

   Chọn Server NodeJS và version, sau đó sao chép URI

   ![](./setup/GetURL_2.png)

   Mở file `global.js` trong đường dẫn _/server/utils/global.js_

   Thay thế URI đã có trong file `global.js` bằng URI vừa sao chép.

   URI có ba thành phần chính cần quan tâm là _username, password, DatabaseName_

   mongodb+srv://**_username_**:**_password_**@cluster0.mzdhtyh.mongodb.net/**_DatabaseName_**?retryWrites=true&w=majority

   Thay thế **_username_** và **_password_** tương ứng với username và password ta vừa tạo bở Bước 1.

   **_DatabaseName_** là tên database mà ta muốn lưu dữ liệu, có thể đặt tuỳ ý.
