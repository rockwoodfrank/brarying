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
import { createClient } from "@supabase/supabase-js";
import InfoBox from './infobox';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

const CampusMap = dynamic(() => import('../../components/campusmap'), {
  ssr: false,
  loading: () => (
    <div style={{textAlign: 'center', paddingTop: 20}}>
      Loading…
    </div>
  )
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
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getLocations();
    }, []);

    async function getLocations() {
        const { data } = await supabase.from("locations").select();
        setLocations(data);
    }
    

    async function saveData(name, time, xPos, yPos, floor)
    {
        console.log("Bing!")
        const {data, error} = await supabase.from("locations").insert({
            name: name,
            xPos: xPos,
            yPos: yPos,
            color: "#ffffff",
            timeExp: time,
            floor: floor
        });

        console.log(error)
    }
    return (
        <>
            <Head>
                <title>Anybody Brarying?</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" /> 
                <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossorigin=""
                />
            </Head>
            <main>
                <Background />
                <CampusMap editor={editor} setEditor={setEditor} newPinVal={newPinVal} newPinFloor={newPinFloor} newPinPostion={newPosition} setNewPosition={setNewPosition} locations={locations}/>
                <Header index={currentFloor} floorList={floors}/>
                {editor == "new" ? 
                    <Editor handleClick={saveData} openMod={setEditor} inputVal={newPinVal} setInput={setnewPin} floor={newPinFloor} setFloor={setNewFloor} pos={newPosition}/> : 
                    editor != "" ? <InfoBox id={editor} setEditor={setEditor}/> : null}
            </main>
        </>
    );
}

function Header() {
    return (
        <header>
            <h1 className='headline'>Anybody Brarying?</h1>
            <h2 className='sub-headline'>Across Campus!</h2>
        </header>
    )
}
