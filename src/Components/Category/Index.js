import React, { PureComponent } from 'react'
import { Text,View,Image,StyleSheet,TouchableWithoutFeedback } from 'react-native'

import Card from '../Card'
import CardItem from '../CardItem'

import {withNavigation} from 'react-navigation'

const styles = StyleSheet.create({
  img:{
    width: "100%",
    aspectRatio:1/0.65
  },
  titleCotainer:{
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  titleText:{
    fontSize: 18,
    fontWeight: 'bold',
  }
})

class Category extends PureComponent {

  onViewClick=()=>{
    // console.log('l')
    // console.log(this.props)
    this.props.navigation.navigate('NewsView',{title:this.props.data.title})
  }

  render() {
    let {imgURL,title} = this.props.data
    return (
      <>
      {/* <TouchableWithoutFeedback onPress={this.onViewClick} > */}
        <Card>
          <CardItem>
          <TouchableWithoutFeedback onPress={this.onViewClick} >
            <Image source={imgURL} resizeMode={"contain"} style={styles.img} />
          </TouchableWithoutFeedback>
          </CardItem>
          <CardItem>
          <TouchableWithoutFeedback onPress={this.onViewClick} >
            <View style={styles.titleCotainer}>
              <Text style={styles.titleText}>{title}</Text>
            </View>
          </TouchableWithoutFeedback>
          </CardItem>
      </Card>
      {/* </TouchableWithoutFeedback> */}
      </>
    )
  }
}

export default withNavigation(Category);
