import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="black">
      <nav>
        <h5 className="max center-align">Title</h5>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore Games</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
