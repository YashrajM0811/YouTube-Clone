import Menu from './components/Menu';
import styled, { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import { darkTheme, lightTheme } from './utils/Theme';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from './pages/Video';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const Container = styled.div`
  display: flex;

`;

const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg};  
`
const Wrapper = styled.div`
  padding: 22px 96px;
`

function App() {
  const [darkMode, setDarkMode] =useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path='/'>
                <Route index element={<Home />}/>
                <Route path="signin" element={<SignIn />}/>
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
