import Main from './components/Main.js';
import './App.css';
import Footer from "./components/Footer";
import Portfolio from './components/Portfolio.js';
import NavBar from './components/NavBar.js';
import AboutMe from './components/AboutMe.js';





function App() {
  return (
    <div className="App">
 <NavBar />
 <Main /> 
 <AboutMe />

 <Portfolio />


<Footer />
    </div>
  );
}

export default App;
