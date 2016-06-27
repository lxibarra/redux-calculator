import {combineReducers} from 'redux'
import {inputNumber} from './inputNumber'
import {currentOperation} from './currentOperation'
import {memoryNumber} from './memoryNumber'
import {performOperation} from './performOperation'

const calculatorReducers = combineReducers({
  inputNumber,
  currentOperation,
  memoryNumber,
  performOperation
})

export default calculatorReducers
