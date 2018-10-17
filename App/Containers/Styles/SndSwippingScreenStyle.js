import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  uilist:{
    flex: 1,
    width: screenWidth,
  },
  compose: {
    flex: 1,
    width: screenWidth,
  }
})
