import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYenSign } from '@fortawesome/free-solid-svg-icons';

import Card from '../Card/Card';
import ExerciseTime from '../ExerciseTime/ExerciseTime';
import './Cards.css'
import Activity from '../Activity/Activity';
const Cards = () => {
    const [cards, setCards ]=useState([]);
    const [exerciseTime,setExerciseTime] = useState([]);
    
    const [breakTime,setBreakTime] = useState(0);
    
    useEffect(()=>{
      fetch('Fakedata.json')
      .then(res=>res.json())
      .then(data=>setCards(data))
    },[])

    const handleAddToDetails = (card)=>{
        const newExerciseTime = [...exerciseTime, card];
        setExerciseTime(newExerciseTime)
    }
const breakTimeAdded =(breakTime)=>{
    setBreakTime(breakTime);
   localStorage.setItem('Break_Time',JSON.stringify(breakTime)) }
   

useEffect(()=>{
   
    const getTime =localStorage.getItem('Break_Time');
    if(getTime){
        setBreakTime(JSON.parse(getTime))}

},[])

    return (
        <div className="card-container">
          <div className="yoga-card">
            <div className="header-menu">
                <div className='Font'><FontAwesomeIcon className='FontSome' icon ={faYenSign}></FontAwesomeIcon>
                <h1>YOGA-EXERCISE-CLUB</h1></div>
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
            <div className='trainer-image'><img src="https://qph.fs.quoracdn.net/main-qimg-877218280ebe36422d8b5e95913fedd0" alt="" /></div>
            <div className='Introductory'>
                <h4>Tanzina Rahaman</h4>
                <p>Potukhali,Barisal</p>
            </div>
            </div>
            <div className='details'>
            <div>
            <h3>56kg</h3>
            <p>Weight</p>
            </div>
            <div>
            <h3> 5.2</h3>
            <p>Height</p>
            </div>
            <div>
            <h3>30yrs </h3>
            <p>Age</p>
            </div>
            </div>
            <h2>Add a break</h2>
            <div className='details'>
            <button onClick={()=>breakTimeAdded (10)}>10s</button>
            <button onClick={()=>breakTimeAdded (20)}>20s</button>
            <button onClick={()=>breakTimeAdded (30)}>30s</button>
            <button onClick={()=>breakTimeAdded(40)}>40s</button>
            </div>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
            <ExerciseTime exerciseTime={exerciseTime} ></ExerciseTime>
            </div>
            <div className='exercise-time'>
             <h3>Break Time : <span className='break-time'>{breakTime} seconds</span></h3>
            </div>
            <Activity></Activity>
            </div>  
        </div>
    );
};

export default Cards;