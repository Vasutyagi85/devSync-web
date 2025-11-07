import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import {BASE_URL} from "../utils/constants"

const Login = () => {

  const [emailId,setEmailId]=useState("Akshat@gmail.com");
  const [password,setPassword]=useState("Akshat@85699");
  const dispatch=useDispatch();
  const navigate=useNavigate();//never call a hook inside a function
  

  const handleLogin =async ()=>{

    try{
      const res=await axios.post(BASE_URL + "/login",{
      emailId,
      password
    })
    dispatch(addUser(res.data)); 
    navigate("/feed")
    
    // dispatch(addUser(res.data));//calling addaction by dispatch hook
  }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-sm">
      <div className="card-body">
      <h2 className="card-title justify-center">Login</h2>
      <div>
        <fieldset className="fieldset">
          {/* emailId */}
        <legend className="fieldset-legend">Email ID</legend>
        <input type="text" value ={emailId} className="input mt-1 px-1" onChange={(e)=>setEmailId(e.target.value)} />

        <legend className="fieldset-legend">Password</legend>
        <input type="text" value={password}className="input mt-1 px-1" onChange={(e)=>setPassword(e.target.value)} />

        </fieldset>
      </div>
      <div className="card-actions justify-center">
      <button className="btn btn-primary px-4" onClick={handleLogin}>Login</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Login