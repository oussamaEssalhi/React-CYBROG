/* eslint-disable jsx-a11y/anchor-is-valid */
// Raccourci rafe
import { Link } from "react-router-dom";
import "./Header.css";
import NavItem, { NavItemDropDown } from "../../components/NavItem/NavItem";
import logo from "../../assets/img/logo.png";
import imagHeader from '../../assets/img/profile-header.jpg'

const Header = () => {
    return (
        <div className="navbar navbar-expand-md  navbar-dark text-white  cyborg-navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo"></img>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainmenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainmenu">
                    <ul className="navbar-nav ms-auto headrer-nav">
                        <NavItem>
                            <Link to="/" className="nav-link">Home</Link>

                        </NavItem>
                        <NavItem>
                            <Link to={"/Browse"} className="nav-link">Browse</Link>
                        </NavItem>
                        <NavItemDropDown>
                            <Link to="/Details" className="nav-link">Details</Link>
                        </NavItemDropDown>
                        <NavItem>
                            <Link to='/Streams' className="nav-link">Streams</Link>
                        </NavItem>
                        <NavItem>
                            <div className="profil-link">
                                <Link to="/profile" className="nav-link">Profile</Link>
                                <img src={imagHeader} alt="" />
                            </div>
                        </NavItem>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
