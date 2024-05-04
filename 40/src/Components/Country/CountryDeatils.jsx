import React from 'react';
import SingleData from '../SingleData';

const CountryDeatils = (props) => {
    const{country,handalevisitedCountry,handaleVisitedFlag}=props;
    console.log(country);
    return (
        <div>
            <h6>{country.name.common}</h6>
            <SingleData {...props}></SingleData>
        </div>
      
    );
};

export default CountryDeatils;