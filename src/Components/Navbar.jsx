import {
  NavContainer,
  NavSearch,
  NavWrapper,
  NavInput,
  LoginButton,
} from "../Styles/Navbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Navbar() {
  return (
    <NavContainer>
      <NavWrapper>
        <NavSearch>
          <NavInput placeholder="Search..." />
          <SearchOutlinedIcon />
        </NavSearch>
        <LoginButton>
          <AccountCircleOutlinedIcon /> SIGN IN
        </LoginButton>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
