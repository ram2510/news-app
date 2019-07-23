import React, { PureComponent } from 'react'
import { TextInput,StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput:{
    width: "60%",
    height: 100,
    borderBottomColor: "#9ff",
    marginTop: 100
  }
})

export default class Bar extends PureComponent {
  render() {
    return (
      <>
        <TextInput 
        autoCorrect={true}
        autoFocus={true}
        placeholder="Search"     
        onChangeText={text => this.props.searchFilterFunction(text)}
        style={styles.textInput}
        value={this.props.value}
        />
      </>
    )
  }
}
