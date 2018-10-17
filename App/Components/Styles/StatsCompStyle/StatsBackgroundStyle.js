import { StyleSheet, Platform } from 'react-native'

const type = {
  base: (Platform.OS === 'ios' ? 'Avenir-Book' : 'sans-serif'),
  bold: (Platform.OS === 'ios' ? 'Avenir-Black' : 'sans-serif-condensed'),
  emphasis: (Platform.OS === 'ios' ? 'HelveticaNeue-Italic' : 'Roboto')
}

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 5,
    marginTop: 100,
    marginRight: 100
  },
  wrapper: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: type.base,
    letterSpacing: 10,
    marginLeft: 5
  },
  title1: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: type.base,
    letterSpacing: 10,
    marginLeft: 5
  },
  title2: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: type.base,
    letterSpacing: 10,
    marginLeft: 5
  },
  title3: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: type.base,
    letterSpacing: 10,
    marginLeft: 5
  },
  title4: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: type.base,
    letterSpacing: 10,
    marginLeft: 5
  },
  year: {
    marginTop: 20,
    marginLeft: 60
  },
  yearText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#D5DBDB'
  },
  monthView: {
    flexDirection: 'row',
    marginTop: 20
  },
  month: {
    marginLeft: 8,
    color: '#AAB7B8',
    fontFamily: type.bold,
    fontSize: 13
  },
  month1: {
    marginLeft: 28,
    color: '#AAB7B8',
    // fontFamily: type.emphasis,
    fontSize: 13
  },
  month2: {
    marginLeft: 28,
    // color: '#AAB7B8',
    // fontFamily: type.emphasis,
    fontSize: 13
  },
  month3: {
    marginLeft: 28,
    color: '#AAB7B8',
    // fontFamily: type.emphasis,
    fontSize: 13
  },
  chart: {
    flexDirection: 'row',
    marginTop: 60,
    marginLeft: 10
  },
  purple: {
    backgroundColor: '#76bcf5',
    height: 400,
    width: 160,
    alignItems: 'center'
  },
  purpleText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  },
  purpleText2: {
    color : 'white'
  },
  blue: {
    marginTop: 120,
    backgroundColor: '#a572fc',
    height: 320,
    width: 170,
    alignItems: 'center'
  }
})
