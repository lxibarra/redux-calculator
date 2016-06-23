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
