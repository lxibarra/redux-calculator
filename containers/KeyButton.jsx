import React from 'react'
import {connect} from 'react-redux'
import {inputNumber} from '../actions'
import Button from '../components/KeyButton.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    label:ownProps.label,
    fullWidth:ownProps.fullWidth,
    primary:ownProps.primary
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickAction:(e)=> {
      dispatch(inputNumber(ownProps.label))
    }
  }
}

let KeyButton = connect(mapStateToProps, mapDispatchToProps)(Button)
export default KeyButton
