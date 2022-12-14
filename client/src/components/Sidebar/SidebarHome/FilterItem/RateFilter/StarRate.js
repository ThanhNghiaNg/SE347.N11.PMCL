import React from "react";

import yellowStar from "../../../../../images/yellow-star.png";
import star from "../../../../../images/star.png";

const StartList = (props) => {
  let starList = [];
  for (let i = 0; i < props.numberYellowStar; i++) {
    starList.push(<img key={i} src={yellowStar} />);
  }
  for (let i = 0; i < 5 - props.numberYellowStar; i++) {
    starList.push(<img key={props.numberYellowStar + i} src={star} />);
  }

  return <React.Fragment>{starList}</React.Fragment>;
};

export default StartList;
