import { PiShoppingCartLight } from "react-icons/pi";
// import { PiShoppingCartFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import NavBarLink from "./NavBarLink";


const NavBar = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.navbar}`}>
            < div className="container">
                <a className="navbar-brand" href="#">
                    <img src="/logo.png" alt="Logo" width="30" height="24" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbaContentv"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">Home</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <NavBarLink />
                    <Link to="/cart" className={`nav-link ${styles.cartIcon}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/cart" className={`nav-link ${styles.cartIcon}`}>
                                <PiShoppingCartLight size={24} />
                            </Link>
                        </li>
                    </ul>
                    </Link>
                </div>
            </div>
        </nav >
  )
}

export default NavBar;