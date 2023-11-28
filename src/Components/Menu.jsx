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
} from "../Styles/Menu.js";

// const Container = styled.div`
//   flex: 1;
//   background-color: #202020;
//   height: 100vh;
//   color: white;
//   font-size: 14px;
// `;

// const Wrapper = styled.div`
//   padding: 20px 28px;
// `;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   cursor: pointer;
//   font-weight: 500;
//   margin-bottom: 25px;
// `;

// const Img = styled.img`
//   height: 20px;
// `;

// const NavItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   padding: 8px 0px;
//   cursor: pointer;
// `;

// const HrBorder = styled.hr`
//   margin: 15px 0px;
//   border: 0.5px solid #373737;
// `;

// const Login = styled.div`
//   font-size: 14px;
// `;

// const LoginButton = styled.button`
//   padding: 5px 15px;
//   background-color: transparent;
//   border: 1px solid #3ea6ff;
//   color: #3ea6ff;
//   border-radius: 3px;
//   font-weight: 500;
//   margin-top: 10px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   gap: 5px;
// `;

// const NavItem = ({ icon, item }) => {
//   return (
//     <>
//       <NavItems>
//         <p>{icon}</p>
//         <p>{item}</p>
//       </NavItems>
//     </>
//   );
// };

const Menu = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <Img src={YtLogo} />
            Social Tube
          </Logo>
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
            <LoginButton>
              <AccountCircleOutlinedIcon /> SIGN IN
            </LoginButton>
          </LoginDiv>
          <HrBorder />
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
          <NavItem>
            <DarkModeOutlinedIcon />
            Theme/Ligh Mode
          </NavItem>
        </Wrapper>
      </Container>
    </>
  );
};

export default Menu;
