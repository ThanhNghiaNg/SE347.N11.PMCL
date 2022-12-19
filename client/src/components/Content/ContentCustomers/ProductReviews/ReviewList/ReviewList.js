import WaitingItem from "./WaitingItem/WaitingItem";
import ReviewedItem from "./ReviewedItem/ReviewedItem";

import classes from "./ReviewList.module.css";

const ReviewList = (props) => {
  return (
    <div className={classes["review-list"]}>
      <div className={classes["review-list__block"]}>
        {props.statusTab === "not-rated" ? (
          <WaitingItem
            onClickShowReviewForm={props.onSetShowReviewForm}
            reviews={props.productReviews.filter(
              (review) => review.status === "not-rated"
            )}
          />
        ) : (
          <ReviewedItem
            reviews={props.productReviews.filter(
              (review) => review.status === "rated"
            )}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewList;
