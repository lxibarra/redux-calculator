import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

let buttonStyle = { width:'100%', transform:'scale(1.3,1.3)' }
const KeyPad = ()=>(
  <div style={{textAlign:'center', marginTop:20}}>
  <Table selectable={false} style={{width:'50%', margin:'0 auto'}}>
    <TableBody displayRowCheckbox={false} >
      <TableRow >
        <TableRowColumn>
          <RaisedButton label="7" fullWidth={true} primary={true} style={buttonStyle} />
        </TableRowColumn>
        <TableRowColumn>
          <RaisedButton label="8" fullWidth={true} secondary={true} style={buttonStyle} />
        </TableRowColumn>
        <TableRowColumn>
            <RaisedButton label="9" fullWidth={true} primary={true} style={buttonStyle} />
        </TableRowColumn>
        <TableRowColumn>
            <RaisedButton label="+" fullWidth={true} secondary={true} style={buttonStyle}/>
        </TableRowColumn>
      </TableRow>
      <TableRow >
        <TableRowColumn>
          <RaisedButton label="4" fullWidth={true} primary={true} style={buttonStyle} />
        </TableRowColumn>
        <TableRowColumn>
          <RaisedButton label="5" fullWidth={true} secondary={true} style={buttonStyle} />
        </TableRowColumn>
        <TableRowColumn>
            <RaisedButton label="6" fullWidth={true} primary={true} style={buttonStyle} />
        </TableRowColumn>
        <TableRowColumn >
            <RaisedButton label="-" fullWidth={true} primary={true} style={buttonStyle} />
        </TableRowColumn>
      </TableRow>
      <TableRow >
        <TableRowColumn>
          <RaisedButton label="1" fullWidth={true} primary={true} style={buttonStyle} />
        </TableRowColumn>
        <TableRowColumn>
          <RaisedButton label="2" fullWidth={true} secondary={true} style={buttonStyle}/>
        </TableRowColumn>
        <TableRowColumn>
            <RaisedButton label="3" fullWidth={true} primary={true} style={buttonStyle} />
        </TableRowColumn>
        <TableRowColumn>
            <RaisedButton label="*" fullWidth={true} secondary={true} style={buttonStyle} />
        </TableRowColumn>
      </TableRow>
      <TableRow >
        <TableRowColumn colSpan="4">
            <RaisedButton label="=" fullWidth={true} primary={true} style={buttonStyle} />
        </TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
</div>
)

export default KeyPad
