import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ImageBackground } from 'react-native'
import styles from '../Styles/SignupCompStyle/SignupWallpaperStyle'

import bckgd from '../../Images/Mine/landscape.png'

export default class SignupWallpaper extends Component {
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
  // }

  render () {
    return (
      <ImageBackground blurRadius={0.5}
                       style={styles.container}
                       source={bckgd}>
        {this.props.children}
      </ImageBackground>
    )
  }
}
