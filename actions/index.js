export const inputNumber = (number) => {
  return {
    type:'INPUT_NUMBER',
    number
  }
}

export const clearNumbers = () => {
  return {
    type:'CLEAR_NUMBERS',
    number:'0'
  }
}

export const setCurrentOperation = (operator) => {
  return {
    type:'SET_CURRENT_OPERATION',
    operator
  }
}


export const performOperation = () => {
  return {
    type:'PERFORM_OPERATION'
  }
}
