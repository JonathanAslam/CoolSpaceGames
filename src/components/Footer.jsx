import React from "react";

// export default function Footer() {
//   return (
//     <footer className="black">
//       <div className="center">
//         <p>&copy; 2023 Your Company. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "40px", // Adjust height as needed
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        zIndex: 1000,
      }}
    >
      <p>© 2025 JDJ Games</p>
    </footer>
  );
}