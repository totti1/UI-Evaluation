import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    // position: 'absolute',
    flex: 1,
    marginTop: -150,
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // width: 300,
    // height: 100,
    backgroundColor: 'white'
  },
  input: {
    marginTop: 100,
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
    marginTop: 100,
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
  },
  inputuser: {
    marginTop: 185,
    color: '#B2BABB',
    width: 220,
    height: 40,
    marginHorizontal: 30,
    paddingLeft: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#E5E8E8'
  },
  inlineImguser: {
    marginTop: 185,
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9
  }
  // btnEye: {
  //   position: 'absolute',
  //   top: 55,
  //   right: 28
  // },
  // iconEye: {
  //   width: 25,
  //   height: 25,
  //   tintColor: 'rgba(0,0,0,0.2)'
  // },
})
