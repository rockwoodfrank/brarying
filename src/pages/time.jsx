import { useState } from "react";

export default function Time({time, timeList, selected, handleClick, timeIndex, setCustom})
{
    const [customTime, setCustomTime] = useState(time);
    function handleCustomClick(time)
    {
        setCustomTime("0:00")
        handleClick(time)
    }
    function handleTimeChange(e)
    {
        setCustom(e.target.value);
    }
    if (time && timeList.indexOf(time) >= 0) return (
        <div className="time" style={{
            backgroundColor: selected && "#9e9e9e",
            animationDuration: (0.3 + timeIndex*0.1)+"s"
        }} onClick={() => handleClick(time)}>
            {time == 1 ? time + " Hour" : time + " Hours"}
        </div>
    ); 
    else return (
        <input type="text" className="time" 
        style={{animationDuration: (0.3 + timeIndex*0.1)+"s", 
        backgroundColor: selected && "#9e9e9e"}} onClick={() => handleCustomClick(time)}
        placeholder="Custom" defaultValue={customTime < 0 ? "" : customTime} onChange={handleTimeChange}/>
    );
}