import React from "react";
import { Col, Row } from "../../styles/grid";
import {
  FooterTextWrapper,
  FooterWrapper,
  ColContatti,
  MenuFooter,
} from "./footer.elements";
import { AiOutlineMail, AiOutlinePhone, AiOutlineBuild } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { SocialWrap } from "../../styles/uiElements";
import { LogoDiv } from "../Navbar/navbar.elements";
import Link from "next/link";
const Contatti = () => {
  return (
    <FooterWrapper id="contatti">
      <FooterTextWrapper>
        <Row>
          <Col sm={12} md={4}>
            <LogoDiv>
              <img className="logo" src="/images/logo.png" alt="" />
              <div className="logo__text">
                <span>PRONTOFARMA</span>
                <span className="logo__text-small">
                  i tuoi farmaci a domicilio
                </span>
              </div>
            </LogoDiv>
          </Col>
          <Col sm={12} md={4}>
            <MenuFooter>
              <Link href="/lavora">
                <span>Lavora con noi</span>
              </Link>
              <Link href="/termini-condizioni">
                <span>Termini e Condizioni di Servizio</span>
              </Link>
              <Link href="/termini-trasporto">
                <span>Termini e Condizioni del Trasporto</span>
              </Link>
              <Link href="/privacy">
                <span>Privacy Policy</span>
              </Link>
            </MenuFooter>
          </Col>
          <ColContatti sm={12} md={4} className="contatti__text">
            <h4>Contatti</h4>
            <SocialWrap>
              <a href="https://www.facebook.com/prontofarmainfo/">
                <img src={`/images/facebook.svg`} alt="" />
              </a>{" "}
              <a href="https://www.instagram.com/prontofarmainfo/">
                <img src={`/images/instagram.svg`} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/prontofarma-i-tuoi-farmaci-a-domicilio/">
                <img src={`/images/linkedin.svg`} alt="" />
              </a>
            </SocialWrap>

            <span>
              <AiOutlineMail />
              <a href="mailto:mail@pronto-farma.com">mail@pronto-farma.com</a>
            </span>
            <span>
              <AiOutlinePhone />
              <a href="https://api.whatsapp.com/send?phone=393279460178">
                +39 327 94 60 178
              </a>
            </span>
            <span>
              <BsBuilding />
              Via anfiteatro laterizio 164, Nola (NA) 80035
            </span>
          </ColContatti>
        </Row>
      </FooterTextWrapper>
    </FooterWrapper>
  );
};

export default Contatti;
