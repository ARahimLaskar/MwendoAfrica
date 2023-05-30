import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/99/62/cc/caption.jpg?w=1200&h=-1&s=1"
            alt="Logo"
          />
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Resources</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="Login-btn">
          <span>{isAuthenticated && user && <p>{user.name}</p>}</span>
          {isAuthenticated ? (
            <li>
              <button
                id="sign-up"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button id="login" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            </li>
          )}
        </div>
        <div>
          <Link to="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
