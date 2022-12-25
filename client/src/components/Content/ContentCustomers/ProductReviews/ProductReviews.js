import { useEffect, useState } from "react";

import { hostURL } from "../../../../utils/global";
import ReviewTab from "./ReviewTab/ReviewTab";
import ReviewList from "./ReviewList/ReviewList";
import ReviewForm from "./ReviewForm/ReviewForm";

import classes from "./ProductReviews.module.css";

const reviewStatus = [
  {
    id: 0,
    code: "not-rated",
    category: "Chờ đánh giá",
    status: "Chờ đánh giá",
  },
  {
    id: 1,
    code: "rated",
    category: "Đã đánh giá",
    status: "Đã đánh giá",
  },
];

const ProductReviews = (props) => {
  const [notReviews, setNotReview] = useState([]);
  const [reviewed, setReviewed] = useState([]);
  const reviews = notReviews.concat(reviewed);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const refreshHander = () => {
    console.log("Complete");
    setToggleRefresh((prev) => !prev);
  };
  useEffect(() => {
    const getReviewBook = async () => {
      const respone = await fetch(`${hostURL}/user/review`, {
        credentials: "include",
      });
      const data = await respone.json();
      const reviews = data.map((book, i) => {
        return {
          id: i,
          status: "not-rated",
          comment: "",
          rate: null,
          product: {
            id: book._id,
            title: book.title,
            image: book.images[0].url,
            orderId: book.orderId,
          },
        };
      });
      setNotReview(reviews);
    };
    getReviewBook();

    const getReviewedBook = async () => {
      const respone = await fetch(`${hostURL}/user/reviewed`, {
        credentials: "include",
      });
      const data = await respone.json();
      const reviewed = data.map((book, i) => {
        // console.log(book.book._id)
        return {
          id: i,
          status: "rated",
          comment: book.content,
          rate: book.rate,
          product: {
            id: book.book._id,
            title: book.book.title,
            image: book.book.images[0].url,
            orderId: book.orderId,
          },
        };
      });
      // console.log(reviewed);
      setReviewed(reviewed);
    };
    getReviewedBook();
  }, [toggleRefresh]);
  // const reviews = [
  //   {
  //     id: 0,
  //     status: "not-rated",
  //     comment: "",
  //     rate: null,
  //     product: {
  //       id: 0,
  //       title: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ",
  //       image:
  //         "https://salt.tikicdn.com/cache/200x200/ts/product/22/a9/48/c55f8c043e5ff5842aa15dc1f3b6c20f.jpg",
  //     },
  //   },
  //   {
  //     id: 1,
  //     status: "not-rated",
  //     comment: "",
  //     rate: null,
  //     product: {
  //       id: 1,
  //       title: "Nhà giả kim",
  //       image:
  //         "https://salt.tikicdn.com/cache/200x200/ts/product/83/30/87/737846efdb9f28f0f51352cacf9225c5.jpg",
  //     },
  //   },
  //   {
  //     id: 2,
  //     status: "not-rated",
  //     comment: "",
  //     rate: null,
  //     product: {
  //       id: 3,
  //       title: "Osho - Trưởng Thành - Chạm Tới Bầu Trời Nội Tâm Của Bạn",
  //       image:
  //         "https://salt.tikicdn.com/cache/200x200/ts/product/0c/05/a4/637b29e57f847f8cec40cdc0fa7b2b93.jpg",
  //     },
  //   },
  //   {
  //     id: 3,
  //     status: "not-rated",
  //     comment: "",
  //     rate: null,
  //     product: {
  //       id: 1,
  //       title: "Nhà giả kim",
  //       image:
  //         "https://salt.tikicdn.com/cache/200x200/ts/product/83/30/87/737846efdb9f28f0f51352cacf9225c5.jpg",
  //     },
  //   },
  //   {
  //     id: 4,
  //     status: "rated",
  //     comment:
  //       "Bản thân mình khá là ấn tượng với nội dung của cuốn sách này, ngay từ đầu mình bị thu hút bởi tiêu đề cuốn sách. Đúng như thông điệp Tác giả muốn truyền tải “Giao tiếp” đóng một vai trò vô cùng quan trọng trong cuộc sống của mỗi người. Tưởng chừng như đây là một vấn đề cơ bản nhưng khi tìm đến “Khéo ăn nói sẽ có được thiên hạ” mỗi chúng ta đều thấy được giao tiếp còn là một nghệ thuật mà không phải chỉ ngày một ngày hai bạn có thể làm được. Nó là một quá trình luyện tập dài. Hãy cùng “Khéo ăn nói sẽ có được thiên hạ” khám phá những kỹ năng giao tiếp cần có của mỗi người nhé.",
  //     rate: 4,
  //     product: {
  //       id: 2,
  //       title: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ",
  //       image:
  //         "https://salt.tikicdn.com/cache/200x200/ts/product/22/a9/48/c55f8c043e5ff5842aa15dc1f3b6c20f.jpg",
  //     },
  //   },
  //   {
  //     id: 5,
  //     status: "rated",
  //     comment:
  //       "Nhà giả kim là một trong những tác phẩm hay nhất của nhà văn Paulo Coelho, được mệnh danh là cuốn sách bán chạy chỉ sau kinh thánh. Tuy nhiên, với những người đam mê sách khó tính, cuốn sách này dù kiệt xuất đến đâu cũng không tránh khỏi nhiều sự chỉ trích trái chiều. Dễ hiểu hơn thì cứ 10 độc giả khen hay thì ắt có tới 9 người chê dở.",
  //     rate: 5,
  //     product: {
  //       id: 1,
  //       title: "Nhà giả kim",
  //       image:
  //         "https://salt.tikicdn.com/cache/200x200/ts/product/83/30/87/737846efdb9f28f0f51352cacf9225c5.jpg",
  //     },
  //   },
  //   {
  //     id: 6,
  //     status: "rated",
  //     comment:
  //       "Cuốn sách Trưởng thành giống như một công trình nghiên cứu của Osho vậy. Ông không đi trực tiếp vào lối mòn của những cuốn sách triết lí như giải thích định nghĩa hay lấy các thí nghiệm toàn cầu. Osho có cách của riêng mình khi nghiên cứu về vấn đề. Đầu tiên, ông khẳng định quá trình trưởng thành là một nghệ thuật sống. Trưởng thành chính là nhận thức được rằng chúng ta không chỉ tồn tại, mà còn phải sống để hiểu “cuộc sống” là gì, tiến sâu hơn vào cốt lõi của cuộc sống. Nối tiếp những triết lý của mình về nghệ thuật sống, ông mở rộng quan điểm của mình, đi sâu vào việc phân tích những giai đoạn trong một đời người cùng với những mối quan hệ, các giai đoạn của sự trưởng thành. Từng câu chữ của Osho đều chứa đựng những tầng lớp ý nghĩa sâu sắc. ",
  //     rate: 3,
  //     product: {
  //       id: 3,
  //       title: "Osho - Trưởng Thành - Chạm Tới Bầu Trời Nội Tâm Của Bạn",
  //       image:
  //         "https://salt.tikicdn.com/cache/200x200/ts/product/0c/05/a4/637b29e57f847f8cec40cdc0fa7b2b93.jpg",
  //     },
  //   },
  // ];

  const [selectedStatus, setSelectedStatus] = useState("not-rated");
  const setStatusCategory = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className={classes["product-reviews"]}>
      <div className={classes["product-reviews__heading"]}>
        Đánh giá của tôi
      </div>
      <ReviewTab
        onSetStatusCategory={setStatusCategory}
        reviewStatus={reviewStatus}
      />
      <ReviewList
        productReviews={reviews}
        statusTab={selectedStatus}
        onRefresh={refreshHander}
      />
    </div>
  );
};

export default ProductReviews;
