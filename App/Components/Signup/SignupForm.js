import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, View } from 'react-native'
import styles from '../Styles/SignupCompStyle/SignupFormStyle'

import UserInput from '../Reusable/UserInput'
import usernameImg from '../../Images/Mine/Icons/profile-icon.png'
import enveloppeImg from '../../Images/Mine/Icons/enveloppe.png'
import passwordImg from '../../Images/Mine/Icons/lock.png'
// import eyeImg from '../Images/Mine/Icons/eye_black.png'

export default class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showPass: true,
      press: false,
      username: '',
      email: '',
      password: ''
    }
    this.showPass = this.showPass.bind(this)
  }
  handleEmailChange = (e) => {
    // this.props.email
    this.setState({
      email: e.target.value,
    })
  }
  handlePasswordChange = (e) => {
    // this.props.password
    this.setState({
      password: e.target.value,
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    let email = this.state.email
    let password = this.state.password
    this.props.handleEmailChange(email)
    this.props.handlePasswordChange(password)
    //PASS STATE TO PROFILE COMPONENT
  }

  showPass () {
    this.state.press === false ? this.setState({ showPass: false, press: true }) : this.setState({ showPass: true, press: false })
  }
  render () {
    return (
      <View onSubmit={this.handleSubmit.bind(this)}
                            // behavior='padding'
                              style={styles.container}>
        <UserInput source={usernameImg}
                     iconStyle={styles.inlineImguser}
                     style={styles.inputuser}
                     placeholder='Username'
                     autoCapitalize={'none'}
                     returnKeyType={'done'}
                     autoCorrect={false}
                     value={this.state.username} />
                     {/* onChange={this.handleUsername.bind(this)} */}

        <UserInput source={enveloppeImg}
                     iconStyle={styles.inlineImg}
                     style={styles.input}
                     placeholder='Email'
                     autoCapitalize={'none'}
                     returnKeyType={'done'}
                     autoCorrect={false}
                     value={this.state.email}
                     onChange={this.handleEmailChange} />

        <UserInput source={passwordImg}
                     iconStyle={styles.inlineImgPass}
                     style={styles.inputpass}
                     secureTextEntry={this.state.showPass}
                     placeholder='Password'
                     placeholderTextColor='#99A3A4'
                     returnKeyType={'done'}
                     autoCapitalize={'none'}
                     autoCorrect={false}
                     value={this.state.password}
                     onChange={this.handlePasswordChange} />
          {/*<TouchableOpacity*/}
          {/*activeOpacity={0.7}*/}
          {/*style={styles.btnEye}*/}
          {/*onPress={this.showPass}*/}
          {/*>*/}
          {/*/!*<Image source={eyeImg} style={styles.iconEye} />*!/*/}
          {/*</TouchableOpacity>*/}
          </View>
    )
  }
}
SignUpForm.propTypes = {
  handleEmailChange: PropTypes.func,
  handlePasswordChange: PropTypes.func
}
