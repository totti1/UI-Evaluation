import { StackNavigator } from 'react-navigation'
import DrawerNavScreen from '../Containers/DrawerNavScreen'
import OnboardingScreen from '../Containers/OnboardingScreen'
import StatsScreen from '../Containers/StatsScreen'
import SignupScreen from '../Containers/SignupScreen'
import LoginScreen from '../Containers/LoginScreen'
import ComposeScreen from '../Containers/SwipableScreen/ComposeScreen'
import SndSwippingScreen from '../Containers/SndSwippingScreen'
import UIlist from '../Containers/SwipableScreen/UIlist'
import SwippingScreen from '../Containers/SwippingScreen'
import TabNavScreen from '../Containers/TabNavScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  DrawerNavScreen: { screen: DrawerNavScreen },
  OnboardingScreen: { screen: OnboardingScreen },
  StatsScreen: { screen: StatsScreen },
  SignupScreen: { screen: SignupScreen },
  LoginScreen: { screen: LoginScreen },
  ComposeScreen: { screen: ComposeScreen },
  SndSwippingScreen: { screen: SndSwippingScreen },
  UIlist: { screen: UIlist },
  SwippingScreen: { screen: SwippingScreen },
  TabNavScreen: { screen: TabNavScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ComposeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
