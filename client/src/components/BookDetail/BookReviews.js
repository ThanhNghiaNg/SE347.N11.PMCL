import classes from "./BookReviews.module.css";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
import { hostURL } from "../../utils/global";
const BookReviews = (props) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      const respone = await fetch(`${hostURL}/book/${props.id}/reviews`);
      const data = await respone.json();
      console.log(data);
      setReviews(data);
    };
    getReviews();
  }, []);

  let reviewElements = <p>Chưa có bình luận cho sách này</p>;
  if (reviews.length > 0) {
    reviewElements = reviews.map((review) => {
      return (
        <div className={`${classes["review-item"]} py-5 px-3 border-bottom`}>
          <div className={`row ${classes.user}`}>
            <div className="col-4"><img
              className="AccountAvatar_account__avatar__ZjLFi w-100"
              src="https://salt.tikicdn.com/desktop/img/avatar.png"
              alt="avatar"
            ></img></div>
            <div className="col"><p className="fw-bold pt-2">{review.user.name}</p></div>
          </div>
          <div className="">
          <div className={classes["rating"]}>
                <div className={classes["rating-star"]}></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.99996 2L9.74653 5.87769L14 6.32895L10.826 9.17675L11.7082 13.3333L7.99996 11.2157L4.29176 13.3333L5.17396 9.17675L1.99996 6.32895L6.2534 5.87769L7.99996 2Z"
                    fill={review.rate >= 1 ? "#FFD52E" : "#fff"}
                  ></path>
                  <path
                    d="M8.00001 1.33301L9.94064 5.67171L14.6667 6.17662L11.14 9.363L12.1202 14.0138L8.00001 11.6443L3.87978 14.0138L4.86001 9.363L1.33334 6.17662L6.05938 5.67171L8.00001 1.33301ZM8.00001 2.86252L6.48282 6.25453L2.78799 6.64927L5.54515 9.14039L4.77881 12.7764L8.00001 10.9239L11.2212 12.7764L10.4549 9.14039L13.212 6.64927L9.5172 6.25453L8.00001 2.86252Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FFA142"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.99996 2L9.74653 5.87769L14 6.32895L10.826 9.17675L11.7082 13.3333L7.99996 11.2157L4.29176 13.3333L5.17396 9.17675L1.99996 6.32895L6.2534 5.87769L7.99996 2Z"
                    fill={review.rate >= 2 ? "#FFD52E" : "#fff"}
                  ></path>
                  <path
                    d="M8.00001 1.33301L9.94064 5.67171L14.6667 6.17662L11.14 9.363L12.1202 14.0138L8.00001 11.6443L3.87978 14.0138L4.86001 9.363L1.33334 6.17662L6.05938 5.67171L8.00001 1.33301ZM8.00001 2.86252L6.48282 6.25453L2.78799 6.64927L5.54515 9.14039L4.77881 12.7764L8.00001 10.9239L11.2212 12.7764L10.4549 9.14039L13.212 6.64927L9.5172 6.25453L8.00001 2.86252Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FFA142"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.99996 2L9.74653 5.87769L14 6.32895L10.826 9.17675L11.7082 13.3333L7.99996 11.2157L4.29176 13.3333L5.17396 9.17675L1.99996 6.32895L6.2534 5.87769L7.99996 2Z"
                    fill={review.rate >= 3 ? "#FFD52E" : "#fff"}
                  ></path>
                  <path
                    d="M8.00001 1.33301L9.94064 5.67171L14.6667 6.17662L11.14 9.363L12.1202 14.0138L8.00001 11.6443L3.87978 14.0138L4.86001 9.363L1.33334 6.17662L6.05938 5.67171L8.00001 1.33301ZM8.00001 2.86252L6.48282 6.25453L2.78799 6.64927L5.54515 9.14039L4.77881 12.7764L8.00001 10.9239L11.2212 12.7764L10.4549 9.14039L13.212 6.64927L9.5172 6.25453L8.00001 2.86252Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FFA142"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.99996 2L9.74653 5.87769L14 6.32895L10.826 9.17675L11.7082 13.3333L7.99996 11.2157L4.29176 13.3333L5.17396 9.17675L1.99996 6.32895L6.2534 5.87769L7.99996 2Z"
                    fill={review.rate >= 4 ? "#FFD52E" : "#fff"}
                  ></path>
                  <path
                    d="M8.00001 1.33301L9.94064 5.67171L14.6667 6.17662L11.14 9.363L12.1202 14.0138L8.00001 11.6443L3.87978 14.0138L4.86001 9.363L1.33334 6.17662L6.05938 5.67171L8.00001 1.33301ZM8.00001 2.86252L6.48282 6.25453L2.78799 6.64927L5.54515 9.14039L4.77881 12.7764L8.00001 10.9239L11.2212 12.7764L10.4549 9.14039L13.212 6.64927L9.5172 6.25453L8.00001 2.86252Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FFA142"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.99996 2L9.74653 5.87769L14 6.32895L10.826 9.17675L11.7082 13.3333L7.99996 11.2157L4.29176 13.3333L5.17396 9.17675L1.99996 6.32895L6.2534 5.87769L7.99996 2Z"
                    fill={review.rate >= 5 ? "#FFD52E" : "#fff"}
                  ></path>
                  <path
                    d="M8.00001 1.33301L9.94064 5.67171L14.6667 6.17662L11.14 9.363L12.1202 14.0138L8.00001 11.6443L3.87978 14.0138L4.86001 9.363L1.33334 6.17662L6.05938 5.67171L8.00001 1.33301ZM8.00001 2.86252L6.48282 6.25453L2.78799 6.64927L5.54515 9.14039L4.77881 12.7764L8.00001 10.9239L11.2212 12.7764L10.4549 9.14039L13.212 6.64927L9.5172 6.25453L8.00001 2.86252Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FFA142"
                  ></path>
                </svg>
              </div>
            <div className={`pt-4`}>{review.content}</div>
          </div>
        </div>
      );
    });
  }

  return (
    <Card className="mt-4">
      <h3 className="pb-3">Đánh giá từ khách hàng</h3>
      {reviewElements}
    </Card>
  );
};

export default BookReviews;
