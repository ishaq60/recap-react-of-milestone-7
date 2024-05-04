import React from 'react';

const BottlesDeatils = ({bottle, parsehandale}) => {
  const {name,img,price}=bottle
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h6>bottle name {name}</h6>
            <p> Price :{price}$</p>
            <button onClick={ ()=> parsehandale(bottle)}>Parchases</button>
        </div>
    );
};

export default BottlesDeatils;