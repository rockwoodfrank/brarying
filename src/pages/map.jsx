import Marker from "./marker";
import Location from "./location";
import { useState, useRef } from 'react';
import { uuid } from "uuidv4";

export default function Map({locations})
{
    const [locList,setList] = useState([]);
    const [pageX, setPageX] = useState(0);
    const [pageY, setPageY] = useState(0);
    const [openEditor, setOpen] = useState(false);
    const mapHeight = 300;
    const mapRef = useRef();

    const saveData = async (location, floor) => {
        const response = await fetch('/api/storeJSONData', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name:location.name, xPos:location.xPos, yPos:location.yPos, color:location.color, time_exp:location.time_exp, key:location.key, floor:floor }),
        });
        const data = await response.json();
    }
    function handleClick({ pageX, pageY })
    {
        if (!openEditor)
        {
            
            setOpen(true);
            setPageX(pageX);
            setPageY(pageY);
        }
        else
            setOpen(false)
    }
    function calcPercentX(pageX)
    {
        let mapWidth = window.innerWidth * 0.6;
        let baselineConst = (window.innerWidth-mapWidth) / 2;
        return (((pageX-baselineConst)/mapWidth) * 100);
    }
    function calcPercentY(pageY)
    {
        let baselineConst = mapRef.current.getBoundingClientRect().y;
        console.log(baselineConst)
        console.log(((pageY-baselineConst)/mapHeight) * 100)
        return (((pageY-baselineConst)/mapHeight) * 100);
    }
    function pushLocation(name, color, time, xPos, yPos)
    {
        console.log("Bing!");
        let newLocation = {name: name, xPos: calcPercentX(xPos), yPos: calcPercentY(yPos), color: color, time_exp: time, key: uuid()}
        saveData(newLocation, 2);
        setList(oldArray => [...oldArray, newLocation]);
    }
    return (
        <div id = "map">
            <p className="direction">S<br/>o<br/>u<br/>t<br/>h</p>
            <div id="map-grid">
                <svg width="100%" height={mapHeight + "px"} viewBox="0 0 1000 1279" fill="none" 
                    onClick={handleClick} id="map-actual"
                    xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M504.5 22.5H605.5V5H902V21H985V212.5V230.5H994.5V347.5H985V898H993V1012.5H985V1155H875V1170.5H720V1155H615.5V1274H50.5V1012.5H5.5V898H65V682.5H48.5V566H65V232.5H52V6H504.5V22.5ZM281 866H587V332H281V866Z" 
                    fill="#FFDFAE" stroke="#4C697B" strokeWidth="10" ref={mapRef}/>
                </svg>
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
            </div>
            <p className="direction">N<br/>o<br/>r<br/>t<br/>h</p>
            {openEditor && <Marker xPos={pageX} yPos={pageY} openMod={setOpen} pushLoc={pushLocation} />}
        </div>
    )
}