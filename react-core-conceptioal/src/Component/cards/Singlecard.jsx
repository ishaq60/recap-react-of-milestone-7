import React from 'react';

const Singlecard = ({cart,handalecart}) => {
    console.log(cart);
    const{title,price,discription,image,category}=cart
    return (
        <div>
           <div className="card gap-3 w-[300px] bg-base-100 shadow-xl">
  <figure><img className='w-[200px]' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p> </p>
    <div className="flex justify-between">
        <p>${price}</p>
      <button onClick={()=>handalecart (cart)} className="btn btn-primary"> Add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Singlecard;