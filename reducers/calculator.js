const addNumber = (state, number) => {
  if(state.inputNumber === '0' || state.changed === true) {
    return number
  }
  if(state.inputNumber.length >=9) {
    return state.inputNumber
  }
  return `${state.inputNumber}${number}`
}

const performOperation = (state) => {
   if(state.memoryNumber === null || typeof state.operator === null) {
     return Object.assign({}, state)
   }

   let total = eval(`${state.memoryNumber}${state.operator}${state.inputNumber}`)
   return Object.assign({}, state, {inputNumber:total})

}

export const calculator = (state = { inputNumber:'0', memoryNumber:null, operator:null }, action)=>{
  switch (action.type) {
    case 'INPUT_NUMBER':
      return Object.assign({}, state, { inputNumber: addNumber(state, action.number), changed:false })
    case 'CLEAR_NUMBERS':
      return Object.assign({}, state, { inputNumber: action.number, memoryNumber:null, operator:null  })
    case 'SET_CURRENT_OPERATION':
      return Object.assign({}, state,
        {
            operator:action.operator,
            changed:true,
            memoryNumber:state.inputNumber
        })
    case 'PERFORM_OPERATION':
      return performOperation(state)
    default:
      return state
  }
}
