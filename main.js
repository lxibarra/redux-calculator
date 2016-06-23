/**
 * REACT
 */
import React from 'react'
import ReactDom from 'react-dom'
/**
 * Material UI
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import appStyles from './Application-style'
/**
 * Redux
 */
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
let store = createStore(reducers)
/**
 * Application
 */
import App from './pages/App.jsx'


const Holder = () => (
  <Provider store ={store}>
    <MuiThemeProvider muiTheme={appStyles()}>
      <App/>
    </MuiThemeProvider>
  </Provider>
)

ReactDom.render(<Holder/>, document.getElementById('root'))
