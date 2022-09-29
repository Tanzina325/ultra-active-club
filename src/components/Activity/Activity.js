import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './Activity.css'
const Activity = () => {
    const notify = () => toast("Wow so easy!");
    return (
        <div >
        <button className='btn-activity' onClick={notify}>Activity Completed</button>
        <ToastContainer />   
        </div>
    );
};

export default Activity;