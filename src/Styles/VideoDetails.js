import styled from "styled-components";


export const Container = styled.div`
display: flex;
gap: 30px;
color : white;
`

export const ContentInfo = styled.div`
flex: 5;
`
export const VideoWrapper = styled.div`

`

export const ContentTitle = styled.div`
font-size : 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color : ${({ theme }) => theme.text};
`

export const ContentDetails = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const ViewSpan = styled.span`
color: grey;
`

export const ButtonGroups = styled.div`
display: flex;
gap: 20px;
color: ${({ theme }) => theme.text};

`
export const SigleButton = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor:pointer;
`

export const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({ theme }) => theme.soft};
`


export const VideoRecommendation = styled.div`
flex: 2;

`



export const ChannelDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChannelProfileinfo = styled.div`
  display: flex;
  gap: 20px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ChannelDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
export const ChannelName = styled.span`
  font-weight: 500;
`;

export const ChannelCounter = styled.span`
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
`;

export const ChannelDescription = styled.p`
  font-size: 14px;
`;

export const ChannelSubscribe = styled.button`
  background-color: red;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;
`;