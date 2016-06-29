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
import configureStore from './store/configureStore'
let store = configureStore()//createStore(reducers)

/**
 * Redux debug tools
 * I dont care loading them this way because this is not a production app
 */
import DevTools from './containers/DevTools.jsx'
//import showDevTools from './showDevTools'
/**
 * Application
 */
import App from './pages/App.jsx'


const Holder = () => (
  <Provider store ={store}>
    <div>
      <MuiThemeProvider muiTheme={appStyles()}>
        <App/>
      </MuiThemeProvider>
      <DevTools/>
    </div>
  </Provider>
)

ReactDom.render(<Holder/>, document.getElementById('root'))
//showDevTools(store);
