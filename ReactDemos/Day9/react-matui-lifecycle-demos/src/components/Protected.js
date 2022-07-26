import React from 'react'
import { useEffect } from 'react';
import {useNavigate} from "react-router-dom"
export default function Protected(props) {
  const {Component} = props;
  const naviagate = useNavigate();
  useEffect(()=>
  {
    let token = localStorage.getItem("token");
    console.log(token)
    if(!token)
    naviagate("/login");
  })
  return (
    <div> Protected 
      
    </div>

  )
}
