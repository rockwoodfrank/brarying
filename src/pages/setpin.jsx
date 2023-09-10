import { useMemo } from "react"
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMapEvent } from 'react-leaflet';
import { Icon } from "leaflet";
import { useState } from 'react';
import InfoBox from './infobox';

export default function SetPin({location, editor, setEditor}) {
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
    )
  }