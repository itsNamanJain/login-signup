import React,{useEffect} from "react";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Navbar, Nav, Container } from "react-bootstrap";
import LogoutIcon from "@mui/icons-material/Logout";
import { LinkContainer } from "react-router-bootstrap";
const Header = ({ loginUser,token,setToken,setLoginUser }) => {
  useEffect(() => {
    let user = localStorage.getItem('user')
    setLoginUser(user);    
  }, [])
  
  const handleLogOut = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(false);
    setLoginUser("");
  }
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Registration</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {token ? (
                <>

                <Nav.Link>
                  {loginUser.name}
                </Nav.Link>
              
<LinkContainer to="/login" onClick={handleLogOut}>
<Nav.Link >
                      <LogoutIcon /> Logout
                    </Nav.Link>
</LinkContainer>                  
                    
               
                </>
              ):(
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <LoginIcon /> Login
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="signin">
                    <Nav.Link>
                      <PersonAddAltIcon /> Sign up
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
