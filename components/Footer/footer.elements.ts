import styled from "styled-components";
import { Col } from "../../styles/grid";

export const FooterWrapper = styled.div`
  min-height: 300px;
  text-align: center;
  position: relative;
  background-color: ${(props) => props.theme.brandColorGray};
  color: ${(props) => props.theme.primaryColor};
  span {
    display: block;
    margin-top: 15px;
    line-height: 20px;
    svg {
      margin-right: 10px;
    }
  }

  h4 {
    font-size: 24px;
    font-weight: 400;
    color: ${(props) => props.theme.brandColorGreen};
    margin-bottom: 15px;
    margin-top: 0px;
  }
  .contatti__text {
    text-align: left;
    margin-top: 40px;
  }
  img.logo {
    height: 30px;
    margin-top: 50px;
  }

  .logo__text {
    margin-top: 50px;
    transform: translateX() (-20px);
    color: ${(props) => props.theme.brandColorGreen};
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    text-transform: uppercase;
    &-small {
      font-size: 10px;
      margin-top: 0px;
    }
  }
`;
export const FooterTextWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const ColContatti = styled(Col)`
  font-size: 13px;
  font-weight: 300;
`;
export const MenuFooter = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 13px;
  span {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
