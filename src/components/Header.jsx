// import React from "react";
// import { Link } from "react-router-dom";


// export default function Header() {
//   return (
//     <header className="black">
//       <nav>
//         <h5 className="max center-align">Title</h5>
//         <ul className="nav-links">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/explore">Explore Games</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "60px", // Adjust height as needed
        backgroundColor: "black",
        color: "white",
        zIndex: 1000,
      }}
    >
      <nav>
        <h5 className="max center-align">CoolSpaceGames</h5>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore Games</Link>
          </li>
          <li>
            <Link to="/AboutCreators">About The Devs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}