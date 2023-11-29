import { Link } from "react-router-dom";
import {
  VideoContainer,
  Image,
  Profile,
  ProfilePic,
  ChannelDetails,
  ChannelTitle,
  ChannelName,
  ChannelInfo,
} from "../Styles/VideoCard";

import profilePic from "../assets/profile.png";

const VideoCard = () => {
  const StyleText = {
    textDecoration: "none",
  };

  return (
    <Link to="/video/:id" style={StyleText}>
      <VideoContainer>
        <Image src={profilePic} />
        <Profile>
          <ProfilePic src={profilePic} />
          <ChannelDetails>
            <ChannelTitle>AI Video</ChannelTitle>
            <ChannelName>Shantech</ChannelName>
            <ChannelInfo>1M views - 1 day ago</ChannelInfo>
          </ChannelDetails>
        </Profile>
      </VideoContainer>
    </Link>
  );
};

export default VideoCard;
