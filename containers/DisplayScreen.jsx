import React from 'react'
import {connect} from 'react-redux'
import DisplayScreen from '../components/DisplayScreen.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    value:state.calculator.inputNumber
  }
}

let Screen = connect(mapStateToProps)(DisplayScreen)
export default Screen
