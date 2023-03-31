import {useState,useEffect} from 'react';
import Image from 'next/image';
import Background from './background';
import Map from './map';

export default function MyApp() {
    return (
        <main>
            <Background />
            <Header />
            <Map floor={2}/>
        </main>
    );
}

function Header() {
    return (
        <h1 className='headline'>Anybody Brarying?</h1>
    )
}
