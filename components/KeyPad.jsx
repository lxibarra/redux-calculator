import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import KeyButton from '../containers/KeyButton.jsx'
import ClearButton from '../containers/ClearButton.jsx'

const KeyPad = ()=>(
  <div style={{textAlign:'center', marginTop:20}}>
  <Table selectable={false} style={{width:'50%', margin:'0 auto'}}>
    <TableBody displayRowCheckbox={false} >
      <TableRow >
        <TableRowColumn>
          <KeyButton label="7" fullWidth={true} primary={true}  />
        </TableRowColumn>
        <TableRowColumn>
          <KeyButton label="8" fullWidth={true} secondary={true} />
        </TableRowColumn>
        <TableRowColumn>
            <KeyButton label="9" fullWidth={true} primary={true}  />
        </TableRowColumn>
        <TableRowColumn>
            <ClearButton label="CE" fullWidth={true} secondary={true}  />
        </TableRowColumn>
      </TableRow>
      <TableRow >
        <TableRowColumn>
          <KeyButton label="4" fullWidth={true} primary={true}  />
        </TableRowColumn>
        <TableRowColumn>
          <KeyButton label="5" fullWidth={true} secondary={true}  />
        </TableRowColumn>
        <TableRowColumn>
            <KeyButton label="6" fullWidth={true} primary={true} />
        </TableRowColumn>
        <TableRowColumn >
            <KeyButton label="-" fullWidth={true} primary={true}  />
        </TableRowColumn>
      </TableRow>
      <TableRow >
        <TableRowColumn>
          <KeyButton label="1" fullWidth={true} primary={true}  />
        </TableRowColumn>
        <TableRowColumn>
          <KeyButton label="2" fullWidth={true} secondary={true} />
        </TableRowColumn>
        <TableRowColumn>
            <KeyButton label="3" fullWidth={true} primary={true}  />
        </TableRowColumn>
        <TableRowColumn>
            <KeyButton label="+" fullWidth={true} secondary={true} />
        </TableRowColumn>
      </TableRow>
      <TableRow >
        <TableRowColumn colSpan="3">
            <KeyButton label="=" fullWidth={true} primary={true}  />
        </TableRowColumn>
        <TableRowColumn >
          <KeyButton label="*" fullWidth={true} secondary={true} />
        </TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
</div>
)

export default KeyPad
