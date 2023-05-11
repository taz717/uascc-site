import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";

// These are from the container folder ONLY
// COMPONENTS GO INSIDE CONTAINERS THAT GO INSIDE HERE
import NavBar from './components/Navbar'
import MembersPage from './containers/membersPage/MembersPage';
import JoinPage from './containers/joinPage/JoinPage'
import HomePage from './containers/homePage/HomePage';
import DonatePage from './containers/donatePage/DonatePage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path="/members/" element={<MembersPage />} />
        <Route exact path="/join/" element={<JoinPage />} />
        <Route exact path='/donate/' element={<DonatePage />} />
      </Routes>
    </div>
  );
}

export default App;
