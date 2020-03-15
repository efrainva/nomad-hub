import React from "react"
import "../ad.css"
import { Link } from "react-router-dom"
import axios from "axios"

class Location extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: "",
            rooms: "",
            price: "",
            laundry: false, 
            dishwasher: false,
            parking: false
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
   event.defaultPrevented()
   alert(`${event.state.value} was posted to account`) 
   console.log("alert on handleSubmit", event.state.value)
 

    axios
    .post("http://localhost:5000/api/users/u", this.state)
    .then( response => console.log(response) )
     this.setState({localhost: "", rooms: "", price: "", laundry: false,
     dishwasher: false, parking: false})
  }

render() {
    return(
        <div> 
        <form onSubmit={this.handleSubmit}>
            <input 
                placeholder="home location"
                className="adinput"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
            />
            <input 
            placeholder="number of rooms"
            className="adinput"
            name="rooms"
            value={this.state.rooms}
            onChange={this.handleChange}
            />
            <input 
                placeholder="price per rental"
                className="adinput"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
            />
            <Link to="/home">
            <button type="submit"> Submit </button>
            </Link>
        </form>
        </div>  
    )
    }
}

export default Location