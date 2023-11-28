import Menu from "./Components/Menu";

import styled from "styled-components";
import Navbar from "./Components/Navbar";
import VideoCard from "./Components/VideoCard";

const MainContainer = styled.div`
  display: flex;
`;

const Wrapper = styled.div``;

const Main = styled.div`
  flex: 7;
  background-color: #181818;
`;

function App() {
  return (
    <>
      <MainContainer>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <VideoCard />
          </Wrapper>
        </Main>
      </MainContainer>
    </>
  );
}

export default App;
