import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-container'>
            <div className='question'>
             <h3>How does react Work?</h3>
             <p>React creates a VIRTUAL DOM in memory.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.React only changes what needs to be changed.</p>   
            </div>
            <div className='question'>
                <h3> What are the diffences between props and states? </h3>
                <p>Props are used to pass data, whereas state is for managing data Data from props is read-only, and cannot be modified by a component that is receiving it from outside State data can be modified by its own component, but is private (cannot be accessed from outside) Props can only be passed from parent component to child (unidirectional flow)</p>
            </div>
            <div className='question'>
                <h3>What are the uses of useEffect without fething ?</h3>
                <p>Fetching data from an API, communicating with a database, and sending logs to a logging service are all considered side-effects, as it's possible to have a different output for the same input. For example, your request might fail, your database might be unreachable, or your logging service might have reached its quota.This is why useEffect is the hook for us - by fetching data, we're making our React component impure, and useEffect provides us a safe place to write impure code.</p>
            </div>
        </div>
    );
};

export default Question;