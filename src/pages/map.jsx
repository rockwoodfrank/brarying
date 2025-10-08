import Marker from "./marker";
import Location from "./location";
import { useState, useRef, useEffect } from 'react';
import { uuid } from "uuidv4";
import MapSwitcher from "./mapswitcher";
import ClickDetector from "./clickdetector";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);


export default function Map({floor, floorIndex})
{
    const [pageX, setPageX] = useState(0);
    const [pageY, setPageY] = useState(0);
    const [openEditor, setOpen] = useState('');//If an editor is open, will be set to a value, otherwise ''
    const mapHeight = 300;
    const mapRef = useRef();
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getLocations();
    }, []);

    async function getLocations() {
        const { data } = await supabase.from("locations").select();
        setLocations(data);
    }

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
    function saveData(location)
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
        if (openEditor == "")
        {
            setOpen('editor');
            setPageX(pageX);
            setPageY(pageY);
        }
        else
            setOpen("")
    }
    function calcPercentX(pageX)
    {
        let baselineConst = mapRef.current.getBoundingClientRect().x;
        if (baselineConst > (300/3))
        {
            let percentRaw = (((pageX-baselineConst)/300) * 100)
            return Math.round(percentRaw * 100) / 100;
        }
        else
        {
            let mapWidth = window.innerWidth * 0.6;
            baselineConst = (window.innerWidth-mapWidth) / 2;
            let percentRaw = (((pageX-baselineConst)/mapWidth) * 100)
            return Math.round(percentRaw * 100) / 100;
        }
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
        let newLocation = {name: name, xPos: calcPercentX(xPos), yPos: calcPercentY(yPos), color: color, time_exp: time}
        console.log(newLocation);
        saveData(newLocation, floor);
    }
    return (
        <div id = "map">
            {filterTimes(locations)}
            <p className="direction">S<br/>o<br/>u<br/>t<br/>h</p>
            <div id="map-grid">
                <MapSwitcher handleClick={handleClick} aspectRatio={"none"} 
                height={mapHeight} mapRef={mapRef} floor={floor} />
                {
                    locations && locations.length>0 && locations.filter(loc => (loc.floor == floor)).map((loc)=>
                        <Location name = {loc.name} xPos={loc.xPos} yPos={loc.yPos} 
                            givenColor={loc.color} givenTime={loc.timeExp} key={loc.id} 
                            mapOpen = {openEditor} setOpen = {setOpen} editorKey = {loc.id}
                        />)
                }
            </div>
            <p className="direction">N<br/>o<br/>r<br/>t<br/>h</p>
            {openEditor == "editor" && <Marker xPos={pageX} yPos={pageY} openMod={setOpen} pushLoc={pushLocation} />}
        </div>
    )
}