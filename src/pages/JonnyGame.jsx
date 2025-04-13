import React, { useEffect } from "react";

export default function JonnyGame() {
  const name = "JonnyGame";

  const script = document.createElement("script");
  script.src = `.loader.js`;
  script.async = true;

  useEffect(() => {
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
        src={`../data/${name}/index.html`}
        width="100%"
        height="100%"
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
