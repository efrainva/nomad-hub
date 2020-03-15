import React from "react"
import { Link } from "react-router-dom"

class Category extends React.Component {

    render() {
        return(
            <>
            {/* Needs to be routed to a diffrent component */}
            <Link to="/location"> 
            <button style={{fontSize: 20}}> I am looking to rent a plcae </button>
            </Link>
            <Link to="/location">
            <button style={{fontSize: 20}}> I am looking to rent out my plcae </button>
            </Link>
            </>
        )
    }
}

export default Category