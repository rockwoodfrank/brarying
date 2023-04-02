export default function Time({time, timeList, selected, handleClick, timeIndex, setCustom})
{
    function handleTimeChange(e)
    {
        setCustom(e.target.value);
    }
    if (timeList.indexOf(time) >= 0) return (
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
        backgroundColor: selected && "#9e9e9e"}} onClick={() => handleClick(time)}
        placeholder="Custom" defaultValue={time < 0 ? "" : time} onChange={handleTimeChange}/>
    );
}