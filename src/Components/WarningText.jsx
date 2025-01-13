import { useEffect, useState } from "react";

const WarningText = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const moveBox = () => {
          const x = Math.random() * (window.innerWidth - 200); // Adjust width
          const y = Math.random() * (window.innerHeight - 50); // Adjust height
          setPosition({ x, y });
        };
    
        const interval = setInterval(moveBox, 2000); // Change position every 2 seconds
        moveBox(); // Initial position
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);
    return (
        <div
      className="moving-box"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      This system clone only for learning purpose
    </div>
    );
};

export default WarningText;