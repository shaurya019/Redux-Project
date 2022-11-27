import React,{ useState } from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux' 
function NewcakeContainer(props) {
    const[number,setNumber] =  useState(1);
  return (
    <div>
       <h2>NUMBER OF  CAKE - {props.numCakes}</h2>
       <input type='text' value={number} onChange={e=>setNumber(e.target.value)} />
      <button onClick={props.buyCake(number)}>BUY {number} CAKE</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numCakes : state.cake.numCakes
  }
}


const mapDispatchToProps = dispatch => {
  return {
    buyCake : number =>dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewcakeContainer)