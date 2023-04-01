import Marker from "./marker";
import Location from "./location";
import { useState, useRef } from 'react';
import { uuid } from "uuidv4";
import { useQuery } from "thin-backend-react";
import { createRecord, deleteRecord, query } from "thin-backend";
import MapSwitcher from "./mapswitcher";

export default function Map({floor, floorIndex})
{
    const [pageX, setPageX] = useState(0);
    const [pageY, setPageY] = useState(0);
    const [openEditor, setOpen] = useState(false);
    const mapHeight = 300;
    const mapRef = useRef();
    let locations = useQuery(query('locations'));
    function checkTime(location) {
        return Date.parse(location.timeExp) <= Date.now()
    }
    function filterTimes(locs) {
        
        if (locs != null)
        {  
            for (let i=0; i < locs.length; i++)
            {
                if (checkTime(locs[i]))
                    deleteRecord('locations', locs[i].id)
            }
        }
    }
    function saveData(location, floor)
    {
        createRecord('locations',{
            name: location.name,
            xPos: location.xPos,
            yPos: location.yPos,
            color: location.color,
            timeExp: location.time_exp,
            floor: floor
        });
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
        let percentRaw = (((pageX-baselineConst)/mapWidth) * 100)
        return Math.round(percentRaw * 100) / 100;
    }
    function calcPercentY(pageY)
    {
        let baselineConst = mapRef.current.getBoundingClientRect().y;
        let percentRaw = (((pageY-baselineConst)/mapHeight) * 100)
        return Math.round(percentRaw * 100) / 100;
    }
    function pushLocation(name, color, time, xPos, yPos)
    {
        console.log("Bing!");
        let newLocation = {name: name, xPos: calcPercentX(xPos), yPos: calcPercentY(yPos), color: color, time_exp: time, key: uuid()}
        saveData(newLocation, floor);
    }
    return (
        <div id = "map">
            {filterTimes(locations)}
            <p className="direction">S<br/>o<br/>u<br/>t<br/>h</p>
            <div id="map-grid">
                <MapSwitcher handleClick={handleClick} aspectRatio={"none"} height={mapHeight} mapRef={mapRef} floor={floor}/>
                {
                    locations && locations.length>0 && locations.filter(loc => (loc.floor == floor)).map((loc)=>
                        <Location name = {loc.name} xPos={loc.xPos} yPos={loc.yPos} 
                            givenColor={loc.color} givenTime={loc.timeExp} key={loc.id} 
                            mapOpen = {openEditor} setOpen = {setOpen}
                        />)
                }
            </div>
            <p className="direction">N<br/>o<br/>r<br/>t<br/>h</p>
            {openEditor && <Marker xPos={pageX} yPos={pageY} openMod={setOpen} pushLoc={pushLocation} />}
        </div>
    )
}