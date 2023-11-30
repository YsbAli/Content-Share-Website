import styled from 'styled-components'

export const Container = styled.div``;

export const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: grey;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  width: 100%;
  padding: 5px;
  color: ${({ theme }) => theme.text};
`;


export const SignleCommnetDiv = styled.div`
display: flex;
margin: 30px 0px;
gap: 10px;
`

export const CommentDetails = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color : ${({ theme }) => theme.text};
`

export const Name = styled.span`
font-size: 13px;
font-weight: 500;
`

export const CommentDate = styled.span`
font-size: 11px;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`

export const Text = styled.span`
font-size: 13px;
`