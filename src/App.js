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
import DonatePage from './containers/donatePage/DonatePage';


function App() {
  return (
    <div className="App">
      <NavBar />

      <Router>
        <Routes>
          <Route path='/uascc-site/' element={<HomePage />} />
          <Route path="/uascc-site/members" element={<MembersPage />} />
          <Route path="/uascc-site/join" element={<JoinPage />} />
          <Route path='/uascc-site/donate' element={<DonatePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
