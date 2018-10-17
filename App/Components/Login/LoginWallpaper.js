import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native'

import styles from '../Styles/LoginCompStyle/LoginWallpaperStyle'
import mountainGuy from '../../Images/Mine/mountainGuy.png'

export default class LoginWallpaper extends Component {
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
      <ImageBackground blurRadius={1}
                       style={styles.imageBackground}
                       source={mountainGuy}>
        {this.props.children}
      </ImageBackground>
    )
  }
}
