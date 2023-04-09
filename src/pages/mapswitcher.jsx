import Image from "next/image"

export default function MapSwitcher({handleClick, aspectRatio, height, mapRef, floor}) {
    function renderMap() {
        switch(floor) {
            case 0:
                return (
                    <Image src = "/Floor1.svg" width={200} height={height} 
                    preserveAspectRatio={aspectRatio} className="rendered-map" onClick={handleClick} 
                    ref={mapRef} alt="Map" style={{height: height}}/>
                )
            case 1:
                return (
                    <Image src = "/Floor2.svg" width={200} height={height} 
                    preserveAspectRatio={aspectRatio} className="rendered-map"  onClick={handleClick} 
                    ref={mapRef} alt="Map" style={{height: height}}/>
                )
            case 2:
                return (
                    <Image src = "/Floor3.svg" width={200} height={height} 
                    preserveAspectRatio={aspectRatio} className="rendered-map"  onClick={handleClick}
                    ref={mapRef} alt="Map" style={{height: height}}/>
                )
            case 3:
                return (
                    <Image src = "/Floor4.svg" width={200} height={height} 
                    preserveAspectRatio={aspectRatio} className="rendered-map"  onClick={handleClick} 
                    ref={mapRef} alt="Map" style={{height: height}}/>
                )
            case 4:
                return (
                    <Image src = "/Floor5.svg" width={200} height={height} 
                    preserveAspectRatio={aspectRatio} className="rendered-map"  onClick={handleClick} 
                    ref={mapRef} alt="Map" style={{height: height}}/>
                )
            default:
                return (<p>Error: No image for floor {floor}</p>)
        }
    }
    return renderMap();
}