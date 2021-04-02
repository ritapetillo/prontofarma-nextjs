import React from "react";
import { Col, Row, RowColumn } from "../../styles/grid";
import { ImageCover } from "../../styles/uiElements";

import { BlogRow, BlogWrapper, VediPostButton } from "./blog.elements";

const Blog = () => {
  return (
    <BlogWrapper>
      <BlogRow>
        <Col sm={12} md={6}>
          <ImageCover height="100%" width="100%" radius="5px">
            <img
              src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
              alt=""
            />
          </ImageCover>
        </Col>
        <Col className="main-post" sm={12} md={6}>
          <small>Date</small>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
          <p>lfsdfdsfsdf</p>
          <VediPostButton>Vedi Post</VediPostButton>
        </Col>
      </BlogRow>
      <BlogRow>
        <Col sm={6} md={4}>
          <ImageCover height="200px" width="100%" radius="5px">
            <img
              src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
              alt=""
            />
          </ImageCover>
          <RowColumn>
            <small>Date</small>
            <h4>A title</h4>
            <p>lfsdfdsfsdf</p>
            <VediPostButton>Vedi Post</VediPostButton>
          </RowColumn>
        </Col>
      </BlogRow>
    </BlogWrapper>
  );
};

export default Blog;
