import React from 'react'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile';

const Feed = () => {
  const navigate=useNavigate();
  return (
    <div>Feed</div>
  )
  navigate("/Profile")
}

export default Feed