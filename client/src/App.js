import { BrowserRouter, Route, Routes, NavLink, Link} from "react-router-dom";

import Home from "./pages/Home";
import MapPage from './pages/Map' ;
import Table from "./pages/Table";
import LoginForm from "./pages/login";
import Add_new_A from "./pages/Add_new_Appointment";
import Add_new_H from "./pages/Add_new_Hairstyle";

function App() {
  return (

    <BrowserRouter>
    <div>
        <div id="top-label">
            <nav id="navigation-panel">
                <NavLink to="/"  className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Home</NavLink>
                <NavLink to="/Table" className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Table</NavLink>
                <NavLink to="/Add_new_A" className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Add new appointment</NavLink>
                <NavLink to="/Add_new_H" className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Add new hairstyle</NavLink>
                <NavLink to="/Map" className={({ isActive }) => (isActive ? 'navActive' : 'underline')}>Map</NavLink>
            </nav>

            <div id={"tthk"}>
                <span id="hallo">Your hairdressers salon in TTHK</span>
            </div>

            <Link to="/Login" id={"login"}>Login</Link>
        </div>

        <div id={"content"}>
            <Routes>
                <Route path="/" element={< Home />}/>
                <Route path="/Table" element={< Table />}/>
                <Route path="/Add_new_A" element={< Add_new_A />}/>
                <Route path="/Add_new_H" element={< Add_new_H />}/>
                <Route path="/Map" element={< MapPage />}/>
                <Route path="/Login" element={< LoginForm />}/>
            </Routes>
        </div>
    </div>


    </BrowserRouter>
  );
}

export default App;
