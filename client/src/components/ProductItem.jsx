import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <Link to={`/produto?id=${props.id}`} className="product-item-container">
      <img src={props.image} alt={props.title} />
      <p title={props.title}>{props.title}</p>
      <b>R${props.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</b>
      <span>Ver mais</span>
    </Link >
  )
}