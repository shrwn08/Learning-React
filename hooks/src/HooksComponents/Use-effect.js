import React, { useState, useEffect } from "react";

const CleanUp = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const currentScreenWidth = () => {
        setWidth(()=>window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", currentScreenWidth);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("resize", currentScreenWidth);
        };
    }, []);

    return (
        <div>
            <h2>
                Size of Window <span>{width}</span>
            </h2>
        </div>
    );
};

export default CleanUp;
