import React,{useEffect} from 'react';

import NavBar from '../navbar'
import Search from './Search'
import PeopleCard from './PeopleCard'

import {connect} from 'react-redux';
import { getInfo } from '../../redux/Actions/lodgeA';


function Home({lodgeData,getInfo}){

  useEffect (()=> {
    getInfo()
  },[])

  
  if (lodgeData.message === "failed/error") {
    return (<> error </>)
    }  else if (lodgeData.message === "loading")  {
      return (<> recived </>)
    } else {
      return (
        <>
           <div >
        
             <NavBar />
             <Search />
             <div className='location'>
               <h2>City</h2>
              <div className='cardholder'>
               </div>
             </div>
        
           </div>

      {lodgeData.name.map(e => {
      return <PeopleCard item ={e} key ={e.id}/>
      })}
      </>
      )
    } 

}

const mapStateToProps = state => {
  return {
    lodgeData: state.AllLodge,
    err: state.AllLodge
  }
}



export default connect(mapStateToProps,{getInfo})(Home)

// export default Home;
  // return (
  // )