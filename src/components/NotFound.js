import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {

  const naviagte = useNavigate();

  const handler = ()=>{
    naviagte("/")

  }

  return (
    <div>
      <p>Eroor </p>
      <button onClick={handler}>Go to home page </button>
    </div>
  )
}

export default NotFound
