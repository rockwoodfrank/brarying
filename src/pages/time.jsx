export default function Time({time, selected, handleClick, timeIndex})
{
    return (
        <div className="time" style={{
            backgroundColor: selected && "#9e9e9e",
            animationDuration: (0.3 + timeIndex*0.1)+"s"
        }} onClick={() => handleClick(time)}>
            {time < 0 ? "Custom" : time == 1 ? time + " Hour" : time + " Hours"}
        </div>
    )
}