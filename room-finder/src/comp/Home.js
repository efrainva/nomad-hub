import React from 'react';
// import axios from 'axios';

import PeopleCard from './PeopleCard'
import NavBar from './navbar'
import Search from './Search'
// import Login from './Login'


import {connect} from 'react-redux';
import { getInfo } from '../Actions/lodgeA';
// import {getInfo} from '../Actions/lodgeA'
  
class Home extends React.Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//     name:[],
//   }

// }




 render(){
  return (
    <div >

      <NavBar />
      <Search />
      <div className='location'>
        <h2>City</h2>
        <div className='cardholder'>

          { 
            this.props.aname.map(e => {
            return <PeopleCard item ={e} key ={e.id}/>
          })}

        </div>
      </div>

    </div>
  )
  }
}



const mapStateToProps = state => {
  return {
    aname: state.lodge.name
  }
}
// , {getInfo})
export default connect(mapStateToProps,getInfo)(Home)

// export default Home;