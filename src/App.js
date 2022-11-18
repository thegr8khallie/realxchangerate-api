import { GlobalStyle } from "./components/styled/Global.styled";
import { Hero, Nav, Cards, Benefits, Faqs } from "./components";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Hero />
      <Cards />
      <Benefits />
      <Faqs />
    </div>
  );
};

export default App;
