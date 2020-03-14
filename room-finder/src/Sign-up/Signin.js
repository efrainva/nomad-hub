import React,{setState} from 'react';


const Signin = () => {

  const state = {
    email:'',
    passcode:''
  }

  const handelchange =(event)=>{
    event.defaultPrevented()
    setState({[event.target.name]:event.target.value})

  }

  return(
    <>
    <form>
      <input 
      placeholder='email'
      name='email'
      value={this.state.email}
      onChange={handelchange}
      />
      <input 
      placeholder='password'
      name='passcode'
      value={this.state.passcode}
      onChange={handelchange}
      />
    </form>
    </>
  )
}

export default Signin;