import { Outlet, Link } from "react-router-dom";
import mainlogo from "./pics/logo.png"
const Navbar = () => {
    return (
        <>
            <nav>
                <div id="logo_word">
                    <Link to="/">
                        <img src={mainlogo} width='40px' height='40px' alt="MainLogo" />
                    </Link>
                    <h1>Westmire Wires</h1>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/technology">Technology</Link>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Navbar;