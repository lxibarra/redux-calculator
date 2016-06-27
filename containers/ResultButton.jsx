import React from 'react'
import {connect} from 'react-redux'
import KeyButton from '../components/KeyButton.jsx'
import {performOperation} from '../actions'

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
      dispatch(performOperation())
    }
  }
}

let ResultButton = connect(mapStateToProps, mapDispatchToProps)(KeyButton)
export default ResultButton
