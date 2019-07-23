import React, { PureComponent } from 'react'
import { Image,View } from 'react-native'


export default class Splash extends PureComponent {
  constructor(props){
    super(props)
    setTimeout( this.authUser,3000)
  }
  authUser= ()=>{
    this.props.navigation.navigate('App');
  }
  render() {
    return (
      <View style={{height: "100%",width: "100%"}}>
        <Image source={require('../../Assets/splash.webp')} style={{height: "100%",width: "100%"}} />
      </View>
    )
  }
}
