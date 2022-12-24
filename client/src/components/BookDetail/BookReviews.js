import classes from "./BookReviews.module.css";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
const BookReviews = (props) => {
  const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        const getReview = async()=>{
            
        }

    },[])

  const reviewElements = <p>Chưa có bình luận cho sách này</p>;
  if (reviews.length > 0) {
    reviews.map((review) => {
      return (
        <div className={classes["review-item"]}>
          <div className={classes.user}>user</div>
          <div className={classes.reviews}>reviews</div>
        </div>
      );
    });
  }

  return <Card className="mt-4"></Card>;
};

export default BookReviews;
