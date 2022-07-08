import React,{useState} from 'react'
import axios from 'axios';
import {Form,Button} from 'react-bootstrap'
const Register = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  });
  const handleChange=(e)=>{
    const {name,value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
    // console.log(user)
  }

    let style = {
        boxShadow:"none"
    }
    const handleSubmit =(e)=>{
      e.preventDefault();
      // console.log("Hello");
      const {name,email,password} = user;
      if(name && email && password){
        // console.log(name,email,password);
        axios.post('http://localhost:5000/signin',user).then(res=>console.log(res))
      }
      else{
        console.log("No Data Received")
      }
      
    }
  return (
    <>
        <Form className='mt-3 m-auto' style={{width:"40vw"}}>
        <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control style={style} type="text" name="name" value={user.name} onChange={(e)=>handleChange(e)} placeholder="Enter your Name" />
      </Form.Group>  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={style} type="email" name="email" value={user.email} onChange={(e)=>handleChange(e)} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control style={style} type="password" name="password" value={user.password} onChange={(e)=>handleChange(e)} placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" style={style} type="submit" onClick={(e)=>handleSubmit(e)}>
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Register