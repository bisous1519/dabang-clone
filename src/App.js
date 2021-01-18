import Advertise from "./components/Advertise";
import Footer from "./components/Footer";
import GuideList from "./components/GuideList";
import Header from "./components/Header";
import History from "./components/History";
import Navi from "./components/Navi";
import Search from "./components/Search";
import SellList from "./components/SellList";
import { createGlobalStyle } from "styled-components";

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
      <Header />
      <Search />
      <History />
      <SellList />
      <GuideList />
      <Advertise />
      <Navi />
      <Footer />
    </>
  );
}

export default App;
