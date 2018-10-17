import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {Image } from 'react-native'

import styles from '../Styles/SignupCompStyle/SignupPhotoStyle'
import people from '../../Images/Mine/lake.png'

export default class SignupPhoto extends Component {
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
      <Image style={styles.image}
      source={people} />
    )
  }
}
