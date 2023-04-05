import { useState } from "react"
import { useQuery } from "thin-backend-react"
import { query } from "thin-backend"

export default function SideBar({floors, setter, current})
{
    const [menuOpen, toggleMenu] = useState(false)
    function setAndClose(index) {
        setter(index)
        toggleMenu(false)
    }
    let locations = useQuery(query('locations'));
    function checkOtherFloors()
    {
        let otherFloors = false;
        if (locations)
            for (let i = 0; i < locations.length; i++)
                if (locations[i].floor != current)
                        otherFloors = true;
        return otherFloors;
    }
    function checkFloor(givenFloor)
    {                   
        let otherFloors = false;
        if (locations)
            for (let i = 0; i < locations.length; i++)
                if (locations[i].floor != current)
                    if (locations[i].floor == givenFloor)
                        otherFloors = true; 
        return otherFloors;
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
                        <FloorName index={index} floor={floor} locPresent={checkFloor} setAndClose={setAndClose} key={index}/>
                    ) }
                </div> 
            </section>}
            <div className="menu" onClick={() => toggleMenu(!menuOpen)}>
                    <div id={menuOpen && "top-bar"} style={{top:(menuOpen ? "50%" : "0%")}}></div>
                    <div id={menuOpen && "middle-bar"} style={{top:"50%"}}></div>
                    <div id={menuOpen && "bottom-bar"} style={{top:(menuOpen ? "50%" : "100%")}}></div>
                    { (!menuOpen && checkOtherFloors()) && <section className="active-dot"></section>}
            </div>
        </div>
    )
}

function FloorName({index, floor, locPresent, setAndClose})
{
    return (
        <div className="floor-container" style={{animationDelay:(index*0.1)+"s"}}>
            <p className="floor-link" onClick={()=>setAndClose(index)} 
            >{floor}</p>
            {locPresent(index) && <section className="active-dot"></section>}
        </div>
    )
}