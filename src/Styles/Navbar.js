import styled from "styled-components"

export const NavContainer = styled.div`
position: sticky;
background-color: ${({ theme }) => theme.bgLighter};
height : 56px;
`

export const NavWrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 100%;
padding: 0px 20px;
position: relative;
`

export const NavSearch = styled.div`
position: absolute;
left: 0px;
right: 0px;
margin: auto;
width: 43%;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
`

export const NavInput = styled.input`
background-color: transparent;
border: none;
`

export const LoginButton = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;

  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

