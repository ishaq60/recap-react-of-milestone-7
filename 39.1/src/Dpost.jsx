import React from 'react';

const Dpost = ({post}) => {
const {title,id,body}=post
    
    return (
        <div className="box">
            <h1>{id}</h1>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default Dpost;