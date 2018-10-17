import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'transparent',
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: '300',
    marginBottom: 30,
    color: 'black',
  },
  description: {
    fontWeight: '300',
    color: 'black',
    textAlign: 'center',
  },
})
