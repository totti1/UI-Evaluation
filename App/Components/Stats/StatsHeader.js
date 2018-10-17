import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

import styles from '../Styles/StatsCompStyle/StatsHeaderStyle'

import HeaderReausable from '../Reusable/HeaderReusable'

export default class StatsHeader extends Component {
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
      <HeaderReausable>
        <View style={{flex: 1, flexDirection : 'row', marginTop: 10}}>
        <FontAwesome name="search" 
                  size={20} 
                  color="white"
                  style={styles.icon} />
        <FontAwesome name="bell" 
                  size={20} 
                  color="white"
                  style={styles.icon2} />
        <Entypo name="dots-two-vertical" 
                  size={20} 
                  color="white"
                  style={styles.icon2} />
        </View>
      </HeaderReausable>
    )
  }
}
