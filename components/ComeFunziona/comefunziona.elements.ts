import styled from "styled-components";
import { Row } from "../../styles/grid";

export const ComefunzionaWrapper = styled.div`
  min-height: 300px;
  text-align: center;
  position: relative;

  h2 {
    margin-top: -100px;
    font-size: 35px;
    font-weight: 400;
    @media screen and (max-width: 768px) {
      margin-top: -20px;
    }
  }
  .comefunziona__card__column {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ComefunzionaTextWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const CardsRow = styled(Row)`
  align-items: center;
  justify-content: center;
  text-align: center;
`;
