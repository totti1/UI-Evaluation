import React, { Component } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView } from 'react-native'
import {LinearGradient} from 'expo'
import { connect } from 'react-redux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from '../Styles/ComposeScreenStyle'
import Black from '../../Images/Mine/lion.png'
import Clock from '../../Images/Mine/clock.png'
import Appareil from '../../Images/Mine/appareil.png'

import UIList from './UIlist'

class ComposeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }
  render () {
    return (
      <LinearGradient style={styles.container}
                        colors={['#a572fc', '#76bcf5']}>
        <KeyboardAvoidingView behavior="padding"
                              style={{flex: 1}}>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>React</Text>
          <Text style={styles.text2}>Native</Text>
        </View>

        <ScrollView style={styles.imageContainer}
                    horizontal={true}>
          <View style={{marginLeft: 40}}>
            <Image style={styles.image}
                  source={Black} />
          </View>
            <Image style={styles.image}
                  source={Clock} />
            <Image style={styles.image}
                  source={Appareil} />
        </ScrollView>
        <View>
        <Text style={styles.textimg}>EDIT</Text>
        </View>

        <View style={styles.titlecontainer}>
          <Text style={styles.title}>C</Text>
          <Text style={styles.title}>O</Text>
          <Text style={styles.title}>M</Text>
          <Text style={styles.title}>P</Text>
          <Text style={styles.title}>O</Text>
          <Text style={styles.title}>S</Text>
          <Text style={styles.title}>E</Text>
      </View>

      {/* <KeyboardAvoidingView> */}
      <View style={styles.formcontainer}>
        <TextInput style={styles.input}
                   underlineColorAndroid='transparent'
                   placeholder='Say something ...'
                   placeholderTextColor='white'/>
        <TextInput style={styles.input}
                   underlineColorAndroid='transparent'
                   placeholder='Tag people'
                   placeholderTextColor='white'/>
      </View>
      {/* </KeyboardAvoidingView> */}
      <View style={styles.footercontainer}>
        {/*<Image style={styles.imageStyle}*/}
               {/*source={camera} />*/}
        <View style={styles.button}>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.footertext}>SHARE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postButton}
                            onPress={this.toggleModal}>
            <Text style={styles.footertext}>POST</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
          visible={this.state.showModal}
          onRequestClose={this.toggleModal}>
          <UIList screenProps={{ toggle: this.toggleModal }} />
        </Modal>
        </KeyboardAvoidingView>
      </LinearGradient>
      
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

export default connect(mapStateToProps, mapDispatchToProps)(ComposeScreen)
