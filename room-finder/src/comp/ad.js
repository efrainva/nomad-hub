import React from 'react';
import './ad.css'
import NavBar from './navbar';

function ad (props) {
  

  onclick =()=> {

  }

  return(
    <div> 
      <NavBar/>
    <form className='none adform'>
      <input placeholder='name' className='adinput' />
      <input placeholder='last name' className='adinput'/>
      <input placeholder='email' className='adinput'/>
      <input placeholder='password' className='adinput'/>
      <input placeholder ='locaton' className='adinput'/>
      <input placeholder='rooms' className='adinput'/>
      <input placeholder='price' className='adinput'/>
      <input placeholder= 'discription of parking' className='adinput'/>
      <input  placeholder = 'contact information'  className='adinput'/>
      {/* <h3> laundry: </h3>  */}
      <label> laundry </label>
      <span className='AdInputSec'>
       <input  type='checkbox'  className='adbox'/>
       <label > yes </label>
       <input type='radio' id='adbox' />
       <label > no </label>
      </span> 


        <label>dishwasher</label>
      <span>
      <input type='radio' />
      <label > yes </label>
      <input type='radio' />
      <label > no </label>
      </span>

        <label>parking</label>
      <span>


      <input type='radio' />
      <label > yes </label>
      <input type='radio' />
      <label > no </label>
      </span>

    </form>
    </div>
  )
}

export default ad;