import styled from 'styled-components'


export const VideoContainer = styled.div`
width: 360px;
margin-bottom: 45px;
cursor: pointer;
`


export const Image = styled.img`
width: 100%;
height: 200px;
background-color: grey;
`


export const Profile = styled.div`
display: flex;
margin-top: 16px;
gap: 12px;
`

export const ProfilePic = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: grey;
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