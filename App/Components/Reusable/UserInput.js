import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, TextInput, Image } from 'react-native'
// import { Entypo } from '@expo/vector-icons'
import styles from '../Styles/UserInputStyle'

export default class UserInput extends Component {
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
      <View style={styles.container}>
         <Image source={this.props.source}
               style={this.props.iconStyle} />
        <TextInput style={this.props.style}
                   placeholder={this.props.placeholder}
                   secureTextEntry={this.props.secureTextEntry}
                   autoCorrect={this.props.autoCorrect}
                   autoCapitalize={this.props.autoCapitalize}
                   returnKeyType={this.props.returnKeyType}
                   placeholderTextColor='#99A3A4'
                   underlineColorAndroid='transparent'
                   onChangeText={this.props.onChangeText} />
      </View>
    )
  }
}
UserInput.propTypes = {
  iconStyle: PropTypes.any,
  source: PropTypes.number,
  style: PropTypes.any,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
  onChangeText: PropTypes.func
}