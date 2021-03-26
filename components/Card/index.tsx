import React from "react";
import { CardWrap, DotsWrapper } from "./card.elements";
import { GoPrimitiveDot } from "react-icons/go";
import parse from "html-react-parser";

interface Card {
  step: number;
  text: string;
  image: string;
}

const Card = ({ step, text, image }: Card) => {
  return (

      <CardWrap step={step}>
        <img src={`/images/${image}`} alt="" />

        <h4>Step {step}</h4>
        <p> {parse(text)}</p>
        <DotsWrapper>
          <GoPrimitiveDot />
          <GoPrimitiveDot />
          <GoPrimitiveDot />
        </DotsWrapper>
        
      </CardWrap>

  );
};

export default Card;
