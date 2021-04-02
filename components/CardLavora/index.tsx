import React from "react";
import { CardLavoraWrap } from "./cardlavora.elements";
interface CardLavora {
  value: { text: string; title: string; image: string };
  index: number;
}
const CardLavora = ({ value, index }: CardLavora) => {
  return (
    <CardLavoraWrap>
      <h4>{value.title}</h4>
      <p>{value.text}</p>
    </CardLavoraWrap>
  );
};

export default CardLavora;
