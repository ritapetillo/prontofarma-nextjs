import React from "react";
import { Col, Row } from "../../styles/grid";
import Card from "../Card";
import {
  ComefunzionaWrapper,
  ComefunzionaTextWrapper,
  CardsRow,
} from "./comefunziona.elements";
import steps from "../../assets/content/steps.json";

const ComeFunziona = () => {
  const content = [1, 2, 3];
  return (
    <ComefunzionaWrapper id="steps">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill=" #e4f1f0"
          fill-opacity="1"
          d="M0,160L120,138.7C240,117,480,75,720,58.7C960,43,1200,53,1320,58.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <ComefunzionaTextWrapper>
        <h2>Come Funziona</h2>
        <p>
          Basta seguire dei semplici passaggi per richiedere la consegna a
          domicilio.
        </p>
      </ComefunzionaTextWrapper>
      <CardsRow className="comefunziona__card-row">
        {steps.map((c) => (
          <Col sm={12} lg={3} className="comefunziona__card__column">
            <Card step={c.step} text={c.text} image={c.image} />
          </Col>
        ))}
      </CardsRow>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill=" #e4f1f0"
          fill-opacity="1"
          d="M0,160L120,138.7C240,117,480,75,720,58.7C960,43,1200,53,1320,58.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </ComefunzionaWrapper>
  );
};

export default ComeFunziona;
