import Menu from "./Components/Menu";

import styled from "styled-components";
import Navbar from "./Components/Navbar";
import VideoCard from "./Components/VideoCard";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div``;

const Main = styled.div`
  flex: 7;
`;

function App() {
  return (
    <>
      <Container>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <VideoCard />
          </Wrapper>
        </Main>
      </Container>
    </>
  );
}

export default App;
