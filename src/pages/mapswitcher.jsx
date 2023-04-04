export default function MapSwitcher({handleClick, aspectRatio, height, mapRef, floor}) {
    function renderMap() {
        switch(floor) {
            case 0:
                return (
                    <svg width="100%" height={height + "px"} viewBox="0 0 837 1245" fill="none" onClick={handleClick} id="map-actual"
                    xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio={aspectRatio} ref={mapRef}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42 1240V1016H5V823H19V739H5V545H19V461H5V5H91V173H209V117H290V212H320V173H343V117H422V131H507V117H832V180H828V360H832V460H828V916H832V1016H828V1196H832V1240H785V1234H517V1240H505V1199H332V1240H273V1237H260V1240H42ZM416 880H236V497L416 496V880Z" fill="#FFDFAE" stroke="#4C697B" stroke-width="10"/>
                        <rect x="237" y="496" width="179" height="383" fill="#447053"/>
                    </svg>
                )
            case 1:
                return (
                    <svg width="100%" height={height + "px"} viewBox="0 0 854 1132" fill="none" onClick={handleClick} id="map-actual"
                    xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio={aspectRatio} ref={mapRef}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1127V470H15V471H19V200H5V5H15V19H100V5H253V44H283V5H385V6H470V5H755H756V6H849V201H794V283H849V757H794V839H849V1034H480V1072H468V1065H294V1127H5ZM199 328V712V807H381V328H199Z" fill="#FFDFAE" stroke="#4C697B" strokeWidth="10"/>
                    </svg>
                )
            case 2:
                return (
                    <svg width="100%" height={height + "px"} viewBox="0 0 848 1080" fill="none" 
                        onClick={handleClick} id="map-actual" ref={mapRef}
                        xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio={aspectRatio}>
                       <path d="M5 854V859H10H42V1070V1075H47H522H527V1070V964H530V972V977H535H601V986V991H606H740H745V986V977H831H836V972V859H838H843V854V754V749H838H836V302H837H842V297V198V193H837H836V24V19H831H767V10V5H762H513H508V6H432V5H427H325H320V6H300V5H295H142H137V10V19H62V10V5H57H47H42V10V205V210H47H55.0184L55.9778 470H47H42V475V576V581H47H56V749H10H5V754V854ZM245 657V291H491V657H245Z" fill="#FFDFAE" stroke="#4C697B" strokeWidth="10"/>
                        <g clipPath="url(#clip0_85_55)">
                        <path d="M418 41C416.559 41 415.391 42.168 415.391 43.6088V118.391C415.391 119.832 416.559 121 418 121C419.44 121 420.609 119.832 420.609 118.391V43.6088C420.609 42.168 419.44 41 418 41Z" fill="#4C697B"/>
                        <path d="M394.522 47.9566C388.768 47.9566 384.087 52.6377 384.087 58.3914C384.087 64.1452 388.768 68.8262 394.522 68.8262C400.276 68.8262 404.957 64.1452 404.957 58.3914C404.957 52.6375 400.276 47.9566 394.522 47.9566ZM394.522 63.6087C391.645 63.6087 389.304 61.2683 389.304 58.3914C389.304 55.5145 391.645 53.1741 394.522 53.1741C397.399 53.1741 399.739 55.5145 399.739 58.3914C399.739 61.2681 397.399 63.6087 394.522 63.6087Z" fill="#4C697B"/>
                        <path d="M441.478 47.9566C435.725 47.9566 431.043 52.6377 431.043 58.3914C431.043 64.1452 435.725 68.8262 441.478 68.8262C447.232 68.8262 451.913 64.1452 451.913 58.3914C451.913 52.6375 447.232 47.9566 441.478 47.9566ZM441.478 63.6087C438.601 63.6087 436.261 61.2683 436.261 58.3914C436.261 55.5145 438.601 53.1741 441.478 53.1741C444.355 53.1741 446.696 55.5145 446.696 58.3914C446.696 61.2681 444.355 63.6087 441.478 63.6087Z" fill="#4C697B"/>
                        <path d="M407.565 74.0434H381.478C379.659 74.0434 378.397 75.8639 379.036 77.5681L386.696 97.9947V107.956C386.696 112.272 390.207 115.782 394.522 115.782C398.837 115.782 402.348 112.272 402.348 107.956V97.9947L410.008 77.5681C410.647 75.8645 409.385 74.0434 407.565 74.0434ZM397.297 96.6058C397.187 96.8986 397.131 97.2089 397.131 97.5217V107.957C397.131 109.395 395.96 110.565 394.522 110.565C393.083 110.565 391.913 109.395 391.913 107.957V97.5217C391.913 97.2089 391.857 96.8986 391.747 96.6058L385.243 79.2609H403.801L397.297 96.6058Z" fill="#4C697B"/>
                        <path d="M456.965 96.6058L449.138 75.7362C448.757 74.7181 447.783 74.0436 446.696 74.0436H436.261C435.174 74.0436 434.2 74.7183 433.818 75.7362L425.992 96.6058C425.353 98.3094 426.615 100.13 428.435 100.13H433.652V107.957C433.652 112.272 437.163 115.783 441.478 115.783C445.794 115.783 449.305 112.272 449.305 107.957V100.13H454.522C456.341 100.13 457.604 98.3098 456.965 96.6058ZM446.696 94.913C445.255 94.913 444.087 96.0809 444.087 97.5217V107.957C444.087 109.395 442.917 110.565 441.478 110.565C440.04 110.565 438.87 109.395 438.87 107.957V97.5217C438.87 96.0811 437.702 94.913 436.261 94.913H432.199L438.069 79.2609H444.888L450.757 94.9131H446.696V94.913Z" fill="#4C697B"/>
                        </g>
                        <rect x="194" y="705.667" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="572.333" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="639" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="505.667" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="692.333" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="559" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="625.667" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="492.333" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="679" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="545.667" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="612.333" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="479" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="665.667" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="532.333" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="599" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="465.667" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="652.333" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="519" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="585.667" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="452.333" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <rect x="194" y="439" width="45" height="13.3333" stroke="#4C697B" strokeWidth="6"/>
                        <defs>
                        <clipPath id="clip0_85_55">
                        <rect width="80" height="80" fill="white" transform="translate(378 41)"/>
                        </clipPath>
                        </defs>
                    </svg>
                )
            case 3:
                return (
                    <svg width="100%" height={height + "px"} viewBox="0 0 836 1040" fill="none" 
                        onClick={handleClick} id="map-actual" ref={mapRef}
                        xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio={aspectRatio}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42 1035V848H5V748H56V570H42V470H52V471H56V200H42V5H52V19H137V5H290V6H320V5H422V19H507V5H700V19H788V192.973H831V292H732V290H698V750H732V748H831V847H791V940H788V966H700V980H600V966H516.832V1035H42ZM470 711H235V292H470V711Z" fill="#FFDFAE" stroke="#4C697B" strokeWidth="10"/>
                    </svg>
                )
            case 4:
                return (
                    <svg width="100%" height={height + "px"} viewBox="0 0 800 985" fill="none" 
                        onClick={handleClick} id="map-actual" ref={mapRef}
                        xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio={aspectRatio}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M100 980V966H16V980H5V747H19V570H5V470H19V200H5V60H244V5H253V6H283V5H626V19H695V192H795V292H695V748H794V847H695V965H625V980H100ZM482 748H198V280H482V748Z" fill="#FFDFAE" stroke="#4C697B" strokeWidth="10"/>
                    </svg>
                )
            default:
                return (<p>Error: No image for floor {floor}</p>)
        }
    }
    return renderMap();
}