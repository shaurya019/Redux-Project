import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux' 
function cakeContainer(props) {
  return (
    <div>
       <h2>NUMBER OF  CAKE - {props.numCakes}</h2>
      <button onClick={props.buyCake}>BUY CAKE</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numCakes : state.numCakes
  }
}


const mapDispatchToProps = dispatch => {
  return {
    buyCake : ()=>dispatch(buyCake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(cakeContainer)