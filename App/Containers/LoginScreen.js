import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, StatusBar } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

import LoginHeader from '../Components/Login/LoginHeader'
import LoginWallpaper from '../Components/Login/LoginWallpaper'
import LoginTitle from '../Components/Login/LoginTitle'
import LoginForm from '../Components/Login/LoginForm'
import LoginButton from '../Components/Login/LoginButton'
import LoginSignup from '../Components/Login/LoginSignup'

class LoginScreen extends Component {
  render () {
    return (
      // <View >
      <KeyboardAvoidingView behavior='padding'
                            style={{flex: 1}}>
      {/* <StatusBar
            // backgroundColor="steelblue"
            // barStyle={this.getBarStyle()}
            hidden={true}
            translucent={false}
      /> */}
        <LoginHeader/>
        <LoginWallpaper>
          <LoginForm />
          <LoginButton />
          <LoginSignup />
        </LoginWallpaper>
        <LoginTitle />
        </KeyboardAvoidingView>
      // {/* </View> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
