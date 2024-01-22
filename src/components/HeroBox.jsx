import React from "react";
import rasm from '../image/target.png'
function HeroBox({text}) {
  return (
    <div className="hero__box">
      <img className="hero__box__img" width={80}  src={rasm} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default HeroBox;
