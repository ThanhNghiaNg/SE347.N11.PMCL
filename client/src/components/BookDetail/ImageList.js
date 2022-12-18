import classes from "./ImageList.module.css";
import { useEffect, useState } from "react";
const ImageList = (props) => {
  const images = props.images;
  const id = props.id
  const [mainImgURL, setMainImgURL] = useState();
  const [idxAvtived, setIdxActive] = useState();

  // Change state when book change
  useEffect(()=>{
    setMainImgURL(images[0].url)
    setIdxActive(0)
  },[id])

  // Generate image elements
  const listImage =
    images &&
    images
      .map((img) => img.url).splice(0,5)
      .map((url, i) => {
        return (
          <div key={i} className={`${idxAvtived === i ? classes["img-active"] : ""}`}>
            <img
              src={url}
              className={`${classes["w-100"]}`}
              onClick={() => {
                setMainImgURL(url);
                setIdxActive(i);
              }}
            ></img>
          </div>
        );
      });
  return (
    <div className={classes["images-list"]}>
      <div className={classes["main-img"]}>
        <img className={classes["w-100"]} src={`${mainImgURL}`}></img>
      </div>
      <div className={classes["grid-images"]}>{listImage}</div>
    </div>
  );
};

export default ImageList;
