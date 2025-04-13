import React, { useEffect } from "react";

export default function JohnnyGame() {
  const name = "JohnnyGame";
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `/Build/JohnnysGame.loader.js`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
        // src = "index.html"
        src={`/data/${name}/index.html`}
        width="1920px"
        height="1080px"
        style={{
          border: "none",
          position: "absolute", // Use absolute positioning
          top: "-10%", // Center vertically
          left: "-15%", // Center horizontally
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
}
