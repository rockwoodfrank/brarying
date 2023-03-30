import { useState } from "react";
import Swatch from "./swatch";
import Time from "./time";

export default function Editor({selectedColor, setColor, handleClick, openMod, xPos, yPos})
{
    const colors = [
        '#FF5858', '#2CB55B', '#DE58FF', '#FC9A27', '#58AFFF', '#606060'
    ]
    const times = [
        1, 2, 4, -1
    ]
    const [inputVal, setInput] = useState('')
    const [selectedTime,setTime]=useState(times[0]);

    function calcTime(time)
    {
        const timeMillis = time * 60 * 60 * 1000;
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
            handleClick(inputVal, selectedColor, calcTime(selectedTime), xPos, yPos);
            openMod(false)
        }
    }
    
    return (
        <div className="editor">
            <div className="top">
                <input type="text" name="" id="" placeholder="Name(s)..." onChange={handleTagChange}/>
                <div className="symbols">
                    <img src="/check.svg" alt="Confirm" onClick={sendInfo} style={{
                        width: "1em"
                    }}/>
                    <img src="/cross.svg" alt="Close" style={{
                        width: "1em"
                    }} onClick={() => openMod(false)}/>
                </div>
            </div>
            <div className="options">
                <div className="colors">
                    {colors.map((color) => <Swatch color={color} selected={color == selectedColor} handleClick={setColor} key={color}/>)}
                </div>
                <div className="times">
                    {times.map((time) => <Time time={time} selected={time == selectedTime} handleClick={setTime} key={time}/>)}
                </div>
            </div>
        </div>
    )
}