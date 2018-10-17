import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import {LinearGradient} from 'expo'
import styles from '../Styles/SignupCompStyle/SignupButtonStyle'

import StatsScreen from '../../Containers/StatsScreen'

export default class SignUpButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }
  toggleModal = () => {
   
    this.setState({ showModal: !this.state.showModal })
  }
  render () {
    return (
      <View style={styles.container}>
        <LinearGradient style={styles.linearGradient}
                        colors={['#a572fc', '#76bcf5']}>
          <TouchableOpacity style={styles.button}
                            onPress={this.toggleModal}
                            activeOpacity={1} >
            <Text style={styles.text}>Next Step</Text>
          </TouchableOpacity>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <StatsScreen screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </LinearGradient>
      </View>
    )
  }
}
