import { GlobalStyle } from "./components/styled/Global.styled";
import { Hero, Nav, Cards } from "./components";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Hero />
      <Cards />
    </div>
  );
};

export default App;
