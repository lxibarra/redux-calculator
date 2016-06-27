const calculate = (action) => {
  switch (action.operation) {
    case '-':
      return action.numberA - action.numberB
    case '+':
      return action.numberA + action.numberB
    case '*':
      return action.numberA * action.numberB
    default:
      return action.numberA
  }
}

export const performOperation = (state = '0', action) => {
  switch (action.type) {
    case 'PERFORM_OPERATION':
      return calculate(action)
    default:
      return state
  }
}
