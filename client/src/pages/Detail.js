import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BookDetail from "../components/BookDetail/BookDetail";

const Detail = (props) => {
  const params = useParams();
  const id = params.id;
  return (
    <>
      <BookDetail id={id} />
    </>
  );
};

export default Detail;
