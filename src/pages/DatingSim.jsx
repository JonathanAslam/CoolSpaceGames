import React, { useEffect } from "react";

export default function DaneGame() {
    const name = "DatingSim";

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `/Build/___.loader.js`;
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <iframe
                // src="index.html"
                src={`/data/${name}/index.html`}
                width="1080px"
                height="1920px"
                style={{
                    border: "none",
                    position: "fixed", // Use absolute positioning
                    top: "-10%", // Center vertically
                    left: "-15%", // Center horizontally
                }}
                allowFullScreen
            ></iframe>
        </div>
    );
}
