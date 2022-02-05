import React, { Component } from 'react';

export default class Students extends Component {
constructor(props){
    super(props);
    this.state={
        mates:[]
    }
}
componentDidMount(){
    fetch('https://kekambas-bs.herokuapp.com/kekambas')
    .then(response => response.json() )
    .then(data => {
        this.setState(
            {
                mates: data
            }
        )
    })
}
  render() {
      
    return (
    <div >
    <div className="card p-5">
        <h1 className="mt-3"> Kekambas-79 Students</h1>
        <table className=" table  table-hover mt-5">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            </tr>
        </thead>
        <tbody>
            { this.state.mates.map((mate, i) => 
                <tr  key={i}>
                <th scope="row">{mate.id}</th>
                <td>{mate.first_name}</td>
                <td>{mate.last_name}</td>
                </tr>
                )}
       </tbody>
        </table>
    </div>
    </div>
    )
  }
}
