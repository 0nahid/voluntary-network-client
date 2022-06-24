import { Route, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AddActivities from "./Components/Management/AddActivities";
import Manage from "./Components/Management/Manage";
import './index.css';
import About from "./Pages/About";
import Profile from "./Pages/Profile";
export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/manage" element={<Manage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/addActivities" element={<AddActivities />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

        </>
    )
}
