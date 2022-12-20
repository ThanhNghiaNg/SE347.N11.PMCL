import { useState } from "react";
import { createPortal } from "react-dom";

import SubmitButton from "../../SubmitButton/SubmitButton";
import Backdrop from "../../../../UI/Backdrop";

import classes from "./ReviewForm.module.css";

const ReviewForm = (props) => {
  const [rate, setRate] = useState(0);

  const submitHandler = () => {};

  return (
    <Backdrop>
      <div className={classes["review-form"]}>
        <div
          onClick={() => props.onSetShowReviewForm(false)}
          className={classes["review-form__close"]}
        >
          <svg
            width="14px"
            height="14px"
            viewBox="0 0 14 14"
            fill="#38383D"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7437 1.49372C14.0854 1.15201 14.0854 0.59799 13.7437 0.256282C13.402 -0.0854272 12.848 -0.0854272 12.5063 0.256282L7 5.76256L1.49372 0.256282C1.15201 -0.0854272 0.59799 -0.0854272 0.256282 0.256282C-0.0854272 0.59799 -0.0854272 1.15201 0.256282 1.49372L5.76256 7L0.256282 12.5063C-0.0854272 12.848 -0.0854272 13.402 0.256282 13.7437C0.59799 14.0854 1.15201 14.0854 1.49372 13.7437L7 8.23744L12.5063 13.7437C12.848 14.0854 13.402 14.0854 13.7437 13.7437C14.0854 13.402 14.0854 12.848 13.7437 12.5063L8.23744 7L13.7437 1.49372Z"
              fill="#38383D"
            ></path>
          </svg>
        </div>
        <form
          onSubmit={submitHandler}
          className={classes["review-form__inner"]}
        >
          <div className={classes["review-form__product"]}>
            <img src={props.review.product.image}></img>
            <div className={classes["review-form__product-wrap"]}>
              <div className={classes["review-form__product-title"]}>
                {props.review.product.title}
              </div>
              <div className={classes["review-form__rating"]}>
                <span
                  className={classes["review-form__star"]}
                  onClick={() => setRate(1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"
                      fill={rate >= 1 ? "#FDD835" : "none"}
                      fillRule="evenodd"
                      stroke="#FFB500"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </span>
                <span
                  className={classes["review-form__star"]}
                  onClick={() => setRate(2)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"
                      fill={rate >= 2 ? "#FDD835" : "none"}
                      fillRule="evenodd"
                      stroke="#FFB500"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </span>
                <span
                  className={classes["review-form__star"]}
                  onClick={() => setRate(3)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"
                      fill={rate >= 3 ? "#FDD835" : "none"}
                      fillRule="evenodd"
                      stroke="#FFB500"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </span>
                <span
                  className={classes["review-form__star"]}
                  onClick={() => setRate(4)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"
                      fill={rate >= 4 ? "#FDD835" : "none"}
                      fillRule="evenodd"
                      stroke="#FFB500"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </span>
                <span
                  className={classes["review-form__star"]}
                  onClick={() => setRate(5)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"
                      fill={rate >= 5 ? "#FDD835" : "none"}
                      fillRule="evenodd"
                      stroke="#FFB500"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className={classes["review-form__comment"]}>
            <label className={classes["review-form__header"]}>
              {rate !== 0
                ? rate >= 4
                  ? "Điều gì làm bạn hài lòng?"
                  : "Điều gì làm bạn không hài lòng?"
                : "Hãy đánh giá một chút ở đây nhé!"}
            </label>
            <textarea
              className={classes["review-form__comment-field"]}
              placeholder="Hãy chia sẻ cảm nhận, đánh giá của bạn về sản phẩm này nhé."
            ></textarea>
          </div>
          <div className={classes["review-form__actions"]}>
            <SubmitButton value="Gửi đánh giá" />
          </div>
        </form>
      </div>
    </Backdrop>
  );
};

export const ReviewModalFormPortals = (props) => {
  const modalPortals = document.getElementById("modalPortals");
  return (
    <>
      {createPortal(
        <ReviewForm
          review={props.review}
          onSetShowReviewForm={props.onCloseModalForm}
        />,
        modalPortals
      )}
    </>
  );
};

export default ReviewForm;
