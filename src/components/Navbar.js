import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
  
  render() {
    return <div>
        <nav className="navbar  navbar-expand-lg navbar-light mt-3 mb-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Kekambas-79</a>
    <div className='align-middle'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className=" navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {this.props.logged_in ? (
          <> 
        <li className="nav-item">
          <Link className="nav-link" to="/posts">Posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/students">Students</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs" >Blog</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={this.props.logUserOut}>Log out</Link>
        </li>
        <div className='ms-5' style={{ height:'50px' , width:'50px', borderRadius:'50%' ,backgroundColor: 'lightGray'}}><h1 className='text-center'>{localStorage.getItem('name_initial')} </h1> </div> 
        </>
        ):<>
        <li className="nav-item">
          <Link className="nav-link" to="/register" >Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" >Log in</Link>
        </li>
        </>
        
        }
        
        
        <li className="nav-item ">
          
        </li>
      </ul>
    </div>
    </div>
  </div>
  
  
</nav>
    </div>;
  }
}
