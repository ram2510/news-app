import React, { PureComponent } from 'react'
import { Text,View,StyleSheet } from 'react-native'

const styles=StyleSheet.create({
  viewStyles:{
    backgroundColor: "#f8f8f8",
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 30,
    shadowOffset: {
      height: 30,
    },
    shadowRadius: 10,
    elevation:9
  },
 headerStyles:{
    fontSize: 30 
 }
})

export default class Header extends PureComponent {
  
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.headerStyles}> {this.props.title} </Text>
      </View>
    )
  }
}
