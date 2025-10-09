import Image from "next/image";
import { useState } from "react";

export default function InfoBox({time, id, setEditor, deleteLocation})
{
    const [confirm, setConfirm] = useState(false)
    
    function deleteTask()
    {
        if (!confirm)
            setConfirm(true)
        else
            if (id != '' || id != 'new')
            {
                // TODO: Replace with a working function
                deleteLocation(id)
                setEditor("")
            }
    }
    function openMainEditor()
    {
        setEditor("")
    }
    return (
        <div className="mini-editor">
            <svg className={confirm ? "pencil invisible" : "pencil"} width="20" height="20" viewBox="0 0 55 55" 
            fill="none" xmlns="http://www.w3.org/2000/svg" onClick={openMainEditor}>
                <path d="M38.9617 2.07324L33.7624 7.27246L47.7273 21.2373L52.9265 16.0381C55.6121 13.3525 55.6121 9.00195 52.9265 6.31641L48.6941 2.07324C46.0085 -0.612305 41.6579 -0.612305 38.9724 2.07324H38.9617ZM31.3347 9.7002L6.29467 34.751C5.17748 35.8682 4.36107 37.2539 3.9099 38.7686L0.107166 51.6914C-0.161389 52.6045 0.0856813 53.582 0.751697 54.248C1.41771 54.9141 2.39525 55.1611 3.2976 54.9033L16.2204 51.1006C17.7351 50.6494 19.1208 49.833 20.238 48.7158L45.2996 23.665L31.3347 9.7002Z" fill="black"/>
            </svg>
            <svg className={confirm ? "trash trash-confirm" : "trash"} width="17" height="20" viewBox="0 0 56 64" 
            fill="none" xmlns="http://www.w3.org/2000/svg" onClick={deleteTask}>
                <path d="M16.9 2.2125L16 4H4C1.7875 4 0 5.7875 0 8C0 10.2125 1.7875 12 4 12H52C54.2125 12 56 10.2125 56 8C56 5.7875 54.2125 4 52 4H40L39.1 2.2125C38.425 0.85 37.0375 0 35.525 0H20.475C18.9625 0 17.575 0.85 16.9 2.2125ZM52 16H4L6.65 58.375C6.85 61.5375 9.475 64 12.6375 64H43.3625C46.525 64 49.15 61.5375 49.35 58.375L52 16Z" fill="black"/>
            </svg>
            {confirm && <svg fill="#000000" className="cross" viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg" onClick={()=>setConfirm(false)}>
                <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"/>
            </svg>}
        </div>
    )
}