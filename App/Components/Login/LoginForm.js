import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, KeyboardAvoidingView } from 'react-native'

import styles from '../Styles/LoginCompStyle/LoginFormStyle'
import UserInput from '../Reusable/UserInput'

import usernameImg from '../../Images/Mine/Icons/enveloppe.png'
import passwordImg from '../../Images/Mine/Icons/lock.png'

export default class LoginForm extends Component {
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
      <View
                            style={styles.container}>
        {/* <Text>Email</Text> */}
        <UserInput source={usernameImg}
                   iconStyle={styles.inlineImg}
                   style={styles.input}
                   placeholder='Email'
                   autoCapitalize={'none'}
                   returnKeyType={'done'}
                   autoCorrect={false} />
        {/* <Text>Email</Text> */}
        <UserInput source={passwordImg}
                   iconStyle={styles.inlineImgPass}
                   style={styles.inputpass}
                   secureTextEntry={true}
                   placeholder='Password'
                   placeholderTextColor='#99A3A4'
                   returnKeyType={'done'}
                   autoCapitalize={'none'}
                   autoCorrect={false} />
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
