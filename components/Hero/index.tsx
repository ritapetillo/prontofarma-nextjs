import React, { useMemo, useState } from "react";
import { Col, Row } from "../../styles/grid";
import { ButtonGreen, InputDiv } from "../../styles/uiElements";
import {
  HeroContainer,
  HeroTitleWrap,
  HeroWrap,
  SearchDiv,
} from "./hero.elements";
import { FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import listaFarmacie from "../../assets/content/farmacie.json";

const Hero = () => {
  const [farmacia, setFarmacia] = useState<
    | {
        name: string;
        city: string;
        state: string;
      }
    | undefined
  >();
  const [farmacie, setFarmacie] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  const handleChange = (e) => {
    if (e.target.value.length > 1) {
      setSearchActive(true);
      const listPharmacies = listaFarmacie.filter((f) =>
        f.city.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      console.log(listPharmacies);
      setFarmacie(listPharmacies);
    } else {
      setSearchActive(false);
    }
  };

  const searchDiv = useMemo(() => {
    if (searchActive) {
      return (
        <SearchDiv>
          {farmacie.map((f) => (
            <span onClick={() => setFarmacia(f)}>
              <span>
                {f.name} - {f.city} ({f.state})
              </span>
              <span className="ordina">
                <a
                  href={`https://api.whatsapp.com/send/?phone=%2B393279460178&text=Farmacia selezionata:${f.name}-${f.city}&app_absent=0`}
                  target="_blank"
                >
                  ORDINA
                  <FaWhatsapp />
                </a>
              </span>
            </span>
          ))}
        </SearchDiv>
      );
    } else "";
  }, [farmacia, farmacie, searchActive]);
  return (
    <HeroContainer>
      <HeroWrap>
        <Col sm={12} md={7}>
          <HeroTitleWrap>
            <h1>I tuoi farmaci a domicilio</h1>
            <span>
              Hai bisogno dei tuoi farmaci ma non riesci a raggiungere la
              farmacia? Non preoccuparti, ci pensiamo noi!
            </span>
            {/* <span>Serviamo la tua area? </span> */}
            <InputDiv className="input__hero">
              <input
                type="text"
                placeholder="Inserisci la tua città e cerca la tua farmacia"
                onChange={handleChange}
              />
              <FiSearch />
              {searchDiv}
            </InputDiv>

            {/* <ButtonGreen>Cerca</ButtonGreen> */}
          </HeroTitleWrap>
        </Col>
        <Col sm={12} md={5} className="image__hero-div">
          <img src="/images/bike_prontofarma_no-bg.png" alt="" />
        </Col>
      </HeroWrap>
    </HeroContainer>
  );
};

export default Hero;
