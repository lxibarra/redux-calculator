import React from 'react'
import AppBar from 'material-ui/AppBar';

const TopBar = ({title}) =>(
  <AppBar
    title={title}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
)

export default TopBar
