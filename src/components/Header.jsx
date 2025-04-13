import React from "react";

export default function Header() {
  return (
    <header className="black">
      <nav>
        <h5 className="max center-align">Title</h5>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/explore">Explore Games</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
