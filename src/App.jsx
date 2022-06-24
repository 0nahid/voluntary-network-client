import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { HashLoader } from "react-spinners";
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
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    const override = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
`;
    return (
        <div>
            {loading ? (
                <HashLoader
                    color={"#ff11ff"}
                    loading={loading}
                    size={75}
                    css={override}
                />
            ) : (
                <Header />
            )}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/manage" element={<Manage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/addActivities" element={<AddActivities />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Toaster />

        </div>
    )
}
