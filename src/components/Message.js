import React from 'react';

export default function Message(props) {
  return <div>
    <div className={`alert alert-${props.category} alert-dismissible fade show`}  role="alert">
       <strong className='text-center'> {props.message} </strong>
       <button type="button" className="btn-close" onClick={()=> props.flashMessage(null, null)}></button>
    </div>
    
  </div>;
}
