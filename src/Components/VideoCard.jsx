import { Link } from "react-router-dom";
import {
  VideoContainer,
  Image,
  ProfileDetails,
  ProfilePic,
  ChannelDetails,
  ChannelTitle,
  ChannelName,
  ChannelInfo,
} from "../Styles/VideoCard";

import profilePic from "../assets/profile.png";

const VideoCard = ({ type }) => {
  const StyleText = {
    textDecoration: "none",
  };

  return (
    <Link to="/video/:id" style={StyleText}>
      <VideoContainer type={type}>
        <Image type={type} src={profilePic} />
        <ProfileDetails type={type}>
          <ProfilePic type={type} src={profilePic} />
          <ChannelDetails>
            <ChannelTitle>AI Video</ChannelTitle>
            <ChannelName>Shantech</ChannelName>
            <ChannelInfo>1M views - 1 day ago</ChannelInfo>
          </ChannelDetails>
        </ProfileDetails>
      </VideoContainer>
    </Link>
  );
};

export default VideoCard;
