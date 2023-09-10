import {useState,useEffect} from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Background from './background';
import Map from './map';
import SideBar from './sidebar';
import dynamic from 'next/dynamic';
import Editor from './editor';
import { useQuery } from "thin-backend-react";
import { createRecord, deleteRecord, query } from "thin-backend";

const CampusMap = dynamic(() => import('./campusmap'), {
  ssr: false,
})

export default function MyApp() {
    const floors = [
        "1st Floor", "2nd Floor", "3rd Floor", "4th Floor", "5th Floor"
    ];
    const [currentFloor, setCurrent] = useState(2);
    const [editor, setEditor] = useState('');
    const [newPinVal, setnewPin] = useState("");
    const [newPinFloor, setNewFloor] = useState("None")
    const [newPosition, setNewPosition] = useState(null)

    function saveData(name, time, xPos, yPos, floor)
    {
        console.log("Bing!")
        createRecord('locations',{
            name: name,
            xPos: xPos,
            yPos: yPos,
            color: "#ffffff",
            timeExp: time,
            floor: floor
        });
    }
    return (
        <>
            <Head>
                <title>Anybody Brarying?</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossorigin=""
                />
            </Head>
            <main>
                <Background />
                <Map floor={currentFloor} />
                <CampusMap editor={editor} setEditor={setEditor} newPinVal={newPinVal} newPinFloor={newPinFloor} newPinPostion={newPosition} setNewPosition={setNewPosition}/>
                <Header index={currentFloor} floorList={floors}/>
                {editor == "new" ? <Editor handleClick={saveData} openMod={setEditor} inputVal={newPinVal} setInput={setnewPin} floor={newPinFloor} setFloor={setNewFloor} pos={newPosition}/> : null}
            </main>
        </>
    );
}

function Header({index, floorList}) {
    return (
        <header>
            <h1 className='headline'>Anybody Brarying?</h1>
        </header>
    )
}
