import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

let buttonStyle = { width:'100%', transform:'scale(1.3,1.3)' }

const Button = ({label, fullWidth, primary, clickAction}) => (
  <RaisedButton label={label} fullWidth={fullWidth} primary={primary} style={buttonStyle} onClick={clickAction} />
)

export default Button
