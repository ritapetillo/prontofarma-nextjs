import styled from "styled-components";
import { Row } from "../../styles/grid";

export const PartnersWrapper = styled.div`
  min-height: 300px;
  text-align: center;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColorLightGreen};
  padding-bottom: 100px;
  h2 {
    margin-top: -100px;
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 100px;
    @media screen and (max-width: 768px) {
      margin-top: -20px;
    }
  }
  b {
    font-weight: 500;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* margin-left: 30px; */
  }
`;
export const PartnersTextWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 50px;
  div {
    text-align: left;
  }
  p {
    line-height: 35px;
    padding-left: 20px;
  }
  li {
    line-height: 35px;
  }
`;
