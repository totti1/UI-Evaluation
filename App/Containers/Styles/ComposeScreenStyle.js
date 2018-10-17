import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  textContainer: {
    marginTop: 30,
    marginLeft: 20
  },
  text1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  text2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30
  },
  imageContainer: {
    marginTop: 40,
  },
  image: {
    width: 250,
    height: 200,
    marginLeft: 25
  },
  textimg: {
    // position: 'absolute',
    color: 'white',
    fontSize: 15,
    marginLeft: 270,
    // marginTop: -160
  },
  titlecontainer: {
    flex: 1,
    // position: 'absolute',
    flexDirection: 'row',
    marginTop: 90,
    marginLeft: 30,
    zIndex: 9
  },
  title: {
    marginLeft: 10,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  formcontainer: {
    // position: 'absolute',
    // marginTop: -120,
    marginLeft: 50,
  },
  input: {
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 250
  },
  footercontainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 580
  },
  imageStyle: {
    marginLeft: 20,
    width: 25,
    height: 25
  },
  button: {
    marginLeft: 150,
    flexDirection: 'row',
},
  footertext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  postButton: {
    justifyContent: 'center',
    marginLeft: 20,
    borderWidth: 2,
    borderColor: 'white',
    height: 40,
    width: 70
  },
  shareButton: {
    marginTop: 10
  }
})
