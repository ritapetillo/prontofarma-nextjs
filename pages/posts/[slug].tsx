import React from "react";
import { ImageCover } from "../../styles/uiElements";
import { PostWrapper } from "../../styles/_post.elements";

const Post = () => {
  return (
    <PostWrapper>
      <ImageCover width="100vw" height="400px" className="post-image">
        <img
          src="https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG"
          alt=""
        />
      </ImageCover>

      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut
        elementum massa. Sed quis ante vehicula, lobortis augue ac, pulvinar
        dolor. Vivamus sed lectus neque. Morbi mi ex, finibus ut tristique id,
        dapibus quis nulla. Curabitur molestie sodales purus. Nulla nulla felis,
        malesuada at tempor a, faucibus sed nulla. Nunc non erat diam.
        Suspendisse potenti. Vestibulum vestibulum magna ut tortor mollis, ac
        viverra dui varius. Duis tortor lorem, posuere non ultricies eu,
        dignissim at quam. Duis vulputate euismod sodales. Cras eget maximus
        dui, vel ultrices sem. Curabitur eleifend justo euismod pharetra
        faucibus. Nunc mattis dictum malesuada. Pellentesque egestas, ipsum nec
        ornare volutpat, elit ipsum volutpat mi, quis finibus dolor lorem nec
        risus. Sed sit amet sagittis turpis, eget gravida elit. Fusce est
        libero, sodales vitae lobortis et, tempor eu ex. Sed viverra vulputate
        ante, vel suscipit odio. In ac eros eget odio semper luctus a at mi.
        Maecenas pretium fringilla magna, eu venenatis diam accumsan in.
        Praesent imperdiet, leo non sollicitudin maximus, elit metus lobortis
        augue, eu ornare nibh turpis eget quam. Etiam luctus scelerisque semper.
        Pellentesque ultrices tempor velit, id auctor purus mollis vitae. Nunc
        turpis arcu, pretium eu aliquam sed, commodo in velit. Nam sit amet
        tempus mi. Sed venenatis consequat arcu, eu tincidunt lectus semper ac.
        Duis nec volutpat erat. Sed id eros eget mauris lacinia pharetra non
        eget enim. Duis ut justo id est auctor efficitur. Curabitur suscipit
        ornare metus et tincidunt.
      </p>
    </PostWrapper>
  );
};

export default Post;
