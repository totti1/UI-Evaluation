import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, StatusBar } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SignupScreenStyle'

import SignupWallpaper from '../Components/Signup/SignupWallpaper'
import SignupHeader from '../Components/Signup/SignupHeader'
import SignupPhoto from '../Components/Signup/SignupPhoto'
import SignupForm from '../Components/Signup/SignupForm'
import SignupButton from '../Components/Signup/SignupButton'

class SignupScreen extends Component {
  render () {
    return (
       <KeyboardAvoidingView behavior='padding'
                            style={{flex: 1}}>
      <SignupWallpaper>
        {/* <StatusBar
            // backgroundColor="steelblue"
            // barStyle={this.getBarStyle()}
            hidden={true}
            translucent={false}
      /> */}
        <SignupHeader />
        <SignupPhoto />
        <SignupForm />
        <SignupButton />
      </SignupWallpaper>
      </KeyboardAvoidingView>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
