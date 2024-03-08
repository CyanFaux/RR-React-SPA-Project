import './App.css';
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Github from './Github'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p>
          This is a Portfolio for Nathan Becker
        </p>
      </header>
      <main>
        <Projects />
      </main>
    </div>
  );
}

export default App;
