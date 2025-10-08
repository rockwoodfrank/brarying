import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMapEvent} from 'react-leaflet';
import { useState, useMemo} from 'react';
import { useQuery } from "thin-backend-react";
import { createRecord, deleteRecord, query } from "thin-backend";

function SetPin({location, editor, setEditor}) {
  const eventHandlers = useMemo(
    () => ({
      click() {
          setEditor(editor == "" || editor == "new" ? location.id : "")
      },
    }),
    [],
  )
  function formatTime(time)
  {
    let timeRemaining = Date.parse(time) - Date.now();
    let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    let minutes = Math.floor(timeRemaining / (1000 * 60)) % 60;
    return hours + ":" + (minutes < 10 ? "0" : "") + minutes
  }
  return (
    <Marker position={[location.yPos, location.xPos]} key={location.id} eventHandlers={eventHandlers}>
      <Tooltip direction="bottom" offset={[-17, 30]} opacity={1} permanent>
          {location.name}{location.floor == "None" || location.floor == "0" ? null : ", Floor " + location.floor}
      </Tooltip>
      <Popup>
          {formatTime(location.timeExp)}
      </Popup>
    </Marker>
  );
}

function PinAdder({handleClick, isOpen, pinName, floor, position, setPosition}) {
  const map = useMapEvent({
    click(e) {
      setPosition(e.latlng)
      handleClick()
    }
  })

  return isOpen != 'new' ? null : (
    <Marker position={position}>
      <Tooltip direction="bottom" offset={[-17, 30]} opacity={1} permanent>
        {pinName}{floor == "None" || floor == "0" ? null : ", Floor " + floor}
      </Tooltip>
    </Marker>
  );
}

export default function CampusMap({editor, setEditor, newPinVal, newPinFloor, newPinPostion, setNewPosition, locations}) {
  function createPin(latlng) {
    setEditor(editor == '' ? 'new' : '');
  }
  let mapBounds = [
    [35.313256, -120.651377],
    [35.291987, -120.671176],
  ];
  return (
    <div className = "map-container">
      <MapContainer center={[35.302028, -120.660167]} zoom={15} scrollWheelZoom={true} maxBounds={mapBounds} minZoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          zIndex={20}
        />
        {
          locations && locations.length>0 && locations.map((location) => <SetPin location={location} setEditor={setEditor} editor={editor} key={location.id}/>)
        }
        <PinAdder handleClick={createPin} isOpen={editor} pinName={newPinVal} floor={newPinFloor} position={newPinPostion} setPosition={setNewPosition}/>
      </MapContainer>
    </div>
  );
}