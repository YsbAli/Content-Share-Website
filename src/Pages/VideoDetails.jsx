import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbUpOutLinedIcon from "@mui/icons-material/ThumbUpOutLined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

import {
  Container,
  ContentInfo,
  ContentTitle,
  VideoRecommendation,
  VideoWrapper,
  ContentDetails,
  ButtonGroups,
  SigleButton,
  Hr,
  ViewSpan,
  ChannelDetails,
  ChannelProfileinfo,
  Image,
  ChannelDetailsInfo,
  ChannelName,
  ChannelCounter,
  ChannelDescription,
  ChannelSubscribe,
} from "../Styles/VideoDetails";

import MyImage from "../assets/profile.png";
import AllComments from "../Components/AllComments";
import VideoCard from "../Components/VideoCard";

const VideoDetails = () => {
  return (
    <Container>
      <ContentInfo>
        <VideoWrapper>
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube.com/embed/yIaXoop8gl4?si=Otr6-Ch17LF3wuHC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <ContentTitle>Ai Video</ContentTitle>
        <ContentDetails>
          {/* <span style={{ color: "grey" }}>1M viwes - 10 Days</span> */}
          <ViewSpan>1M viwes - 10 Days</ViewSpan>
          <ButtonGroups>
            <SigleButton>
              <ThumbUpOutLinedIcon /> 1000
            </SigleButton>
            <SigleButton>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </SigleButton>
            <SigleButton>
              <ReplyOutlinedIcon /> Share
            </SigleButton>
            <SigleButton>
              <AddTaskOutlinedIcon /> Save
            </SigleButton>
          </ButtonGroups>
        </ContentDetails>
        <Hr />
        <ChannelDetails>
          <ChannelProfileinfo>
            <Image src={MyImage} />
            <ChannelDetailsInfo>
              <ChannelName>Shan Tech</ChannelName>
              <ChannelCounter>1M Subscribers</ChannelCounter>
              <ChannelDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates consequuntur odit, quas modi nesciunt iure recusandae
                quo quia facilis at! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptates consequuntur odit, quas modi
                nesciunt iure recusandae quo quia facilis at! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Voluptates consequuntur
                odit, quas modi nesciunt iure recusandae quo quia facilis at!
              </ChannelDescription>
            </ChannelDetailsInfo>
          </ChannelProfileinfo>
          <ChannelSubscribe>Subscribe</ChannelSubscribe>
        </ChannelDetails>
        <Hr />
        {/* Commnet Section here */}
        <AllComments />
      </ContentInfo>
      <VideoRecommendation>
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
        <VideoCard type="sm" />
      </VideoRecommendation>
    </Container>
  );
};

export default VideoDetails;
