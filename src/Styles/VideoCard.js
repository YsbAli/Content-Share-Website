import styled from 'styled-components'


export const VideoContainer = styled.div`
width: ${(props) => props.type !== "sm" && "360px"};;
margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
cursor: pointer;
display:${(props) => props.type === "sm" && "flex"} ;
gap : 10px;
`


export const Image = styled.img`
width: 100%;
height: ${(props) => props.type === "sm" ? "120px" : "200px"};
background-color: grey;
flex: 1;
`


export const ProfileDetails = styled.div`
display: flex;
margin-top: ${(props) => props.type !== "sm" && "16px"};;
gap: 12px;
flex: 1;
`

export const ProfilePic = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: grey;
display: ${(props) => props.type === "sm" && "none"};

`

export const ChannelDetails = styled.div`
`

export const ChannelTitle = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({ theme }) => theme.text};

`

export const ChannelName = styled.h2`
font-size: 14px;
margin: 9px 0px;
color: ${({ theme }) => theme.textSoft};
`

export const ChannelInfo = styled.div`
font-size: 14px;
color : ${({ theme }) => theme.textSoft}

`