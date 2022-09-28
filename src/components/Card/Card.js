import React from 'react';
import './Card.css'
const Card = ({card}) => {
    const {name, picture, time, age} = card
    return (
        <div className='card'>
          <img src={picture} alt="" />
          <h4>{name}</h4>
          <h6>For age :{age}</h6> 
          <h6>Time consumed :{time}</h6>
          <button className='btn-card'>Add to list</button>
        </div>
    );
};

export default Card;