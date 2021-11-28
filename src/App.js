import Community from "./components/Community";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Home />
      <Projects />
      <Community />
    </div>
  );
}

export default App;
