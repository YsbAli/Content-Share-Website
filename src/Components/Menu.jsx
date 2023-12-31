import YtLogo from "../assets/yt-logo.webp";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import {
  Container,
  Wrapper,
  Logo,
  Img,
  NavItem,
  HrBorder,
  LoginDiv,
  LoginButton,
  Title,
} from "../Styles/Menu.js";
import { Link } from "react-router-dom";

const Menu = ({ dark, setDark }) => {
  const modeIcon = dark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />;
  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>
              <Img src={YtLogo} />
              Social Tube
            </Logo>
          </Link>
          <NavItem>
            <HomeIcon />
            Home
          </NavItem>
          <NavItem>
            <ExploreIcon />
            Explore
          </NavItem>
          <NavItem>
            <SubscriptionsIcon />
            Subscriptions
          </NavItem>
          <HrBorder />
          <NavItem>
            <VideoLibraryOutlinedIcon />
            Librery
          </NavItem>
          <NavItem>
            <HistoryIcon />
            History
          </NavItem>
          <HrBorder />
          <LoginDiv>
            Sign in to Like videos, Comment, and Subscribe.
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <LoginButton>
                <AccountCircleOutlinedIcon /> SIGN IN
              </LoginButton>
            </Link>
          </LoginDiv>
          <HrBorder />
          <Title>Best of Social Tube</Title>
          <NavItem>
            <LibraryMusicIcon />
            Music
          </NavItem>
          <NavItem>
            <SportsBasketballIcon />
            Sports
          </NavItem>
          <NavItem>
            <SportsEsportsIcon />
            Gaming
          </NavItem>
          <NavItem>
            <MovieCreationIcon />
            Movies
          </NavItem>
          <NavItem>
            <NewspaperIcon />
            News
          </NavItem>
          <NavItem>
            <LiveTvIcon />
            Live
          </NavItem>
          <HrBorder />
          <NavItem>
            <SettingsOutlinedIcon />
            Setting
          </NavItem>
          <NavItem>
            <FlagOutlinedIcon />
            Report
          </NavItem>
          <NavItem>
            <HelpOutlineOutlinedIcon />
            Help
          </NavItem>
          <NavItem onClick={() => setDark(!dark)}>
            {/* <DarkModeOutlinedIcon /> */}
            {modeIcon}
            {dark ? " Light" : "Dark"} Mode
          </NavItem>
        </Wrapper>
      </Container>
    </>
  );
};

export default Menu;
