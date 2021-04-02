import React from "react";
import { Col, Row } from "../../styles/grid";
import { LavoraRow, ValoriTextWrapper, LavoraWrapper } from "./lavora.elements";
import CardLavora from "../CardLavora";
import reasons from "../../assets/content/lavoraconnoi.json";
import { ButtonGreen } from "../../styles/uiElements";
import Link from "next/link";
const Valori = () => {
  return (
    <LavoraWrapper id="valori">
      <ValoriTextWrapper>
        <h2>Lavora con noi</h2>
        <LavoraRow>
          <p>
            Dai l’opportunità ai tuoi clienti di ricevere comodamente quando e
            dove vogliono i tuoi farmaci.
          </p>
        </LavoraRow>
        <LavoraRow>
          <Link href="mailto:mail@pronto-farma.com?subject=Lavora con noi">
            <ButtonGreen>Contattaci</ButtonGreen>
          </Link>
        </LavoraRow>
        <LavoraRow className="lavora__cards">
          <Col sm={12} md={6}>
            <p> Perchè far parte di Prontofarma:</p>
          </Col>
        </LavoraRow>
        <LavoraRow>
          {reasons.map((reason) => (
            <Col sm={12} md={4} lg={4}>
              <CardLavora
                value={{
                  title: reason.title,
                  text: reason.text,
                  image: "fidelizzazione",
                }}
                index={0}
              />
            </Col>
          ))}
        </LavoraRow>
      </ValoriTextWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="chisiamo__bottom"
      >
        <path
          fill=" #e4f1f0"
          fill-opacity="1"
          d="M0,160L120,138.7C240,117,480,75,720,58.7C960,43,1200,53,1320,58.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </LavoraWrapper>
  );
};

export default Valori;
