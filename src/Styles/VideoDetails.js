import styled from "styled-components";


export const Container = styled.div`
display: flex;
gap: 24px;
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

// export const channelDetails = styled.div`
// display: flex;
// justify-content: space-between;
// `

// export const channelInfo = styled.div`


// `

// export const channelSubscribe = styled.button`

// `


export const VideoRecommendation = styled.div`
flex: 2;

`