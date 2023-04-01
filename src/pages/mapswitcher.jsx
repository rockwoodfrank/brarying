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
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1127V470H15V471H19V200H5V5H15V19H100V5H253V44H283V5H385V6H470V5H755H756V6H849V201H794V283H849V757H794V839H849V1034H480V1072H468V1065H294V1127H5ZM199 328V712V807H381V328H199Z" fill="#FFDFAE" stroke="#4C697B" stroke-width="10"/>
                    </svg>
                )
            case 2:
                return (
                    <svg width="100%" height={height + "px"} viewBox="0 0 838 1072" fill="none" 
                        onClick={handleClick} id="map-actual" ref={mapRef}
                        xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio={aspectRatio}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42 849H5V749H56V571H42V470H52V471H56L55 200H42V5H52V19H137V5H290V6H320V5H422V6H508V5H757V19H826V193H832V292H826V749H833V849H826V967H735V981H601V967H530V954H517L515 1066L42 1065V849ZM235 281H491V657H235V281Z" fill="#FFDFAE" stroke="#4C697B" stroke-width="10"/>
                    </svg>
                )
            case 3:
                return (
                    <svg width="100%" height={height + "px"} viewBox="0 0 836 1040" fill="none" 
                        onClick={handleClick} id="map-actual" ref={mapRef}
                        xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio={aspectRatio}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42 1035V848H5V748H56V570H42V470H52V471H56V200H42V5H52V19H137V5H290V6H320V5H422V19H507V5H700V19H788V192.973H831V292H732V290H698V750H732V748H831V847H791V940H788V966H700V980H600V966H516.832V1035H42ZM470 711H235V292H470V711Z" fill="#FFDFAE" stroke="#4C697B" stroke-width="10"/>
                    </svg>
                )
            case 4:
                return (
                    <svg width="100%" height={height + "px"} viewBox="0 0 800 985" fill="none" 
                        onClick={handleClick} id="map-actual" ref={mapRef}
                        xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio={aspectRatio}>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M100 980V966H16V980H5V747H19V570H5V470H19V200H5V60H244V5H253V6H283V5H626V19H695V192H795V292H695V748H794V847H695V965H625V980H100ZM482 748H198V280H482V748Z" fill="#FFDFAE" stroke="#4C697B" stroke-width="10"/>
                    </svg>
                )
            default:
                return (<p>Error: No image for floor {floor}</p>)
        }
    }
    return renderMap();
}