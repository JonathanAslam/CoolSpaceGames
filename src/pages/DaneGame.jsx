import React, { useEffect } from "react";

export default function DaneGame() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `/Build/Johnny'sGame.loader.js`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
        src="index.html"
        width="1920px"
        height="1080px"
        style={{
          border: "none",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
}
