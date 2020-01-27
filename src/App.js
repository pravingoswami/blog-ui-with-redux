import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {
  Navbar,
  NavItem,
  Nav,
  NavLink ,
  NavbarBrand,
  Container,
  ListGroup,ListGroupItem
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import UsersList from './components/UsersList'
import PostsList from './components/PostsList'

import UsersPost from './components/UsersPost'
import PostShow from './components/PostShow'
import Home from './components/Home'

import { BrowserRouter, Route, Link } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


class App extends React.Component {

  render(){
    return(
      <div>
        <BrowserRouter>
        <Navbar color="dark" light expand="md">
        <NavbarBrand style = {{color : "white"}} ><Link to = "/home"  style = {{textDecoration : "none", color : "white"}} ><strong>HOME</strong></Link></NavbarBrand>       
        <NavbarBrand style = {{color : "white"}} ></NavbarBrand>    
           
        <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink> <Link to = "/users"  style = {{textDecoration : "none", color : "white"}} > <strong>USERS</strong> </Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to = "/posts"  style = {{textDecoration : "none", color : "white"}} > <strong>POSTS</strong> </Link></NavLink>
            </NavItem>
          </Nav>   
        </Navbar>
        <Container>
        
       
  
        </Container>
        <Route path = "/home" component = {Home} exact = {true} />

        <Route path = "/users" component = {UsersList} exact = {true} />
        <Route path = "/users/:userId" component = {UsersPost} exact = {true} />


        <Route path = "/posts" component = {PostsList} exact = {true} />
        <Route path = "/posts/:postId" component = {PostShow} exact = {true} />

     
        
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
