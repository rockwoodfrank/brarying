import Marker from "./marker";
import Location from "./location";
import { useState } from 'react';
import { uuid } from "uuidv4";

export default function Map({locations})
{
    const [locList,setList] = useState([]);
    const [pageX, setPageX] = useState(0);
    const [pageY, setPageY] = useState(0);
    const [openEditor, setOpen] = useState(false);
    function handleClick({ pageX, pageY })
    {
        if (!openEditor)
        {
            
            setOpen(true);
            setPageX((pageX/window.innerWidth)*100);
            setPageY((pageY/window.innerHeight)*100);
        }
        else
            setOpen(false)
    }
    function pushLocation(name, color, time, xPos, yPos)
    {
        console.log("Bing!");
        let newLocation = {name: name, xPos: xPos, yPos: yPos, color: color, time_exp: time, key: uuid()}
        setList(oldArray => [...oldArray, newLocation])
    }
    return (
        <div id = "map">
            <div id="map-grid">
                    <p className="direction">S<br/>o<br/>u<br/>t<br/>h</p>
                    <img onClick={handleClick} src='/Floor3.svg' />
                    <p className="direction">N<br/>o<br/>r<br/>t<br/>h</p>
            </div>
            {
                locations && locations.length>0 && locations.map((loc)=>
                    <Location name = {loc.name} xPos={loc.xPos} yPos={loc.yPos} 
                        givenColor={loc.color} givenTime={loc.time_exp} key={loc.key} 
                    />)
            }
            {
                locList.map((loc)=><Location xPos={loc.xPos} yPos={loc.yPos} name={loc.name} 
                    givenColor={loc.color} givenTime={loc.time} key={loc.key} />)
            }
            {openEditor && <Marker xPos={pageX} yPos={pageY} openMod={setOpen} pushLoc={pushLocation} />}
        </div>
    )
}