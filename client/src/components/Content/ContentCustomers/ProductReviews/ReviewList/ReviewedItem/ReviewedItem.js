import { NavLink } from "react-router-dom";

import classes from "./ReviewedItem.module.css";

const ReviewedItem = (props) => {
  return (
    <div className={classes["reviewed-block"]}>
      {props.reviews.map((review) => (
        <div key={review.id} className={classes["reviewed-item"]}>
          <div className={classes["reviewed-item__product-image"]}>
            <img src={review.product.image} />
          </div>
          <div className={classes["reviewed-item__info"]}>
            <div className={classes["product-info"]}>
              <NavLink
                to={`/detail/${review.product.id}`}
                className={classes["title"]}
              >
                <span>{review.product.title}</span>
              </NavLink>
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
            </div>
            <div className={classes["review-item__comment"]}>
              <div className={classes["comment-wrapper"]}>
                <div className={classes["comment-content"]}>
                  <div>{review.comment}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewedItem;
