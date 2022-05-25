import { BrowserRouter, Route, Routes, NavLink, Link} from "react-router-dom";

import Home from "./pages/Home";
import MapPage from './pages/Map' ;
import Table from "./pages/Table";
import LoginForm from "./pages/login";

function App() {
  return (

    <BrowserRouter>
    <div>
        <div id="top-label">
            <nav id="navigation-panel">
                <NavLink to="/Home"  className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Home</NavLink>
                <NavLink to="/Table" className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Table</NavLink>
                <NavLink to="/Map" className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Map</NavLink>
            </nav>

            <div id={"tthk"}>
                <span id="hallo">Your hairdressers salon in TTHK</span>
            </div>

            <Link to="/Login" id={"login"}>Login</Link>
        </div>

        <div id={"content"}>
            <Routes>
                <Route path="/Home" element={< Home />}/>
                <Route path="/Table" element={< Table />}/>
                <Route path="/Map" element={< MapPage />}/>
                <Route path="/Login" element={< LoginForm />}/>
            </Routes>
        </div>
    </div>


    </BrowserRouter>
  );
}

export default App;
