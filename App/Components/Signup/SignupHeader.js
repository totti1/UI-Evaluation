import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import styles from '../Styles/SignupCompStyle/SignupHeaderStyle'

export default class SignupHeader extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>React</Text>
        <Text style={styles.textBottom}>Native</Text>
        <Ionicons name="ios-close" 
                  size={45} 
                  color="white"
                  style={styles.iconImage} />
      </View>
    )
  }
}
