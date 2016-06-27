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

export const setMemoryNumber = (number) => {
  return {
    type:'SET_MEMORY_NUMBER',
    number
  }
}

export const performOperation = () => {
  return {
    type:'PERFORM_OPERATION'
  }
}
