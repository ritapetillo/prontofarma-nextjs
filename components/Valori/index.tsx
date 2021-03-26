import React from "react";
import { Col } from "../../styles/grid";
import { ValoriRow, ValoriTextWrapper, ValoriWrapper } from "./valori.elements";
import valori from "../../assets/content/values.json";
import CardValori from "../CardValori";
const Valori = () => {
  return (
    <ValoriWrapper id="valori">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill=" #e4f1f0"
          fill-opacity="1"
          d="M0,160L120,138.7C240,117,480,75,720,58.7C960,43,1200,53,1320,58.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <ValoriTextWrapper>
        <h2>I Nostri Valori</h2>
        <ValoriRow>
          {valori.map((v, i) => (
            <Col sm={12} md={6} lg={3}>
              <CardValori value={v} index={i} />
            </Col>
          ))}
        </ValoriRow>
      </ValoriTextWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="chisiamo__bottom">
        <path
          fill=" #e4f1f0"
          fill-opacity="1"
          d="M0,160L120,138.7C240,117,480,75,720,58.7C960,43,1200,53,1320,58.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </ValoriWrapper>
  );
};

export default Valori;
