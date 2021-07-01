import "./App.css"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/portfolio/portfolio";
import Skill from "./components/Skill/skill"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
