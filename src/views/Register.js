import React from 'react';
import {useNavigate} from 'react-router-dom';
;


export default function Register(props){
    let navigate =useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(e);

        let password = e.target.password.value;
        let confirmPass = e.target.confirmPass.value;
        if (password !== confirmPass){
            props.flashMessage("Password doesn't match", 'danger')
            navigate('/register')
        }
        else{
            let myHeaders = new Headers();
        myHeaders.append('content-Type','application/json');

        let data =JSON.stringify({
            username: e.target.username.value,
            email: e.target.email.value,
            password: password
        })
        fetch('https://kekambas-blog.herokuapp.com//auth/users',{
            method: 'POST',
            headers: myHeaders,
            body: data
        }).then(res => res.json())
            .then(data=> {
                props.flashMessage('Registerd succesfuly', 'success')
                navigate('/')
            }) 
        }
       
    }

    return (
    
        <form onSubmit={handleSubmit} className="position-relative " style={{ height: '800px'}} > 
            
                <div className="ps-4 w-50 position-absolute top-50 start-50 translate-middle">
                <h2 className='pt-5'>  Register here</h2>
                    <div  className=" py-2">
                        <input style={{ height: '60px'}} type="text" className="  form-control" name='username'  placeholder="Username"/>
                    </div>
                    <div  className=" py-2">
                        <input style={{ height: '60px'}} type="text" className="  form-control" name='email'  placeholder="Email"/>
                    </div>
                    <div  className="py-2 ">
                        <input style={{ height: '60px'}} type="password" className="  form-control" name='password'  placeholder="Password"/>
                    </div>
                    <div  className=" py-2">
                        <input style={{ height: '60px'}} type="password" className="  form-control" name='confirmPass'  placeholder="Confirm Password"/>
                    </div>
                    <div className="pt-5 ">
                        <button  style={{ height: '60px'}} type="submit" value='Register' className="btn btn-dark w-100">Register</button>
                    </div>
                    
                </div>
            </form>
            )
  
}
