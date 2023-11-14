import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSilce';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [users,setuser]=useState({});

    const navigate=useNavigate();


const dispatch=useDispatch();


  const getUserData=(e)=>{
    setuser({...users,[e.target.name]:e.target.value})

   
  }
 const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("users...",users);
   dispatch(createUser(users)) 
navigate('/read')


 };
  
   
  return (
    <div>
      <h2 className='mt-2 text-center'>Fill The Data</h2>
<Form className='w-50 mx-auto my-5' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" class="form-control" onChange={getUserData}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" class="form-control"   onChange={getUserData}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="password" name="age" class="form-control" onChange={getUserData} />
      </Form.Group>
      <div class="mb-3">
  <input class="form-check-input" name='gender' value="male" type="radio"  onChange={getUserData}/>
  <label class="form-check-label" >
    Male
  </label>
</div>
<div class="mb-3">
  <input class="form-check-input" name='gender'value="female" type="radio"  onChange={getUserData}/>
  <label class="form-check-label" for="flexRadioDefault2">
Female  </label>
</div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </div>
  )
}

export default Create