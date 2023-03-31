import { useState } from "react"

export default function SideBar({floors, setter})
{
    const [menuOpen, toggleMenu] = useState(false)
    function setAndClose(index) {
        setter(index)
        toggleMenu(false)
    }
    // Will be passed an array of locations and a setter
    return (
        <div className="sidebar">
            {menuOpen && 
            <section>
                <div id="sidebar-overlay" onClick={() => toggleMenu(false)}></div>
                <div id="sidebar-background"></div>
                <div id="sidebar-container">
                    { floors.map((floor, index) =>
                        <p className="floor-link" onClick={()=>setAndClose(index)} 
                        style={{animationDelay:(index*0.1)+"s"}}>{floor}</p>
                    ) }
                </div> 
            </section>}
            <div className="menu" onClick={() => toggleMenu(!menuOpen)}>
                    <div id={menuOpen && "top-bar"} style={{top:(menuOpen ? "50%" : "0%")}}></div>
                    <div id={menuOpen && "middle-bar"} style={{top:"50%"}}></div>
                    <div id={menuOpen && "bottom-bar"} style={{top:(menuOpen ? "50%" : "100%")}}></div>
            </div>
        </div>
    )
}