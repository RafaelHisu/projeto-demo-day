import { Link } from "react-router-dom";

export default function IntegrantesItem(props) {
  return (
    <a target={"_blank"} href={props.linkedin} className="product-item-container">
      <img src={props.image} alt={props.title} />
      <b title={props.title}>{props.title}</b>
      <p> {props.funcao}</p>
    </a>
  )
}