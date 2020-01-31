import React from 'react';
import './ad.css'
import NavBar from './navbar';


import axios from 'axios'

class Ad extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      name: "",
    };

  }

  onChange = (event) => {
    this.setState({ [event.target.name]:event.target.value})
    console.log(event.target.name,event.target.value)
  }

  onSubmit = (event) =>  {
    event.preventDefault()
    const obj = {
      name:this.state.name
    }
    axios
    .post("http://localhost:5000/api/users/u",obj)
    .then( response => console.log(response) )
     this.setState({name:""})
  }



  render(){
    // const {name}= this.state
  return(
    <div> 
      <NavBar/>
      <form className='none adform'
      onSubmit={this.onSubmit}
      > 
        host sign up
        <input 
        placeholder='name'
        className='adinput'

        name="name"
        value={this.state.name}
        onChange={this.onChange}/>
        <input 
        placeholder='last name' 
        className='adinput'

        />
        <input placeholder='email' className='adinput'/>
        <input placeholder='password' className='adinput'/>
        <input placeholder ='locaton' className='adinput'/>
        <input placeholder='rooms' className='adinput'/>
        <input placeholder='price' className='adinput'/>
        <input placeholder= 'discription of parking' className='adinput'/>
        <input  placeholder = 'contact information'  className='adinput'/>
        <h3> laundry: </h3> 
        <label> laundry </label>
        <span className='AdInputSec'>
        <input  type='checkbox'  className='adbox'/>
        <label > yes </label>
        <input type='checkbox' id='adbox' />
        <label > no </label>
        </span> 


          <label>dishwasher</label>
        <span>
        <input type='checkbox' />
        <label > yes </label>
        <input type='checkbox' />
        <label > no </label>
        </span>

          <label>parking</label>
        <span>


        <input type='checkbox' />
        <label > yes </label>
        <input type='checkbox' />
        <label > no </label>
        </span>
       <button type='submit'> click</button>

      </form>
    </div>
)
}
} 

export default Ad;