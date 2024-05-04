import React from 'react';

const Watch = ({watch}) => {
    console.log(watch);
    return (
        <div>
           <h5>Watches:{watch.brand} </h5>
           <p>{watch.price}</p> 
        </div>
    );
};

export default Watch;