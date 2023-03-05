import React from "react";
import style from "./Hero.module.css";

export default function HeroSection() {
  return (
    <div className={style.hero}>
      <div className={style.hero__text}>
        <p>Built with love ❤️</p>
        <h1 className={style.hero__name}>Choose The Best Cat Breed</h1>
        <p></p>
      </div>
    </div>
  );
}
