import React from 'react'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/DrawerNavScreenStyle'

import TabNavScreen from './TabNavScreen'
import ComposeScreen from './SwipableScreen/ComposeScreen'
import UIlist from './SwipableScreen/UIlist'

const DrawerNavScreen = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  TabNavScreen: {
    screen: TabNavScreen,
  },
  ComposeScreen: {
    screen: ComposeScreen
  },
  UIlist: {
    screen: UIlist,
  }
},
  {
    initialRouteName: 'TabNavScreen',
    drawerPosition: 'left',
    // // contentComponent: CustomDrawerContentComponent,
    // drawerOpenRoute: 'DrawerOpen',
    // drawerCloseRoute: 'DrawerClose',
    // drawerToggleRoute: 'DrawerToggle'
  });
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavScreen)
