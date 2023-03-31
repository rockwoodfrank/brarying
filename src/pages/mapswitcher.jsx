export default function MapSwitcher({handleClick, aspectRatio, height, mapRef, floor}) {
    function renderMap() {
        switch(floor) {
            case 0:
                return;
            case 1:
                return;
            case 2:
                return (
                <svg width="100%" height={height + "px"} viewBox="0 0 1000 1279" fill="none" 
                    onClick={handleClick} id="map-actual"
                    xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio={aspectRatio}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M504.5 22.5H605.5V5H902V21H985V212.5V230.5H994.5V347.5H985V898H993V1012.5H985V1155H875V1170.5H720V1155H615.5V1274H50.5V1012.5H5.5V898H65V682.5H48.5V566H65V232.5H52V6H504.5V22.5ZM281 866H587V332H281V866Z" 
                    fill="#FFDFAE" stroke="#4C697B" strokeWidth="10" ref={mapRef}/>
                </svg>)
            case 3:
                return;
            case 4:
                return;
            default:
                return (<p>Error: No image for floor {floor}</p>)
        }
    }
    return renderMap();
}