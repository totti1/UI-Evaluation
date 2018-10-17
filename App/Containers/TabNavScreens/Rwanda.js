import React from 'react'
import { View, SectionList, Text } from 'react-native'
import { connect } from 'react-redux'

// More info here: https://facebook.github.io/react-native/docs/sectionlist.html

// Styles
import styles from '../Styles/RwandaStyle'

class Rwanda extends React.PureComponent {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  state = {
    data: [
      {
        key: 'First',
        data: [
          {title: 'Gasabo', description: 'First Description'},
          {title: 'Nyarugenge', description: 'Second Description'},
          {title: 'Kicukiro', description: 'Third Description'},
        ]
      }, {
        key: 'Second',
        data: [
          {title: 'Nyanza', description: 'Eleventh Description'},
          {title: 'Butare', description: '12th Description'},
          {title: 'Muhanga', description: '13th Description'},
          {title: 'Ruhango', description: '14th Description'},
          {title: 'Kamonyi', description: '15th Description'},
          {title: 'Nyaruguru', description: '16th Description'},
          {title: 'Nyamagabe', description: '17th Description'},
          {title: 'Gisagara', description: '18th Description'},
        ]
      }, {
        key: 'Third',
        data: [
          {title: 'Byumba', description: 'First Description'},
          {title: 'Ruhengeri', description: 'Second Description'},
        ]
      }, {
        key: 'Fourth',
        data: [
          {title: 'Kibuye', description: 'First Description'},
          {title: 'Cyangugu', description: 'Second Description'},
          {title: 'Gisenyi', description: 'Third Description'},
        ]
      }, {
        key: 'Fifth',
        data: [
          {title: 'Rwamagana', description: 'First Description'},
          {title: 'KIbungo', description: 'Second Description'},
        ]
      }
    ]
  }

  /* ***********************************************************
  * STEP 3
  * `renderItem` function - How each cell should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
  *   return <MyCustomCell title={item.title} description={item.description} />
  *
  * For sections with different cells (heterogeneous lists), you can do branch
  * logic here based on section.key OR at the data level, you can provide
  * `renderItem` functions in each section.
  *
  * Note: You can remove section/separator functions and jam them in here
  *************************************************************/
  renderItem ({section, item}) {
    return (
      <View style={styles.row}>
        <Text style={styles.boldLabel}>{item.title}</Text>
        {/* <Text style={styles.label}>{item.description}</Text> */}
      </View>
    )
  }

  // Conditional branching for section headers, also see step 3
  renderSectionHeader ({section}) {
    switch (section.key) {
      case 'First':
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>Kigali Section</Text></View>
      case 'Second':
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>South Section</Text></View>
      case 'Third':
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>North Section</Text></View>
      case 'Fourth':
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>West Section</Text></View>
      default:
        return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>East Section</Text></View>
    }
  }

  /* ***********************************************************
  * STEP 2
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *
  * Removing a function here will make SectionList use default
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Full List Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Full List Footer - </Text>

  // Does each section need a footer?
  renderSectionFooter = () =>
    <Text style={styles.label}> END SECTION!!!! </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>

  renderSectionSeparator = () =>
    <Text style={styles.label}> \/\/\/\/\/\/\/\/ </Text>

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
      <View style={styles.container}>
        <SectionList
          renderSectionHeader={this.renderSectionHeader}
          sections={this.state.data}
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          // ListHeaderComponent={this.renderHeader}
          // SectionSeparatorComponent={this.renderSectionSeparator}
          // ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          // ItemSeparatorComponent={this.renderSeparator}
          // renderSectionFooter={this.renderSectionFooter}
        />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Rwanda)
