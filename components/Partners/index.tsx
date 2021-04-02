import React from "react";
import { Col, Row } from "../../styles/grid";
import { PartnersWrapper, PartnersTextWrapper } from "./partners.elements";

const Partners = ({ partners }) => {
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
              {partners &&
                partners.map((partner) => (
                  <li>
                    {partner.name}, {partner.city} ({partner.state})
                  </li>
                ))}
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
