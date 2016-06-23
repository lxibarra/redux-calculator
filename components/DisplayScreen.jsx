import React from 'react'
import TextField from 'material-ui/TextField';
const DisplayScreen = ({value}) => (
     <TextField hintText="0"  value={value} readOnly="true" style={{transform:'scale(2,2)'}}/>
)

export default DisplayScreen
