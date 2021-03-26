import styled from "styled-components";
import { Row } from "../../styles/grid";

export const ValoriWrapper = styled.div`
  min-height: 300px;
  text-align: center;
  position: relative;

  h2 {
    margin-top: -100px;
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 100px;
    @media screen and (max-width: 768px) {
      margin-top: -20px;
    }
  }
  svg {
    transform: scaleX(-1);
    &.chisiamo__bottom {
      transform: scaleX(1);
    }
  }
`;
export const ValoriTextWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const ValoriRow = styled(Row)`
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 450px) {
    /* padding-left:40px; */
  }
`;
