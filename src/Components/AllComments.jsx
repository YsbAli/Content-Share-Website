import React from "react";
import { Container, NewComment, Avatar, Input } from "../Styles/AllComments";
import MyImage from "../assets/profile.png";
import Comment from "./Commnet";

const AllComments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={MyImage} />
        <Input placeholder="Add a Comment..." />
      </NewComment>
      {/* Commnet here */}

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default AllComments;
