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

export const setCurrentOperation = (operation) => {
  return {
    type:'SET_CURRENT_OPERATION',
    operation
  }
}

export const setMemoryNumber = (number) => {
  return {
    type:'SET_MEMORY_NUMBER',
    number
  }
}

export const performOperation = (operation, numberA, numberB) => {
  return {
    type:'PERFORM_OPERATION',
    operation, 
    numberA,
    numberB
  }
}
