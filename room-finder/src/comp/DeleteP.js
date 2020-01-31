import React from 'react'

import axios from 'axios'

class DeleteP extends React.Component {
  constructor(props){
    super(props)
    this.state={
      id:null,
    }
  }
  Change= (e)=> {
    this.setState({[e.target.name]:e.target.value})
    console.log(e.target.value,e.target.name)
  }
  OnClick=(e)=>{
    const http ="http"
    console.log(this.state.id)
    axios
    .delete(`${http}://localhost:5000/api/users/${this.state.id}`)
  }
  render(){
    
    return(
      <div>
      <input 
      placeholder="number here"
      name="id"
      value={this.state.id}
      onChange={this.Change}
      />
      <button onClick ={this.OnClick}>
button
      </button>
    </div>
  )
}
}

export default DeleteP;