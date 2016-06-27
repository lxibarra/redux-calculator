export const currentOperation = (state = '', action)=>{
    switch (action.type) {
      case 'SET_CURRENT_OPERATION':
            return action.operation
      default:
          return state
    }
}
