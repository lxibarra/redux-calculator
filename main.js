import React from 'react'
import ReactDom from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import appStyles from './Application-style'


import App from './pages/App.jsx'


const Holder = () => (
  <MuiThemeProvider muiTheme={appStyles()}>
    <App/>
  </MuiThemeProvider>
)

ReactDom.render(<Holder/>, document.getElementById('root'))
