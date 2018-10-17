import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from '../Styles/LoginCompStyle/LoginTitleStyle'

export default class LoginTitle extends Component {
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
      <View style={styles.wrapper}>
          <Text style={styles.text}>React</Text>
          <Text style={styles.text2}>Native</Text>
      </View>
    )
  }
}
