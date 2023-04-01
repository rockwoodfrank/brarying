import {useState,useEffect} from 'react';
import Image from 'next/image';
import Background from './background';
import Map from './map';
import SideBar from './sidebar';

export default function MyApp() {
    const floors = [
        "1st Floor", "2nd Floor", "3rd Floor", "4th Floor", "5th Floor"
    ];
    const [currentFloor, setCurrent] = useState(2);
    return (
        <main>
            <Background />
            <Header index={currentFloor} floorList={floors}/>
            <Map floor={currentFloor} />
            <SideBar floors={floors} setter={setCurrent} current={currentFloor} />
        </main>
    );
}

function Header({index, floorList}) {
    return (
        <header>
            <h1 className='headline'>Anybody Brarying?</h1>
            <h2>{floorList[index]}</h2>
        </header>
    )
}
