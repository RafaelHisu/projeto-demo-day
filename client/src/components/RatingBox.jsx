import { FaRegThumbsUp, FaRegThumbsDown, FaStar } from 'react-icons/fa'
import { useState } from 'react';

export default function RatingBox(props) {
  let starClasses = ["gray-star", "gray-star", "gray-star", "gray-star", "gray-star"];
  for (let i = 0; i < props.nota; i++) {
    starClasses.splice(i, 1, "yellow-star");
  }

  return (
    <div className="rating-box">
      <img className="rating-box-profile" src={props.img} alt={props.nome} />
      <div>
        <b>{props.nome}</b><br />
        <span>{starClasses.map(s => {
          return (
            <FaStar className={s} />
          )
        })}</span>
        <p>{props.comentario}</p>
      </div>
      <div className="rating-box-buttons">
        <button><FaRegThumbsUp /></button>
        <button><FaRegThumbsDown /></button>
      </div>
    </div >
  )
}