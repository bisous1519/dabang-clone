import { createGlobalStyle } from "styled-components";
import MainPage from "./pages/MainPage";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
  ul {
    padding: 0;
    li {
      list-style: none;
    }
  }
  a {
    text-decoration: none;
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
