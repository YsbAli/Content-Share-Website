import {
  NavContainer,
  NavSearch,
  NavWrapper,
  NavInput,
  LoginButton,
} from "../Styles/Navbar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavContainer>
      <NavWrapper>
        <NavSearch>
          <NavInput placeholder="Search..." />
          <SearchOutlinedIcon />
        </NavSearch>
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <LoginButton>
            <AccountCircleOutlinedIcon /> SIGN IN
          </LoginButton>
        </Link>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
