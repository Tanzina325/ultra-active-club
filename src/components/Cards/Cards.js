import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css'
const Cards = () => {
    const [cards, setCards ]=useState([]);

    useEffect(()=>{
      fetch('Fakedata.json')
      .then(res=>res.json())
      .then(data=>setCards(data))
    },[])

    return (
        <div className="card-container">
          <div className="yoga-card">
            <div className="header-menu">
                <h1>YOGA-EXERCISE-CLUB</h1>
                <h4>Choose your yoga :</h4>
            </div>
            <div className="card-menu">
                {cards.map(card=><Card  
                key={card._id}
                card={card}
                ></Card>)}
            </div>
          </div>
          <div className="sidebar-menu">
            <div className='profile'>
            <div className='trainer-image'><img src="https://thumbs.dreamstime.com/z/serious-looking-old-man-portrait-29761931.jpg" alt="" /></div>
            <div className='Introductory'>
                <h4>Matiar Rahaman</h4>
                <p>Tokio,Japan</p>
            </div>
            </div>
            </div>  
        </div>
    );
};

export default Cards;