import React from 'react';
import './ExerciseTime.css'
const ExerciseTime = ({exerciseTime}) => {
    let total = 0 ;
    for(const time of exerciseTime){
        total = total + time.time
    }
    return (
        <div>
          <h3>Exercice Time :  <span className='Total'> {total} seconds</span></h3>  
        </div>
    );
};

export default ExerciseTime;