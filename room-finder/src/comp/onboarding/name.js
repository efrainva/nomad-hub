import React from "react"
import "../ad.css"
import { Link } from "react-router-dom"
import axios from "axios"

class Name extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",

        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
   event.defaultPrevented()
   alert(`user ${event.state.value} created`) 
   console.log("alert on handleSubmit", event.state.value)
 

    axios
    .post("http://localhost:5000/api/users/u", this.state)
    .then( response => console.log(response) )
     this.setState({fname:"", lname: "", email: "", password: ""})
  }

render() {
    return(
        <div> 
        <form onSubmit={this.handleSubmit}>
            <input 
                placeholder="first name"
                className="adinput"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
            />
            <input 
                placeholder="last name"
                className="adinput"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
            />
            <input 
                placeholder="email"
                className="adinput"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
            />
            <input 
                placeholder="password"
                type="password"
                name="password"
                className="adinput"
                value={this.state.password}
                onChange={this.handleChange}
            />
            <Link to="/category"> 
            <button type="submit"> Submit </button>
            </Link> 
        </form>
        </div>  
    )
    }
}

export default Name