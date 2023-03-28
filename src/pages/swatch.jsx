import { useState } from "react"

export default function Swatch({color, selected, handleClick})
{
    const [borderVal, setBorder] = useState("none");
    return (
        <div className="swatch" style={{
            backgroundColor: color,
            border: selected ? "2px solid #f3f3f3" : "none"
        }} onClick={() => handleClick(color)}>
        </div>
    )
}