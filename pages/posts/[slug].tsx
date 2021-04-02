import React from "react";
import { ImageCover } from "../../styles/uiElements";
import { PostWrapper } from "../../styles/_post.elements";

const Post = () => {
  return (
    <PostWrapper>
      <h2>A title</h2>
      <ImageCover width="80%" height="400px">
        <img src="" alt="" />
      </ImageCover>
    </PostWrapper>
  );
};

export default Post;
