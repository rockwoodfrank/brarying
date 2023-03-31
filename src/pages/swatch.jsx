import { useState } from "react"

export default function Swatch({color, selected, handleClick, colorIndex})
{
    const [borderVal, setBorder] = useState("none");
    return (
        <div className="swatch" style={{
            backgroundColor: color,
            border: selected ? "2px solid #f3f3f3" : "none",
            animationDuration: (0.3 + colorIndex*0.1)+"s"
        }} onClick={() => handleClick(color)}>
        </div>
    )
}