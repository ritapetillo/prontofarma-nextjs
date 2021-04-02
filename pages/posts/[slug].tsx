import React from "react";
import { ImageCover } from "../../styles/uiElements";
import { PostWrapper } from "../../styles/_post.elements";

const Post = () => {
  return (
    <PostWrapper>
      <ImageCover width="100vw" height="400px" className="post-image">
        <img src="" alt="" />
      </ImageCover>

      <h2>A title</h2>
    </PostWrapper>
  );
};

export default Post;
