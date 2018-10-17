import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    // backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    backgroundColor: 'transparent',
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginTop: Metrics.smallMargin,
    // marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  header: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 20
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  headerText1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 30
  },
  icon:{
    marginLeft: 230,
    marginTop: 10
  },
  button:{
    backgroundColor: '#17202A',
    height:50,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    marginLeft: 30
  },
  image: {
    position: 'absolute',
    marginTop: 550,
    marginLeft: 270
  },
  img: {
    height: 60,
    width: 60,
  }
})
