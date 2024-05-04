import { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";
import './Country.css'
const Country = () => {
    const[visitedCountry,setvisitedCountry]=useState([])
    const[visitedFlag,setVisitedFlag]=useState([])
    const[Country,setCountry]=useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    const handalevisitedCountry=(country)=>{
        console.log('i have a visited country');
    
        const newVisitedCountry=[...visitedCountry,country];
        setvisitedCountry(newVisitedCountry)
    }
    const handaleVisitedFlag=(country)=>{
        console.log('click the visited flag');
        console.log(country);
        const newvisiteded=[...visitedFlag,country]
        setVisitedFlag(newvisiteded)
    }
    return (
        <div >
           <h1>Rest of the country</h1>
         <div>
         <h5>Visited Countries{visitedCountry.length}</h5>
         <h5>visitedFlag:{visitedFlag.length}</h5>
        <div className="visiteds">
        {
            visitedCountry.map((country)=> <li> {country.name.common} </li>)
         }
        </div>
        <div className="flag">
           {
            visitedFlag.map((country,idx)=> <img className="f"  key={idx} src={country.flags.png} alt="" />)
           }
        </div>
         </div>
           <div className="country-container">
           {
                Country.map((country)=><SingleCountry key={country.cca3} 
                    handalevisitedCountry={handalevisitedCountry}
                    handaleVisitedFlag={handaleVisitedFlag}
                     country={country}></SingleCountry>)
            }
           </div>
        </div>
    );
};

export default Country;