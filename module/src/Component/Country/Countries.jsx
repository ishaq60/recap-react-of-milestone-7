import { useEffect } from "react";
import { useState } from "react";
import SingleCountry from "./SingleCountry";

import './Country.css'
const Countries = () => {
    const [country,setCountry]=useState([])
    const [visited,setvisited]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    const handaleCountryVi=( country)=>{
    const newVisited=[...visited,country]
    setvisited(newVisited)
    }
    return (
        <div >
            <h6>Country Deatils</h6>
            <h4>Country visited:{visited.length}</h4>
           <div className="visited">
           {
                visited.map(visit=> <li >{visit.name.common}</li>)
            }
           </div>
           
        <div className="country">
        {
                country.map(country=><SingleCountry key={country.cca3}
                     country={country} handaleCountryVi={handaleCountryVi}
                     ></SingleCountry>)
            }
        </div>
        </div>
    );
};

export default Countries;