// import React from "react";
// import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";

// export default function Layout({ children }) {
//   return (
//     <div
//       style={{
//         background: 'url("./assets/SPACE.jpg") no-repeat center center fixed',
//         backgroundSize: "cover",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <Header />
//       <main>{children}</main>
//       <Footer />
//     </div>
//   );
// }
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <div
      style={{
        background: 'url("./assets/SPACE.jpg") no-repeat center center fixed',
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          overflowY: "auto", // Enable scrolling for the main content
          marginTop: "60px", // Adjust for header height
          marginBottom: "40px", // Adjust for footer height
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}