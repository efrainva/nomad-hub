import React from 'react';
import './ad.css'
import NavBar from './navbar';


import axios from 'axios'

class Ad extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      fname: "",
      lname: "",
      email: "",
      passcode: "",
      location: "",
      rooms: "",
      preice: "",
      laundry: false,
      dishwasher: false,
      parking: false,
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]:event.target.value})
    console.log(event.target.name,event.target.value)
  }


  handleSubmit = (event) => {
     event.defaultPrevented()
   alert(`user ${event.state.value} was is loged in`) 
   console.log("alert on handleSubmit", event.state.value)
 

    axios
    .post("http://localhost:5000/api/users/u", this.state)
    .then( response => console.log(response) )
     this.setState({name:""})
  }




  render(){
    // const {name}= this.state
  return(
    <div> 
      <NavBar/>
      <form className='none adform'
      onSubmit={this.handleSubmit}
      > 
        host sign up
        <input 
        placeholder='name'
        className='adinput'

        name="name"
        onChange={this.onChange}/>
        value={this.state.name}
        <input 
        placeholder='last name' 
        className='adinput'

        />
        <input 
        placeholder='email'
         className='adinput'
        value={this.state.email}
         onChange={this.onChange}
         />
        <input 
        placeholder='password'
         className='adinput'
        value={this.state.passcode}
         onChange={this.onChange}
         />
        <input 
        placeholder ='locaton'
         className='adinput'
         value={this.state.location}
         onChange={this.onChange}
         />
        <input 
        placeholder='rooms'
         className='adinput'
         value={this.state.rooms}
         onChange={this.onChange}
         />
        <input 
        placeholder='price'
         className='adinput'
          value={this.state.price}
         onChange={this.onChange}
         />
        <input 
        placeholder= 'discription of parking' className='adinput'/>
        <input  
        placeholder = 'contact information'  className='adinput'/>
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