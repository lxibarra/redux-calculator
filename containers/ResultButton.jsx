import React from 'react'
import {connect} from 'react-redux'
import KeyButton from '../components/KeyButton.jsx'
import {inputNumber, clearNumbers} from '../actions'

let currentState = {}

const calculate = (operation, numberA, numberB) => {
  numberA = parseInt(numberA)
  numberB = parseInt(numberB)
  console.log(numberA, numberB, operation)
  switch (operation) {
    case '-':
      return  numberA - numberB
    case '+':
      return numberA + numberB
    case '*':
      return numberA * numberB
    default:
      return numberA
  }
}

const mapStateToProps = (state, ownProps) => {
  currentState = state
  return {
    label:ownProps.label,
    fullWidth:ownProps.fullWidth,
    primary:ownProps.primary
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickAction:(e)=> {
      let calc = calculate(currentState.currentOperation, currentState.memoryNumber, currentState.inputNumber)
      dispatch(clearNumbers())
      dispatch(inputNumber(calc))
    }
  }
}

let ResultButton = connect(mapStateToProps, mapDispatchToProps)(KeyButton)
export default ResultButton
