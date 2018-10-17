import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, StatusBar } from 'react-native'
import {LinearGradient} from 'expo'

import styles from '../Styles/LoginCompStyle/LoginHeaderStyle'
import logoImg from '../../Images/Mine/react-logo.png'

export default class LoginHeader extends Component {
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
      <LinearGradient style={styles.linearGradient}
                        colors={['#a572fc', '#76bcf5']}>
          {/* <StatusBar
            translucent={false}
          backgroundColor="blue"
          barStyle="light-content"
      /> */}
          <Image source={logoImg} style={styles.image} />
        </LinearGradient>
    )
  }
}
