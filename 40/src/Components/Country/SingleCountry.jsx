import React, { useState } from 'react';
import CountryDeatils from './CountryDeatils';

const SingleCountry = ({country, handalevisitedCountry,handaleVisitedFlag}) => {
    console.log(country);
    console.log(handalevisitedCountry);
    const{ name,flags,area,cca3}=country;
    const [visited,setvisited]=useState(false)
    const handaleVisited=()=>{
 setvisited(!visited)
    }
    return (
        <div className={`country? ${visited && 'visited' }`}>
           
            <h2 style={{ color:visited?'purple':'white'}}>{name.common}</h2>
            <p>Area: {area}</p>
         <img src={flags.png} alt="" />
            <p>{flags?.alt}</p>
            <p>Code:{cca3}</p>
          
            <button onClick={()=>handalevisitedCountry(country)}>MarkVisiteCountry</button>
            <button onClick={()=>handaleVisitedFlag(country)}>VisitedFlag</button>
            <button onClick={handaleVisited}>{visited?'visited':'Going'}</button>
            {visited ? 'i have visited country':'I want to visited'}
            <hr />
            <CountryDeatils country={country}>
                handalevisitedCountry={handalevisitedCountry}
                handaleVisitedFlag={handaleVisitedFlag}
            </CountryDeatils>
        </div>
    );
};

export default SingleCountry;