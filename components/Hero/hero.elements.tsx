import styled from "styled-components";
import { Row } from "../../styles/grid";

export const HeroContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColorLightGreen};
  min-height: 60vh;
`;

export const HeroWrap = styled(Row)`
  padding: 50px;
  padding-top: 10vh;
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 375px) {
    padding: 50px 20px;
  }
  .image__hero-div {
    @media screen and (max-width: 768px) {
      text-align: center;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      max-width: 450px;
      @media screen and (max-width: 768px) {
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }
    }
  }

  .input__hero {
    margin: 30px 0;
    width: 100%;
    min-width: 200px;
    max-width: 500px;
    width: 100%;
    justify-content: space-between;

    svg {
      width: 30px;
    }
    input {
      min-width: 200px;
      width: 90%;

      @media screen and (max-width: 768px) {
        width: 80%;
      }
    }
  }
`;

export const HeroTitleWrap = styled.div`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
    align-items: center;
    text-align: center;
  }
  height: 100%;
  h1 {
    font-weight: 500;
    font-size: 40px;
    @media screen and (max-width: 768px) {
      font-size: 28px;
      text-align: center;
    }
  }
  div {
    margin: 50px 0px 0px;
  }
`;

export const SearchDiv = styled.div`
  border-radius: 10px;
  position: absolute;
  top: -0px;
  left: 0;
  height: fit-content;
  width: 100%;
  background-color: ${(props) => props.theme.grayLight};
  z-index: 99;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 10px;
    cursor: pointer;
    position: relative;
    svg {
      position: absolute;
      right: 0;
    }
    a{
      margin-right:15px;
    }
    &.ordina {
      color: ${(props) => props.theme.brandColorGreen};
    }
  }
`;
