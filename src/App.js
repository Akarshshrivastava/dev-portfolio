import Community from "./components/Community";
import Contact from "./components/Contact";
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
      <Contact />
    </div>
  );
}

export default App;
