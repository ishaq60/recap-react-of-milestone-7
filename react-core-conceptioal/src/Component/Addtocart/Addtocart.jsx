import React from 'react';
import SingleAdd from './SingleAdd';

const Addtocart = ({carts,handaledelete}) => {
    console.log(carts);
    return (
        <div className='w-1/3 text-center bg-gray-50'>
            <h1 className='text-4xl font-bold'>Shoping Card</h1>
            <h2 className='text-3xl'>Total Card: {carts.length}</h2>
        <div className='bg-gray '>
            <div className='flex justify-between m-4 mt-5'> 
                <h1 className='text-2xl'>Cart title</h1>
                <h1 className='text-2xl'>Price</h1>
            </div>
        {
            carts.map(cart=> <SingleAdd handaledelete={handaledelete} key={cart.id}  cart={cart}></SingleAdd>)
         }
        </div>
        </div>
    );
};

export default Addtocart;