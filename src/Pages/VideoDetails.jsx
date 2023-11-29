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
import styled from "styled-components";
import MyImage from "../assets/profile.png";

// const ChannelDetails = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const ChannelProfileinfo = styled.div`
//   display: flex;
//   gap: 20px;
// `;

// const Image = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
// `;

// const ChannelDetailsInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   color: ${({ theme }) => theme.text};
// `;
// const ChannelName = styled.span`
//   font-weight: 500;
// `;

// const ChannelCounter = styled.span`
//   font-size: 12px;
//   margin-top: 5px;
//   margin-bottom: 20px;
//   color: ${({ theme }) => theme.textSoft};
// `;

// const ChannelDescription = styled.p`
//   font-size: 14px;
// `;

// const ChannelSubscribe = styled.button`
//   background-color: red;
//   font-weight: 500;
//   color: white;
//   border: none;
//   border-radius: 3px;
//   height: max-content;
//   padding: 8px 20px;
//   cursor: pointer;
//   font-size: 14px;
// `;

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
      </ContentInfo>
      <VideoRecommendation>Recommentdation</VideoRecommendation>
    </Container>
  );
};

export default VideoDetails;
