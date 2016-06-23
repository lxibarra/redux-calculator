
const addNumber = (state, number) => {
  if(state === '0') {
    return number
  }
  if(state.length >=9) {
    return state
  }
  return `${state}${number}`
}

export const inputNumber = (state = '0', action) => {
  switch (action.type) {
    case 'INPUT_NUMBER':
      return addNumber(state, action.number)
    case 'CLEAR_NUMBERS':
      return action.number
    default:
      return state
  }
}
