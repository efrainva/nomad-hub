import React from "react";
import "./peoplecard.css" ;
class PeopleCard extends React.Component{

  render(){
  return(
    <div className="peoplecard">
      <div className="picture"> <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fvector-alpine-landscape-with-peaks-covered-by-snow-vector-id900030910%3Fk%3D6%26m%3D900030910%26s%3D612x612%26w%3D0%26h%3DN7mXKaUfoVhvTnHNjcQQATI2A0oVHJkcMCfvH2ULGWE%3D&f=1&nofb=1' alt ='none pic' /> </div>
        <div className="info">
        
          {}
          <h2>  {this.props.item.name}   </h2> 
          {/* <h3> {this.props.item.rooms} </h3>
          <h3> {this.props.item.price} </h3> */}
          <button id="button" >more details</button>
      </div>

    </div>

  )
  }
}

export default PeopleCard;