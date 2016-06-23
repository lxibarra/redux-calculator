import React from 'react'
import {clearNumbers} from '../actions'
import {connect} from 'react-redux'
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
      dispatch(clearNumbers())
    }
  }
}

let KeyButton = connect(mapStateToProps, mapDispatchToProps)(Button)
export default KeyButton
