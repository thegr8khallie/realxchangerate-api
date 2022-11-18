import { GlobalStyle } from "./components/styled/Global.styled";
import { Nav } from "./components";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
    </div>
  );
};

export default App;
