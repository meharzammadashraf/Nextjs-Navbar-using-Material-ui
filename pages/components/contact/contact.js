import { Button } from '@mui/material';
import React from 'react'

function Contact() {
    const Show =async ()=>{
        const res = await fetch('http://localhost:5000/data')
      const data = await res.json()
        console.log("sssssssssssss", data);
    }
  return (
    <>
    <Button onClick={Show}>Show Data</Button>
    </>
  )
}

export default Contact