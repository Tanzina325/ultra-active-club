import React, { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import Card from '../Card/Card';
import ExerciseTime from '../ExerciseTime/ExerciseTime';
import './Cards.css'
const Cards = () => {
    const [cards, setCards ]=useState([]);
    const [exerciseTime,setExerciseTime] = useState([]);

    useEffect(()=>{
      fetch('Fakedata.json')
      .then(res=>res.json())
      .then(data=>setCards(data))
    },[])

    const handleAddToDetails = (card)=>{
        const newExerciseTime = [...exerciseTime, card];
        setExerciseTime(newExerciseTime)
    }

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
                handleAddToDetails={handleAddToDetails}
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
            <div className='details'>
            <div>
            <h3>75kg</h3>
            <p>Weight</p>
            </div>
            <div>
            <h3> 5.8</h3>
            <p>Height</p>
            </div>
            <div>
            <h3>70yrs </h3>
            <p>Age</p>
            </div>
            </div>
            <h2>Add a break</h2>
            <div className='details'>
            <button>10s</button>
            <button>20s</button>
            <button>30s</button>
            <button>40s</button>
            </div>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
            <ExerciseTime exerciseTime={exerciseTime} ></ExerciseTime>
            </div>
            <div className='exercise-time'>
             <BreakTime></BreakTime>
            </div>
            <button className='btn-activity'>Activity Completed</button>
            </div>  
        </div>
    );
};

export default Cards;