export default function Time({time, selected, handleClick})
{
    return (
        <div className="time" style={{
            backgroundColor: selected && "#9e9e9e"
        }} onClick={() => handleClick(time)}>
            {time < 0 ? "Custom" : time == 1 ? time + " Hour" : time + " Hours"}
        </div>
    )
}