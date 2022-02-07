import React from 'react';
import Post from '../components/Post.js'
import {useState, useEffect} from 'react';

export default  function Posts(props) { 
    const [post, setPost] = useState([])
    const [name, setName] = useState([])
    const [title, setTitle] = useState([])
    const [body, setBody] = useState('')
    const [nameinput, setNameinput] = useState('')

        const handleForm =(e)=>{
            e.preventDefault();
            const newName=e.target.name.value;
            setNameinput(newName)
            
            
        }
        useEffect(()=>{

            fetch('https://kekambas-bs.herokuapp.com/posts')
            .then(response => response.json() )
            .then(data => {
                setPost(data.find(element => element.user.first_name===nameinput || element.user.last_name===nameinput));
                setTitle(post.title);
                setBody(post.body);
                setName(`${post.user.first_name} ${post.user.last_name}`);
        })
        })

    
    
    
    return (<>
    
            <form onSubmit={handleForm}  className="position-relative " style={{ height: '400px'}} > 
                <div className="ps-4 row w-75 position-absolute top-50 start-50 translate-middle">
                    <div  className=" col-9">
                        <input style={{ height: '60px'}} type="text" className="  form-control" name='name'  placeholder="Enter Students Name"/>
                        
                    </div>
                    <div className=" col-3">
                        <button  style={{ height: '60px'}} type="submit" className="btn btn-dark ">See Post</button>
                    </div>
                    
                </div>
            </form>
            {post ? <Post name={name} title={title} body={body}/> : null}

            
            </>);
  
}