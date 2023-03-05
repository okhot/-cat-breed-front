import React from "react";
import style from "./Cat.module.css";

export default function CatCard({ cardData }) {
  const {
    name,
    origin,
    child_friendly,
    dog_friendly,
    stranger_friendly,
    reference_image_id,
  } = cardData;

  return (
    <div
      className={style.card}
      style={{
        backgroundImage: `url(https://cdn2.thecatapi.com/images/${reference_image_id}.jpg)`,
      }}
    >
      <div className={style.card__image}></div>
      <div className={style.card__details}>
        <h1 className={style.card__details__name}>Name:{name}</h1>
        <p>Origin: {origin}</p>
        <p>Child Friendly: {child_friendly}</p>
        <p>Dog Friendly: {dog_friendly}</p>
        <p>Stranger Friendly:{stranger_friendly}</p>
        <button>Read More</button>
      </div>
    </div>
  );
}
