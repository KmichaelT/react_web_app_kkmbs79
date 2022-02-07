import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Students from './views/Students.js';
import Home from './views/Home.js';
import Posts from './views/Posts.js';
import Register from './views/Register.js';
import Message from './components/Message.js';
import Login from './views/Login.js';
import Blog from './views/Blog.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      message: null,
      category: null,
      logged_in: localStorage.getItem('token')
    }
  }

  flashMessage=(message, category='primary')=>{
    this.setState({
      message,category
    })
  }
  logIn=(token)=>{
    this.setState({
      loggedIn: token
    })
  }
  logOut=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('name_initial');
    this.setState({
      loggedIn: null
    })
  }

    render(){
      return(
       <div className='container '>
      <Navbar logged_in={this.state.logged_in} logUserOut={this.logOut}/>
      {this.state.message ? <Message message={this.state.message} category={this.state.category} flashMessage={this.flashMessage}/> : null}
      <Routes> 
        <Route path="blogs" element={<Blog/>} />
        <Route path="posts" element={<Posts/>} />
        <Route path="/" element={<Home/>} />
        <Route path="students" element={<Students/>} />
        <Route path="register" element={<Register flashMessage={this.flashMessage}/>} />
        <Route path="login" element={<Login flashMessage={this.flashMessage} logUserIn={this.logIn}/>} />
      </Routes>
    </div>  
      )
     
    }
    
  


}
