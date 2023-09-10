import { useState } from "react";
import Swatch from "./swatch";
import Time from "./time";

export default function Editor({inputVal, setInput, handleClick, openMod, pos, newPin, givenTime, previousName, floor, setFloor})
{
    const colors = [
        '#FF5858', '#2CB55B', '#DE58FF', '#FC9A27', '#58AFFF', '#606060'
    ]
    const times = [
        1, 2, 4
    ]
    const [selectedTime,setTime]=useState(givenTime ? givenTime : times[0]);
    const [customTime, setCustom]=useState(givenTime ? givenTime:'0:00');
    let colorIndex = 0;
    let timeIndex = 0;
    const [floors, setFloors] = useState(["None", "1", "2", "3", "4", "5"])
    const Flo = floors.map(Flo => Flo)
    const handleFloorChange = (e) => setFloor(e.target.value)

    function calcTime(time)
    {
        let timeMillis;
        if (times.indexOf(time) >= 0)
            timeMillis = time * 60 * 60 * 1000;
        else
        {
            const hours = parseInt(time);
            const minutes = parseInt(time.substring(time.length-2))
            timeMillis = (hours + minutes/60) * 60 * 60 * 1000;
        }
        return new Date(Date.now() + timeMillis);
    }
    function handleTagChange(e)
    {
        setInput(e.target.value);
    }
    function parseFloor(f)
    {
        if (f == "None")
            return 0;
        return parseInt(f, 10);
    }
    function sendInfo()
    {
        if (inputVal != '')
        {
            if((times.indexOf(selectedTime) >= 0))
            {
                handleClick(inputVal, calcTime(selectedTime), pos.lng, pos.lat, parseFloor(floor));
                openMod("");
                setInput("");
                setFloor("0");
            } 
            else if(customTime != '')
            {
                handleClick(inputVal, calcTime(customTime), pos.lng, pos.lat, parseFloor(floor));
                openMod("");
                setInput("");
                setFloor("0");
            }
        }
    }
    
    return (
        <div className="editor">
            <input type="text" name="" id="" placeholder="Name(s)..." 
                onChange={handleTagChange} style={{animationDuration: "0.4s"}} defaultValue={newPin ? "" : previousName}/>
            <div className="times">
                {times.map((time) => {
                    timeIndex++;
                    return <Time time={time} timeList={times} selected={time == selectedTime} handleClick={setTime} key={time} timeIndex={timeIndex}/>
                })}
                <Time time={givenTime ? givenTime : -1} timeList={times} selected={(givenTime ? givenTime : -1) == selectedTime} 
                handleClick={setTime} key={-1} timeIndex={4} setCustom={setCustom}/>
            </div>
            <div className="symbols">
                <p>Floor</p>
                <select
                onChange={e => handleFloorChange(e)}
                id="floors" >
                {
                    Flo.map((floor, key) => <option value={key}>{floor}</option>)
                }
                </select>
                <div className="choice-img" id = "confirm" onClick={sendInfo}>
                    <img src="/check.svg" alt="Confirm" style={{
                        width: "1em",
                        animationDuration: "0.5s"
                    }}/>
                </div>
                <div className="choice-img" id = "close" onClick={() => openMod(newPin ? "" : false)}>
                    <img src="/cross.svg" alt="Close" style={{
                        width: "1em",
                        animationDuration: "0.6s"
                    }}/>
                </div>
            </div>
        </div>
    )
}