import React, { PureComponent } from 'react'
import { View,ActivityIndicator,Text,StyleSheet } from 'react-native'


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  // Flex to fill, position absolute, 
  // Fixed left/top, and the width set to the window width
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#D3D3D3',
    opacity: 0.3,
  }  
})


export default class EmptyScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        {this.props.message}
      </Text>
      <View style={[styles.overlay, { height: 900}]} />
    </View>
    )
  }
}
