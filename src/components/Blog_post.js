import React from 'react';
import { Link } from 'react-router-dom';

export default  function Blog_post(props) { 
    const { post } = props;
    console.log(post);
    
    return (<>
        <div className="container "  > 
        <div className="   "> 
        
            <div className="card mb-5">
                <h5 className="card-header pt-3 pb-3">{post.author.username}</h5>
                <div className="card-body mt-3 mb-3">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>        
                </div>            
            </div>
            </div>           
        </div>
</>
    )}