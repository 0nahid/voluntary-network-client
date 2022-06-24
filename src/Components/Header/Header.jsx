import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to="/">Test</Link></li>
                            <li> <Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center">
                    <a href="/" class="btn btn-ghost normal-case text-xl">Voluntary Network</a>

                </div>
                <div class="navbar-end">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/profile" class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to="/manage">Manage</Link></li>
                            <li><Link to="/addActivities">Add Activities</Link></li>
                            <li><button>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
