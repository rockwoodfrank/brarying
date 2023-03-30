import {useState,useEffect} from 'react';
import Image from 'next/image';
import Background from './background';
import Map from './map';

export default function MyApp() {
    return (
        <main>
            <Background />
            <Header />
            <Map />
        </main>
    );
}

function Header() {
    return (
        <h1 className='headline'>Anybody Brarying?</h1>
    )
}

function MyButton() {
    const [urMom, urMomSet] = useState(0);
    function handleClick() {
        urMomSet(urMom + 1);
    }
    return (
        <button onClick = {handleClick}>
        You clicked {urMom} times.
        </button>
    );
}

let products = [
    {id: "500", title: "Eggs", displacement: 0},
    {id: "501", title: "Ur Mom", displacement: 20},
    {id: "502", title: "Chbaby", displacement: 200},
]


function ShoppingList()
{
    const listItems = products.map(product =>
    <li key={product.id} style={{
        position: 'relative',
        left: product.displacement + "px"
      }}>
        {product.title}
    </li>
    );

    return (
    <ul>{listItems}</ul>
    );
}
