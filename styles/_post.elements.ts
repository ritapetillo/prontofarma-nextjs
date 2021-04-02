import styled from "styled-components";

export const PostWrapper = styled.div`
  padding: 30px 50px;
  strong {
    font-weight: 600;
  }
  h2 {
    font-size: 40px;
    font-weight: 500;
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
  .post-image {
    margin-left: -50px;
  }
`;
