import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import Rwanda from './TabNavScreens/Rwanda'
import Textable from './TabNavScreens/Textable'
import Countries from './TabNavScreens/Countries'

const TabNavScreen = TabNavigator({
  Countries: {screen: Countries},
  Textable: {screen: Textable},
  Rwanda: {screen: Rwanda},
},
  {
    navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'Countries') {
        iconName = `ios-flag`
      } else if (routeName === 'Textable') {
        iconName = `ios-happy`
      } else if (routeName === 'Rwanda') {
        iconName = `ios-home`
      }
  
      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />
    },
  }),
  tabBarOptions: {
    activeTintColor: '#48C9B0',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 10,
      color: 'gray',
      textAlign: 'center'
    },
     style: {
      backgroundColor: '#D6EAF8',
    }
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom'
})

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabNavScreen)
