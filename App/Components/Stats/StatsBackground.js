import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import styles from '../Styles/StatsCompStyle/StatsBackgroundStyle'

import BackgroundReusable from '../Reusable/BackgroundReusable'

import ComposeScreen from '../../Containers/SwipableScreen/ComposeScreen'

export default class StatsBackground extends Component {
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
        <View style={styles.wrapper}>
          <Text style={styles.title}>S</Text>
          <Text style={styles.title1}>T</Text>
          <Text style={styles.title2}>A</Text>
          <Text style={styles.title3}>T</Text>
          <Text style={styles.title4}>S</Text>
          <View style={styles.year}>
            <Text style={styles.yearText}>2018</Text>
          </View>
        </View>
        <View style={styles.monthView}>
          <Text style={styles.month}>NOVEMBER</Text>
          <Text style={styles.month1}>DECEMBER</Text>
          <Text style={styles.month2}>JANUARY</Text>
          <Text style={styles.month3}>FEBRUARY</Text>
        </View>
        <View style={styles.chart}>
          <TouchableOpacity style={styles.purple}
                            onPress={this.toggleModal}>
            <Text style={styles.purpleText}>890</Text>
            <Text style={styles.purpleText2}>Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blue}
                            onPress={this.toggleModal}>
            <Text style={styles.purpleText}>625</Text>
            <Text style={styles.purpleText2}>Followers</Text>
          </TouchableOpacity>
        </View>
        <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <ComposeScreen screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </View>
    )
  }
}
