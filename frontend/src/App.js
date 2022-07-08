import Login from './components/Login';
import React,{useState} from 'react';
import {Container} from "react-bootstrap"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  const [loginUser, setLoginUser] = useState({});
  const [token,setToken] = useState(false);
  return (
    <div className="App">
    <Router>
    <Header token={token} loginUser={loginUser} setLoginUser={setLoginUser} setToken={setToken}/>
    <Container>
    <Routes>
    <Route exact path="/" element={<Home loginUser={loginUser}/>}/>
    <Route exact path="/signin" element={<Register/>}/>
    <Route exact path="/login" element={<Login setLoginUser={setLoginUser} setToken={setToken}/>}/>
    </Routes>
    </Container>
     </Router>
    </div>
  );
}

export default App;
