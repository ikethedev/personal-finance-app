import { Outlet, Link, NavLink } from "react-router-dom";
import overviewIcon from "../assets/images/icon-nav-overview.svg";
import transactionIcon from "../assets/images/icon-nav-transactions.svg";
import recurringIcon from "../assets/images/icon-nav-recurring-bills.svg";
import potIcon from "../assets/images/icon-nav-pots.svg";
import budgetsIcon from "../assets/images/icon-nav-budgets.svg";
import logoLarge from "../assets/images/logo-large.svg"
import logoSmall from "../assets/images/logo-small.svg"
import hideMenu from "../assets/images/icon-minimize-menu.svg"
import "../styles/navbar.css";
import "../styles/root.css";
import "../styles/font.css";
import { useState } from "react";

const Layout = () => {
    const [isExpanded, setIsExpanded] = useState(true)

    const toggleMenu = () => {
        setIsExpanded(!isExpanded)
    }

    
  return (
    <>
      <nav className={isExpanded ? "expanded" : "collapsed"}>
        <picture className="logoLarge">
            <img src={isExpanded? logoLarge : logoSmall} alt="Finance logo" />
        </picture>
        <ul>
          <NavLink to="/" end>
            {({ isActive }) => (
              <li className={`nav__list-item ${isActive ? "active" : ""}`}>
                <img
                  src={overviewIcon}
                  alt="go to all overview"
                  className={`nav-icon ${isActive ? "active-icon" : ""}`}
                />
               <p className={`path_name ${isExpanded ? "visible" : "hidden"}`}>Overview</p>
              </li>
            )}
          </NavLink>
          <NavLink to="/transactions" end>
            {({ isActive }) => (
              <li className={`nav__list-item ${isActive ? "active" : ""}`}>
                <img
                  src={transactionIcon}
                  alt="go to all overview"
                  className={`nav-icon ${isActive ? "active-icon" : ""}`}
                />
                <p className={`path_name ${isExpanded ? "visible" : "hidden"}`}>Transaction</p>             
              </li>
            )}
          </NavLink>
          <NavLink to="/budgets" end>
            {({ isActive }) => (
              <li className={`nav__list-item ${isActive ? "active" : ""}`}>
                <img
                  src={budgetsIcon}
                  alt="go to all overview"
                  className={`nav-icon ${isActive ? "active-icon" : ""}`}
                />
                <p className={`path_name ${isExpanded ? "visible" : "hidden"}`}>Budgets</p>
              </li>
            )}
          </NavLink>
          <NavLink to="/pots" end>
            {({ isActive }) => (
              <li className={`nav__list-item ${isActive ? "active" : ""}`}>
                <img
                  src={potIcon}
                  alt="go to all overview"
                  className={`nav-icon ${isActive ? "active-icon" : ""}`}
                />
                <p className={`path_name ${isExpanded ? "visible" : "hidden"}`}>Pots</p>

              </li>
            )}
          </NavLink>
          <NavLink to="/recurringbills" end>
            {({ isActive }) => (
              <li className={`nav__list-item ${isActive ? "active" : ""}`}>
                <img
                  src={recurringIcon}
                  alt="go to all overview"
                  className={`nav-icon ${isActive ? "active-icon" : ""}`}
                />
                <p className={`path_name ${isExpanded ? "visible" : "hidden"}`}>Recurring</p>
              </li>
            )}
          </NavLink>
        </ul>
        <div className="toggle__container" onClick={toggleMenu}>
            <img src={hideMenu} alt="minimize menu" className={`${isExpanded? "rotate0" : "rotate180" }`}/>
             <p className={`path_name ${isExpanded ? "visible" : "hidden"}`}>Minimize Menu</p> 
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
