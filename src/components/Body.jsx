import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios';

const Body = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const userData=useSelector((store)=>store.user);

    const fetchUser=async()=>{
      if(userData) return;
    try{
      const res=await axios.get(BASE_URL+"/profile",//if the user will be logged in then we will be able to fetch the user otherwise 
        //it will throw error and catch will catch it leads to status 401 return by our backend
        {
          withCredentials:true,
        });
      dispatch(addUser(res.data));
    }catch(err){
      if(err.status===401){
        navigate("/login");//if user will not be logged in it will be directed to the login 
      }
      console.log(err.message);
    }
  };

  useEffect(()=>{
      fetchUser();
  },[])
  return (
    <div>
        <NavBar/>
        <Outlet/> 
        {/* any children route of body will render here outlet will make sure it */}
        <Footer/>
    </div>
  );
};//in body we have login and all if token will no be valid then it will return 

export default Body;