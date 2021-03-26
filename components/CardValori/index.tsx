import React from "react";
import { CardValoriWrap } from "./cardvalori.elements";
interface CardValori {
  value: { text: string; image: string };
  index: number;
}
const CardValori = ({ value, index }: CardValori) => {
  return (
    <CardValoriWrap>
      <img src={"/images/" + value.image} alt="" />
      <h3>{value.text}</h3>
    </CardValoriWrap>
  );
};

export default CardValori;
