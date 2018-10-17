import { StyleSheet, Dimensions } from 'react-native'

// const screenWidth = Dimensions.get('window').width
// const screenHeight = Dimensions.get('window').height
export default StyleSheet.create({
  container: {
    // flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 260,
    height: 250,
    marginTop: 100,
    backgroundColor: 'white'
  },
  input: {
    marginTop: 50,
    color: '#B2BABB',
    width: 220,
    height: 40,
    marginHorizontal: 30,
    paddingLeft: 45,
    borderBottomWidth: 2,
    borderBottomColor: '#E5E8E8'
  },
  inputpass: {
    marginTop: 15,
    color: '#B2BABB',
    width: 220,
    height: 40,
    marginHorizontal: 30,
    paddingLeft: 45,
    borderBottomWidth: 2,
    borderBottomColor: '#E5E8E8'
  },
  inlineImg: {
    marginTop: 50,
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9
  },
  inlineImgPass: {
    marginTop: 15,
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9
  }
  
})
