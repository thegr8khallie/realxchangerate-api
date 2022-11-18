import { GlobalStyle } from "./components/styled/Global.styled";
import { Hero, Nav, Cards, Benefits } from "./components";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Hero />
      <Cards />
      <Benefits />
    </div>
  );
};

export default App;
