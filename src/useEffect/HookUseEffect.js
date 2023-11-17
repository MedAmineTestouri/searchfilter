import React, { useEffect, useState } from 'react'
import { Row ,Col } from "react-bootstrap";

export const HookuseEffect = () =>{
  const [users,setUsers] = useState([])
  const [inputValue,setInputValue] = useState('')
  const [fitredUsers,setfitredUsers] = useState([])
    
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    return () => {
        false
    }
},[])
useEffect(()=>{
    setfitredUsers(users)
},[users])
  useEffect(()=>{
        if (users.length>0) {
        }
  },[users])
  useEffect( () => {
        const filter = users.filter(
        user => user.name.toLowerCase().includes(inputValue)
     )
     setfitredUsers(filter)
  },[inputValue])
  const handleChange = (e) => {
    setInputValue(e.target.value)
 
    
  }

  return (
    <div>
    <Row>
      <Col >
     <h4  >Search for Name :</h4> 
      </Col>
      
      <Col >
        <input type='text' className='Search'  onInput={handleChange}/>
        {
            fitredUsers.map (
                user=><h3  key = {user.id}>{user.name}</h3>
            )
        }
        </Col>
    </Row>
    </div>
  )
}

