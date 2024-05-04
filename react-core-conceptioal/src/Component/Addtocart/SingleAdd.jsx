import React from 'react';

const SingleAdd = ({cart,handaledelete}) => {
    const {id,title,price}=cart
    return (
        <div className='bg-gray-200 flex justify-between p-5 mt-2 rounded-2xl'>
            
            <p>{title}</p>
            <p>{price}</p>
            <button onClick={()=>handaledelete(id)} className='bg-green-100 rounded-xl p-4 m-2'>Remove item</button>
        </div>
    );
};

export default SingleAdd;