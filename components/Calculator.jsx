import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DisplayScreen from './DisplayScreen.jsx'
import KeyPad from './KeyPad.jsx'

const Calculator = ()=>(
  <Card>
    <CardText style={{textAlign:'center'}}>
      <DisplayScreen/>
      <KeyPad/>
    </CardText>
  </Card>
)

export default Calculator
