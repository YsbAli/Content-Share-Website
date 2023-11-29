
import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: auto;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

export const Wrapper = styled.div`
  padding: 20px 28px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 25px;
`;

export const Img = styled.img`
  height: 20px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px 0px;
  cursor: pointer;
`;

export const HrBorder = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

export const LoginDiv = styled.div`
  font-size: 15px;
`;

export const LoginButton = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;


export const Title = styled.h2`
font-size: 14px;
font-weight: 500;
color: #aaaaaa;
margin-bottom: 20px;
`