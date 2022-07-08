import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Form,Button} from 'react-bootstrap'
const Register = ({setLoginUser,setToken}) => {
const navigate = useNavigate();
  const [user, setUser] = useState({
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
      const {email,password} = user;
      if(email && password){
        // console.log(email,password);
        axios.post("http://localhost:5000/login",user).then(res=>{alert(res.data.message);
        if(res.data.message === "Login Success"){
          localStorage.setItem("token",res.data.token);
          localStorage.setItem("user",JSON.stringify(res.data.user));
          setToken(true);
          setLoginUser(res.data.user);
        }
        navigate('/')
      }) 
      }
      else{
        console.log("No Data Received")
      }
    }
  return (
    <>
        <Form className='mt-3 m-auto' style={{width:"40vw"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={style}  name="email" value={user.email} onChange={(e)=>handleChange(e)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control style={style} name="password" value={user.password} onChange={(e)=>handleChange(e)} type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" style={style} type="submit" onClick={(e)=>handleSubmit(e)}>
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Register