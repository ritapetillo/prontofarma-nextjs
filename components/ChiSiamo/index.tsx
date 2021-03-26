import React from "react";
import { Col, Row } from "../../styles/grid";
import { ChiSiamoTextWrapper, ChiSiamoWrapper } from "./chisiamo.elements";

const ChiSiamo = () => {
  return (
    <ChiSiamoWrapper id="chi-siamo">
      <ChiSiamoTextWrapper>
        <h2>Chi Siamo</h2>
        <Row>
          <Col sm={12} md={4}>
            <img src="/images/chisiamo.jpg" />
          </Col>
          <Col sm={12} md={7}>
            <p>
              <b>PRONTOFARMA</b> nasce dall’idea di due giovani amici di creare un
              servizio di consegna farmaci (e non solo) a domicilio, rivolto ad
              ottimizzare tempi e collegamenti tra la farmacia e i propri
              clienti e a semplificare la giornata di tutti, famiglie, anziani e
              professionisti.
            </p>
            <p>
              L’esigenza di offrire un servizio che sul nostro territorio era
              ancora assente, ci ha spinti a creare Prontofarma, che oltre alla
              consegna a domicilio, offre servizio di prenotazione e ritiro in
              farmacia, comunicazione social per le Farmacie e tanto altro..
            </p>
          </Col>
        </Row>
      </ChiSiamoTextWrapper>
    </ChiSiamoWrapper>
  );
};

export default ChiSiamo;
