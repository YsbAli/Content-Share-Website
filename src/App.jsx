import styled, { ThemeProvider } from "styled-components";

import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import VideoCard from "./Components/VideoCard";
import { Dark_Mode, Light_Mode } from "./Themes/theme";
import { useState } from "react";

const MainContainer = styled.div`
  display: flex;
`;

const Wrapper = styled.div``;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

function App() {
  const [dark, setDark] = useState(true);

  return (
    <>
      <ThemeProvider theme={dark ? Dark_Mode : Light_Mode}>
        <MainContainer>
          <Menu dark={dark} setDark={setDark} />
          <Main>
            <Navbar />
            <Wrapper>
              <VideoCard />
            </Wrapper>
          </Main>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
