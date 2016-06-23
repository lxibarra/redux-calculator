import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DisplayScreen from '../containers/DisplayScreen.jsx'
import KeyPad from './KeyPad.jsx'

const Calculator = ()=>(
  <Card>
    <CardText style={{textAlign:'center'}}>
      <DisplayScreen value={0}/>
      <KeyPad/>
    </CardText>
  </Card>
)

export default Calculator
