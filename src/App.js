import { createGlobalStyle } from "styled-components";
import MainPage from "./pages/MainPage";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important;
    letter-spacing: 0.3;
    font-weight: 300;
  }
  *{
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  );
}

export default App;
