import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image } from 'react-native'
import { connect } from 'react-redux'
import Onboarding from 'react-native-onboarding-swiper'
// import { AppLoading, Asset, Font } from 'expo'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/OnboardingScreenStyle'

class OnboardingScreen extends Component {
  // state = {
  //   isLoadingComplete: false,
  // };

  render () {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this._loadResourcesAsync}
    //       onError={this._handleLoadingError}
    //       onFinish={this._handleFinishLoading}
    //     />
    //   );
    // } else {
      return (
        <Onboarding
        onDone={()=> this.props.navigation.navigate('LoginScreen')}
        onSkip= {()=> this.props.navigation.navigate('LoginScreen')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image style={{height: 100, width: 100}} source={require('../Images/Mine/graduation.png')} />,
          title: 'Welcome',
          subtitle: 'Welcome to the best experience of UI made by a framework called React Native ',
        },
        {
          backgroundColor: '#76bcf5',
          image: <Image style={{height: 100, width: 100}} source={require('../Images/Mine/react-logo.png')} />,
          title: 'History',
          subtitle: 'React Native lets you build your app faster. Instead of recompiling, you can reload your app instantly. With Hot Reloading, you can even run new code while retaining your application state. Give it a try - its a magical experience.',
        },
        {
          backgroundColor: '#a572fc',
          image: <Image style={{height: 100, width: 100}} source={require('../Images/Mine/emoji.png')} />,
          title: 'Invision',
          subtitle: "This a Challenge of making UI Screens so get ready to be amazed",
        },
      ]}
    />
      )
    }
  // }
  // _loadResourcesAsync = async () => {
  //   return Promise.all([
  //     Asset.loadAsync([
  //       require('./assets/images/robot-dev.png'),
  //       require('./assets/images/robot-prod.png'),
  //     ]),
  //     Font.loadAsync({
  //       // This is the font that we are using for our tab bar
  //       ...Ionicons.font,
  //       // We include SpaceMono because we use it in HomeScreen.js. Feel free
  //       // to remove this if you are not using it in your app
  //       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  //     }),
  //   ]);
  // };

  // _handleLoadingError = error => {
  //   // In this case, you might want to report the error to your error
  //   // reporting service, for example Sentry
  //   console.warn(error);
  // };

  // _handleFinishLoading = () => {
  //   this.setState({ isLoadingComplete: true });
  // };
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen)
