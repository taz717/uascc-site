import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import NavBar from './components/Navbar'
import MembersPage from './containers/membersPage/MembersPage';
import JoinPage from './containers/joinPage/JoinPage'
import HomePage from './containers/homePage/HomePage';


function App() {
  return (
    <div className="App">
      <NavBar />

      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
