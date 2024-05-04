import React, { useState } from 'react';

const SingleCountry = ({country,handaleCountryVi}) => {
    console.log(handaleCountryVi);
    const {name,flags,area}=country
    console.log(country);
    const [visited,setvisited]=useState(false)
    const handaleVisited=()=>{
      setvisited(!visited)
    }
    return (
        <div className={`single ${visited && 'visited'}`}>
            <h3 style={ {color: visited? 'purple':'white'}}>{name.common}</h3>
            <p>Area:{area}</p>
            <img src={flags.png} alt="" />
            <button onClick={handaleVisited}> Mark Visited </button>
            <button onClick={()=>handaleCountryVi(country)}> Visited Country</button>
          {visited? 'visited':'i want  to visited'}
        </div>
    );
};

export default SingleCountry;