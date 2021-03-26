import styled from "styled-components";
interface CardWrap {
  step: number;
}
export const CardWrap = styled.div<CardWrap>`
  min-width: 250px;
  max-width: 350px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-self: center;
  align-self: center;
  -webkit-box-shadow: 6px 5px 29px 0px #bfbfbf;
  box-shadow: 6px 5px 29px 0px #bfbfbf;
  margin: 20px;
  border-radius: 5px;
  position: relative;
  padding: 10px;
  h4 {
    font-weight: 500;
    margin-bottom: -15px;
    border-bottom: 2px solid ${(props) => props.theme.brandColorGreen};
    width: fit-content;
    align-self: center;
    font-size: 23px;
  }
  p {
    font-size: 12px;
    padding: 10px;
    line-height: 24px;
  }
  svg {
    &:nth-of-type(${(props) => props.step}) {
      color: ${(props) => props.theme.brandColorGreen};
    }
  }
  b {
    font-weight: 600;
    &:hover {
      opacity: 0.7;
    }
  }
  img {
    height: 180px;
    width: 100%;
    object-fit: contain;
    margin-bottom: -10px;
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
