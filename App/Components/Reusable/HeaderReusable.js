import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import {LinearGradient} from 'expo'

import styles from '../Styles/HeaderReusableStyle'

export default class HeaderReusable extends Component {
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
        <View style={styles.wrapper}>
          <Text style={styles.text}>React</Text>
          <Text style={styles.text2}>Native</Text>
        </View>
        <View style={{flex: 1}}>
          {this.props.children}
        </View>
        </LinearGradient>
    )
  }
}
