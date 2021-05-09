import React, { useEffect, useState } from "react";
import { Col, Row } from "../../styles/grid";
import { PartnersWrapper, PartnersTextWrapper } from "./partners.elements";

const Partners = ({ partners }) => {
  const [partnersRefactored, setPartnersRefactored] = useState([]);
  useEffect(() => {
    const farmacie = partners.filter((p) => p.name.includes("Farmac"));
    const parafarmacie = partners.filter((p) => p.name.includes("Paraf"));
    const rest = partners.filter(
      (p) => !p.name.includes("Paraf") && !p.name.includes("Farmac")
    );

    setPartnersRefactored([...farmacie, ...parafarmacie, ...rest]);
  }, []);
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
                partnersRefactored.map((partner) => (
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
