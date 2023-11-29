import styled, { ThemeProvider } from "styled-components";

import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import VideoCard from "./Components/VideoCard";
import { Dark_Mode, Light_Mode } from "./Themes/theme";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import VideoDetails from "./Pages/VideoDetails";

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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="video/:id" element={<VideoDetails />} />
              </Routes>
            </Wrapper>
          </Main>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
