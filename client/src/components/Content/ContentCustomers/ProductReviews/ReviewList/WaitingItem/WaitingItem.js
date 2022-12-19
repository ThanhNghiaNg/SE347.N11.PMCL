import { useState } from "react";

import { ReviewModalFormPortals } from "../../ReviewForm/ReviewForm";

import classes from "./WaitingItem.module.css";

const WaitingItem = (props) => {
  const [review, setReview] = useState({});
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div className={classes["waiting-block"]}>
      {showReviewForm && (
        <ReviewModalFormPortals
          review={review}
          onCloseModalForm={setShowReviewForm}
        />
      )}
      <div className={classes["scroll-component"]}>
        {props.reviews.map((review) => (
          <div key={review.id} className={classes["waiting-item"]}>
            <div className={classes["waiting-item__info"]}>
              <img src={review.product.image} />
              <div>
                <div className={classes["title"]}>
                  <span>{review.product.title}</span>
                </div>
                <div className={classes["rating"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.99996 2L9.74653 5.87769L14 6.32895L10.826 9.17675L11.7082 13.3333L7.99996 11.2157L4.29176 13.3333L5.17396 9.17675L1.99996 6.32895L6.2534 5.87769L7.99996 2Z"
                      fill="#fff"
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
                      fill="#fff"
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
                      fill="#fff"
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
                      fill="#fff"
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
                      fill="#fff"
                    ></path>
                    <path
                      d="M8.00001 1.33301L9.94064 5.67171L14.6667 6.17662L11.14 9.363L12.1202 14.0138L8.00001 11.6443L3.87978 14.0138L4.86001 9.363L1.33334 6.17662L6.05938 5.67171L8.00001 1.33301ZM8.00001 2.86252L6.48282 6.25453L2.78799 6.64927L5.54515 9.14039L4.77881 12.7764L8.00001 10.9239L11.2212 12.7764L10.4549 9.14039L13.212 6.64927L9.5172 6.25453L8.00001 2.86252Z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#FFA142"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className={classes["waiting-item__message"]}>
              "Hãy để lại một vài đánh giá của bạn ở đây nhé"
            </div>
            <button
              onClick={() => {
                setReview(review);
                setShowReviewForm(true);
              }}
              className={classes["waiting-item__actions"]}
            >
              <img src="https://salt.tikicdn.com/ts/upload/30/1c/b4/3e87f84dbdddd56032c57a2c07709fe2.png" />
              <span>Đánh giá</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaitingItem;
