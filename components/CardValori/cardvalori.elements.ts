import styled from "styled-components";
import { CardWrap } from "../Card/card.elements";
interface CardValori {
  value?: string;
  index: number;
}
export const CardValoriWrap = styled(CardWrap)<CardValori>`
  min-height: 200px;
  justify-content: center;
  align-items: center;
  /* background-color: ${(props) => props.theme.backgroundColorLightGreen}; */
  img {
    height: 50px;
    margin-bottom: 10px;
  }
  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 24px;
    border-bottom: 2px solid ${(props) => props.theme.brandColorGreen};
    width: fit-content;
    align-self: center;
  }
  svg {
    &:nth-of-type(${(props) => props.index}) {
      color: ${(props) => props.theme.brandColorGreen};
    }
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  align-self: center;
  position: absolute;
  bottom: 10px;
`;
