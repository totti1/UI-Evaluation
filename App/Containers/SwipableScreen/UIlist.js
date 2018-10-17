import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Modal } from 'react-native'
import { connect } from 'react-redux'
import {LinearGradient} from 'expo'
import { Entypo } from '@expo/vector-icons'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from '../Styles/UIlistStyle'
import Images from '../../Images/Mine/people.png'

import TabNavScrenn from '../TabNavScreen'



class UIlist extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      dataObjects: [
        {title: 'FEED'},
        {title: 'LIST'},
        {title: 'ALBUMS'},
        {title: 'TIMELINE'},
        {title: 'COMPOSE'},
        {title: 'CAPTURE'},
        {title: 'PROFILE'},
        {title: 'STATS'},
        {title: 'DISCOVER'}
      ]
    }
  }
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }
 
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  // state = {
    
  // }

  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow = ({item})=> {
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{item.title}</Text>
        <Text style={styles.label}>{item.description}</Text>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}
 
  render () {
    return (
      <LinearGradient style={styles.container}
                      colors={['#a572fc', '#76bcf5']}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>React</Text>
            <Text style={styles.headerText1}>Native</Text>
          </View>
          <Entypo name="align-right" 
                  size={25} 
                  color="white"
                  style={styles.icon} />
        </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          // ListHeaderComponent={this.renderHeader}
          // ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          // ItemSeparatorComponent={this.renderSeparator}
        />
        <TouchableOpacity style={styles.button}
                          onPress={this.toggleModal}>
          <Text style={styles.buttonText}>SETTINGS</Text>
        </TouchableOpacity>
        <View style={styles.image}>
            <Image source={Images}
                   style={styles.img}/>
        </View>
        <Modal
          visible={this.state.showModal}
          onRequestClose={this.toggleModal}>
          <TabNavScrenn screenProps={{ toggle: this.toggleModal }} />
        </Modal>
      </LinearGradient>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UIlist)
