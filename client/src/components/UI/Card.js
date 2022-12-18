import classes from "./Card.module.css";

function Card(props) {
  const classesCard = `${classes.card} ${props.className}`;

  return <div className={classesCard}>{props.children}</div>;
}

export default Card;
