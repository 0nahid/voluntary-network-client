import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
export default function Header() {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        auth.signOut();
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to="/">Home</Link></li>
                            <li> <Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a href="/" className="btn btn-ghost normal-case text-xl">Voluntary Network</a>

                </div>
                <div className="navbar-end">
                    {
                        user?.email ? (<div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to="/profile" className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to="/manage">Manage</Link></li>
                                <li><Link to="/addActivities">Add Activities</Link></li>
                                <li><button onClick={handleLogout} >Logout</button></li>
                            </ul>
                        </div>) : <ul> <li><Link to="/login">Login</Link></li></ul>
                    }
                </div>
            </div>
        </div>
    )
}
