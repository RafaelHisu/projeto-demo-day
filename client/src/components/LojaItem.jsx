import { Link } from "react-router-dom";

export default function LojaItem(props) {
  return (
    <Link to={`/loja?id=${props.id}`} className="lojaitem-component">
      <img src={props.image} alt={props.name} />
      <b>{props.nome}</b>
    </Link>
  )
}