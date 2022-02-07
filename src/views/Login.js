import React, { Component } from 'react';
import {Navigate} from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            redirect: null
        }
      }
    
    handleSubmit=async (e)=>{
        
        e.preventDefault();
        
        const username= e.target.username.value;
        const password=e.target.password.value;

        let myHeaders = new Headers();
        myHeaders.append('Authorization', 'Basic '+ btoa(`${username}:${password}`))

        let res = await fetch('https://kekambas-blog.herokuapp.com//auth/token',{
            method: 'POST',
            headers: myHeaders
        })
        let data = await res.json();
        let token= await data.token
        localStorage.setItem('token', token);
        localStorage.setItem('name_initial', username.charAt(0).toUpperCase());
        this.props.flashMessage('you have succesfully logged in', 'success')
        this.props.logUserIn(token)
        this.setState({
            redirect:'/'
        })
    }

  render() {
    return (
    this.state.redirect ? <Navigate to={this.state.redirect}/>:
    <div>
        <form onSubmit={this.handleSubmit} className="position-relative " style={{ height: '800px'}} > 
            
            <div className="ps-4 w-50 position-absolute top-50 start-50 translate-middle">
            <h2 className='pt-5'> Login here</h2>
                <div  className=" py-2">
                    <input style={{ height: '60px'}} type="text" className="  form-control" name='username'  placeholder="Username"/>
                </div>

                <div  className="py-2 ">
                    <input style={{ height: '60px'}} type="password" className="  form-control" name='password'  placeholder="Password"/>
                </div>
                
                <div className="pt-4 ">
                    <button  style={{ height: '60px'}} type="submit" value='Login' className="btn btn-dark w-100">Login</button>
                </div>
                
            </div>
        </form>
    </div>)
  }
}
