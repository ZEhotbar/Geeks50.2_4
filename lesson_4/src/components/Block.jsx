import { useState } from "react";

export const Block = () => {
    const [color, setColor] = useState(true);

    const handleClick = () => {
        setColor(prev => !prev);
    }

    return (
        <div 
            style={{ width: 200, height: 200, backgroundColor: color ? "blue" : "red" 
            }} 
            onClick={handleClick}
        >
            Block
        </div>
    );
}

export default Block;
