import styled from "styled-components";

export const InputDiv = styled.div`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.grayLight};
  border-radius: 10px;
  margin-top: 20px;
  position: relative;

  input {
    border: none;
    background-color: ${(props) => props.theme.grayLight};
    outline: none;
    &::placeholder {
      font-family: "Poppins";
    }
  }
  svg {
    color: ${(props) => props.theme.brandColorGreen};
    font-weight: 900;
  }
`;
export const ButtonGreen = styled.span`
  display: block;
  padding: 8px 10px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.brandColorGreen};
  color: ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  width: 150px;
  text-align: center;
`;

export const SocialWrap = styled.div`
  display: flex;
  img {
    height: 25px;
    margin-right: 10px;
  }
`;

export const WhatsAppWidgetWrap = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 33;
`;
