import styled from "styled-components";
import { Row } from "../../styles/grid";

export const LavoraWrapper = styled.div`
  min-height: 300px;
  text-align: center;
  position: relative;

  h2 {
    margin-top: 100px;
    margin-bottom: 20px;
    font-size: 35px;
    font-weight: 400;
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
  .lavora__cards {
    margin-top: 30px;
  }
`;
export const ValoriTextWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const LavoraRow = styled(Row)`
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 450px) {
    /* padding-left:40px; */
  }
`;
