import React from 'react';
import {useState, useEffect} from 'react'; 

export default  function Post(props) { 
    
    return (<>
        <div className="position-relative "  > 
        <div className="  w-75   position-absolute top-50 start-50 translate-middle"> 
        
            <div className="card ">
                <h5 className="card-header pt-3 pb-3">{props.name}</h5>
                <div className="card-body mt-3 mb-3">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.body}</p>        
                </div>            
            </div>
            </div>           
        </div>
</>
    )}