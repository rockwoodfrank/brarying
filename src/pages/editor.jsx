import { useState } from "react";
import Swatch from "./swatch";
import Time from "./time";

export default function Editor({selectedColor, setColor, handleClick, openMod, xPos, yPos, newPin, givenTime, previousName})
{
    const colors = [
        '#FF5858', '#2CB55B', '#DE58FF', '#FC9A27', '#58AFFF', '#606060'
    ]
    const times = [
        1, 2, 4
    ]
    const [inputVal, setInput] = useState(newPin ? "" : previousName)
    const [selectedTime,setTime]=useState(givenTime ? givenTime : times[0]);
    const [customTime, setCustom]=useState(givenTime ? givenTime:'0:00');
    let colorIndex = 0;
    let timeIndex = 0;

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
    function sendInfo()
    {
        if (inputVal != '')
        {
            if((times.indexOf(selectedTime) >= 0))
            {
                handleClick(inputVal, selectedColor, calcTime(selectedTime), xPos, yPos);
                openMod("");
            } 
            else if(customTime != '')
            {
                handleClick(inputVal, selectedColor, calcTime(customTime), xPos, yPos);
                openMod("");
            }
        }
    }
    
    return (
        <div className="editor">
            <div className="top">
                <input type="text" name="" id="" placeholder="Name(s)..." 
                    onChange={handleTagChange} style={{animationDuration: "0.4s"}} defaultValue={newPin ? "" : previousName}/>
                <div className="symbols">
                    <img src="/check.svg" alt="Confirm" onClick={sendInfo} style={{
                        width: "1em",
                        animationDuration: "0.5s"
                    }}/>
                    <img src="/cross.svg" alt="Close" style={{
                        width: "1em",
                        animationDuration: "0.6s"
                    }} onClick={() => openMod(newPin ? "" : false)}/>
                </div>
            </div>
            <div className="options">
                <div className="colors">
                    {colors.map((color) => {
                        colorIndex++;
                        return <Swatch color={color} selected={color == selectedColor} handleClick={setColor} colorIndex={colorIndex} key={color}/>
                    })}
                </div>
                <div className="times">
                    {times.map((time) => {
                        timeIndex++;
                        return <Time time={time} timeList={times} selected={time == selectedTime} handleClick={setTime} key={time} timeIndex={timeIndex}/>
                    })}
                    <Time time={givenTime ? givenTime : -1} timeList={times} selected={(givenTime ? givenTime : -1) == selectedTime} 
                    handleClick={setTime} key={-1} timeIndex={4} setCustom={setCustom}/>
                </div>
            </div>
        </div>
    )
}