import React from 'react'
import {connect} from 'react-redux'
import {setCurrentOperation, setMemoryNumber} from '../actions'
import Button from '../components/KeyButton.jsx'

let number = 0;
const mapStateToProps = (state, ownProps) => {
  number = state.inputNumber
  return {
    label:ownProps.label,
    fullWidth:ownProps.fullWidth,
    primary:ownProps.primary
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickAction:(e)=>{
      dispatch(setCurrentOperation(ownProps.label))
      dispatch(setMemoryNumber(number))
    }
  }
}

let KeyButton = connect(mapStateToProps, mapDispatchToProps)(Button)
export default KeyButton
