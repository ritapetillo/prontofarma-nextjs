import styled from "styled-components";
import { Row } from "../../styles/grid";
import { ButtonGreen } from "../../styles/uiElements";

export const BlogRow = styled(Row)`
  margin: 20px 0 80px;
`;

export const BlogWrapper = styled.div`
  padding: 70px 50px;
  strong {
    font-weight: 600;
  }
  h2 {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    padding: 40px 0 20px;
  }
  .main-post {
    align-items: start;
    h3 {
      font-size: 40px;
      font-weight: 500;
      margin: 0;
      padding: 0;
    }
  }
  h4 {
    font-size: 30px;
    font-weight: 500;
    margin: 0;
  }
  small {
    color: ${(props) => props.theme.brandColorGreen};
  }
`;

export const VediPostButton = styled(ButtonGreen)`
  height: fit-content;
  width: fit-content;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 2px;
`;
