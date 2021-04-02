import React, { useEffect, useMemo, useState } from "react";
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
import { getCoordinates } from "../../lib/helpers/coordinates";
import haversine from "haversine-distance";

const Hero = ({ pharmacies }) => {
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

  const getCityCoordinates = async (city: string) => {
    const cityCoordinates = getCoordinates(city);

    return cityCoordinates;
  };

  const handleChange = async (e) => {
    if (e.target.value.length > 1) {
      setSearchActive(true);
      const currentCityCoordinates = await getCityCoordinates(e.target.value);
      const listPharmacies = pharmacies.filter((f) => {
        const { latitude, longitude } = f;
        const a = currentCityCoordinates;
        const b = { latitude, longitude };
        console.log(haversine(a, b));
        return haversine(a, b) < 3500;
        // return f.city
        //   .toLocaleLowerCase()
        //   .includes(e.target.value.toLocaleLowerCase());
      });
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
