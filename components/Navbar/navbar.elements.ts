import styled from "styled-components";

interface NavBar {
  page: string;
}
export const NavBar = styled.div<NavBar>`
  width: 100vw;
  height: 100px;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.page === "/"
      ? props.theme.backgroundColorLightGreen
      : props.theme.primaryColor};
  padding: 30px 50px;
  img {
    height: 60px;
  }
  .navbar__hamburger {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
  svg {
    cursor: pointer;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fontLogo};
  color: ${(props) => props.theme.brandColorGray};
  .logo__text {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    text-transform: uppercase;
    &-small {
      font-size: 10px;
    }
  }
`;

export const NavMenu = styled.div`
  span {
    margin: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuMobile = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 50px;
  transform: translateX(-50px);
  background-color: #e4f1f0;
  z-index: 22;
  position: fixed;
  top: 80px;
  display: none;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  span {
    margin: 20px 0px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;
