import React from "react";
import {
  Avatar,
  CommentDetails,
  Name,
  SignleCommnetDiv,
  CommentDate,
  Text,
} from "../Styles/AllComments";

import MyProfile from "../assets/profile.png";

const Comment = () => {
  return (
    <SignleCommnetDiv>
      <Avatar src={MyProfile} />
      <CommentDetails>
        <Name>
          Shan Tech <CommentDate> 2 days ago</CommentDate>
        </Name>
        <Text>This is best Content</Text>
      </CommentDetails>
    </SignleCommnetDiv>
  );
};

export default Comment;
