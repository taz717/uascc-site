import './App.css';
import Navbar from './components/Navbar.js';
import Funding from './components/frontPage/Funding'
import Mission from './components/frontPage/Mission'
import Progress from './components/frontPage/Progress'
import Values from './components/frontPage/Values'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Funding />
      <Mission />
      <Progress />
      <Values />
    </div>
  );
}

export default App;
