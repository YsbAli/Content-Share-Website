import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: calc(100vh - 56px);     // because navbar height is 56px
color: ${({ theme }) => theme.text};
`

export const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: ${({ theme }) => theme.bgLighter};
padding: 20px 50px;
border:  1px solid ${({ theme }) => theme.soft};
gap : 10px;
`

export const Title = styled.h1`
font-size: 24px;
`

export const SubTitle = styled.h2`
font-size: 20px;
font-weight: 300;
`

export const Input = styled.input`
border: 1px solid ${({ theme }) => theme.soft};
border-radius: 3px;
padding: 10px;
background-color: transparent;
width: 100%;
`
export const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
cursor: pointer;
font-weight: 500;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft};
`

export const Span = styled.span`
font-size: 13px;
`

export const More = styled.div`
display: flex;
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
margin-top: 10px;
`

export const Links = styled.div`
margin-left: 50px;
`

export const Link = styled.span`
margin-left: 30px;
`