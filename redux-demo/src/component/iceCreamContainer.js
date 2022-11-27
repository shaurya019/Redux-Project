import React from 'react'
import {connect} from 'react-redux'
import {buyiceCream} from '../redux' 
function iceCreamContainer(props) {
  return (
    <div>
       <h2>NUMBER OF  CAKE - {props.numiceCream}</h2>
      <button onClick={props.buyiceCream}>BUY Ice Cream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numiceCream : state.iceCream.numiceCream
  }
}


const mapDispatchToProps = dispatch => {
  return {
    buyiceCream : ()=>dispatch(buyiceCream())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(iceCreamContainer)