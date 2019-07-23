import React, { PureComponent } from 'react'
import { TextInput,StyleSheet,View } from 'react-native'

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
  input:{
    height: 40,
    padding: 10,
    color: '#000',
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    // marginTop: "10%"
  }
})


export default class Bar extends PureComponent {
  render() {
    return (
      <View style={styles.viewStyles}>
       <TextInput 
        autoFocus={true} 
        keyboardType="email-address"
        returnKeyType="next" 
        placeholder='Search.' 
        blurOnSubmit={false}
        onChangeText={text=>this.props.searchFilter(text)}
        style={styles.input}
       /> 
      </View>
    )
  }
}
