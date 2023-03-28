import {useState,useEffect} from 'react';
import Image from 'next/image';
import Background from './background';
import Map from './map';

export default function MyApp() {
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('/data.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }}).then(function(response){
            return response.json();
        }).then(function(myJson) {
            setData(myJson)
        });
    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <main>
            <Background />
            <Header />
            <Map locations = {data && data.length && data[2]} setData = {setData}/>
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
