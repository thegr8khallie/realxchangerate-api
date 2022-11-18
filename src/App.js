import { GlobalStyle } from "./components/styled/Global.styled";
import { Hero, Nav, Cards, Benefits, Faqs, Footer } from "./components";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Hero />
      <Cards />
      <Benefits />
      <Faqs />
      <Footer />
    </div>
  );
};

export default App;
