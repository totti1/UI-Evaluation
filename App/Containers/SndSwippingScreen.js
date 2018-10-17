import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SndSwippingScreenStyle'

import UIlist from './SwipableScreen/UIlist'
import Compose from './SwipableScreen/ComposeScreen'

class SndSwippingScreen extends Component {
  render () {
    return (
      <ScrollView horizontal={true}>
        {/* <KeyboardAvoidingView behavior='position'> */}
          {/* <Text>SndSwippingScreen</Text> */}
          <View style={styles.uilist}>
          <Compose />
          </View>
          <View style = {styles.compose}>
          <UIlist />
          </View>
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SndSwippingScreen)
