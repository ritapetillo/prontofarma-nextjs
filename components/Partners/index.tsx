import React from "react";
import { Col, Row } from "../../styles/grid";
import { PartnersWrapper, PartnersTextWrapper } from "./partners.elements";

const Partners = () => {
  return (
    <PartnersWrapper id="partners">
      <PartnersTextWrapper>
        <h2>I Nostri Partners</h2>
        <Row>
          <Col sm={12} md={7}>
            <p>
              Attualmente siamo attivi sul territorio di Napoli e provincia
              (Nola, San Vitaliano, Brusciano, Camposano, San Paolo Belsito,
              Villaricca).
            </p>
            <p>Lista Partners:</p>
            <ul>
              <li>FARMACIA DE SANCTIS H24, NOLA (NA)</li>
              <li>FARMACIA NAPOLITANO, CAMPOSANO (NA)</li>
              <li>FARMACIA PADRE PIO SAS, BRUSCIANO (NA)</li>
              <li>FARMACIA SAN VITALIANO SNC, S. VITALIANO (NA)</li>
              <li>PARAFARMACIA CASTALDO, SAN PAOLO BELSITO (NA)</li>
              <li>FARMACIA GIERI, VILLARICCA (NA)</li>
              <li>PARAFARMACIA VILLARICCA, VILLARICCA (NA)</li>
              <li>SHAPE COSMETICI, ROCCARAINOLA (NA)</li>
              <li>NUDGE PHARMA , NAPOLI</li>
            </ul>
          </Col>
          <Col sm={12} md={4}>
            <img src="/images/partners.jpg" />
          </Col>
        </Row>
      </PartnersTextWrapper>
    </PartnersWrapper>
  );
};

export default Partners;
