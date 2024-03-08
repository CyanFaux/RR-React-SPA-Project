import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>This is a Portfolio for Nathan Becker</h1>
      </header>
      <main>
        <div id='about'>
          <About />
        </div>
        <div id='projects'>
          <Projects />
        </div>
      </main>
      <footer id='contact'>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
