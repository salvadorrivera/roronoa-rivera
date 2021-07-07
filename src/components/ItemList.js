import {useState, useEffect} from "react";
import MostrarItem from "./Item";

const itemArray = [
    {
    id: "1",
    category:"ropa",
    title: " Remera vouge M para mujer",
    price: 500,
    pictureUrl: "https://d26lpennugtm8s.cloudfront.net/stores/146/800/products/667fd18a-b3e6-4675-8e17-96bb144f1802_nube-dfb7628f533f70d16815366997107381-1024-1024.jpg",

    },
    {
    id: "2",
    category:"ropa",
    title: " Pantalon L para mujer",
    price: 500,
    pictureUrl: "https://cdn.fashiola.mx/L558418123/gucci-hombre-pantalones-pantalones-deportivos-gg-supreme-de-algodon.jpg",

    },
    {
    id: "3",
    category:"electrodomestico",
    title: " Lenovo IdeaPad 5 Ordenador portátil",
    price: 8000,
    pictureUrl: "https://m.media-amazon.com/images/I/610aKJkEMhL._AC_SL1000_.jpg",

    },
    {
    id: "4",
    category:"electrodomestico",
    title: " Heladera Top House 286",
    price: 5000,
    pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_998099-MLA31631960687_072019-O.jpg",

    },

]


export default function Item(){
    
    const [item, setItem] = useState([])


    useEffect(() => {
        new Promise((resolve, reject) => {
        setTimeout(resolve(itemArray), 2000);
        }).then((NewItem) =>{
        setItem(NewItem)
        }).catch((reason) =>{
            alert(`No se pudo efectuar por el siguiente problema:  ${reason}` )
        });
    });

    return(
        <div>
        {item.map((component) => <MostrarItem key={component.toString()} id={component.id} title={component.title} pictureUrl={component.pictureUrl} price={component.price} />)}
        </div>
    )
}