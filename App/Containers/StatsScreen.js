import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/StatsScreenStyle'

import StatsHeader from '../Components/Stats/StatsHeader'
import StatsBackground from '../Components/Stats/StatsBackground'
import BackgroundReusable from '../Components/Reusable/BackgroundReusable'

class StatsScreen extends Component {
  render () {
    return (
      <View style={{flex: 1, marginBottom: 50}}>
        <StatsHeader />
        <BackgroundReusable />
        <StatsBackground />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(StatsScreen)
