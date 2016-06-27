export const memoryNumber = (state = '', action) => {
  switch (action.type) {
    case 'SET_MEMORY_NUMBER':
      return action.number
    default:
      return state
  }
}
