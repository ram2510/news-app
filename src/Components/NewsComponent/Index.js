import React, { PureComponent } from 'react'
import { Text,StyleSheet,View,Image,TouchableWithoutFeedback,Linking } from 'react-native'

import Card from '../Card'
import CardItem from '../CardItem'

const styles = StyleSheet.create({
  titleContatiner:{
    width: "100%",
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  titleText:{
    fontSize: 14,
    fontWeight: 'bold',
    },
    imgContainer:{
      width: "100%",
      aspectRatio:1/0.6
    },
    contentConatainer:{
      width: "90%",
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentText:{
      fontSize: 12
    },
    authorContainer:{
      width: "100%",
      alignItems: 'flex-end',
      justifyContent: 'center',
      padding: 5,
    },
    authorText:{
      fontSize: 14
    }
})


export default class News extends PureComponent {
  renderAuthor=()=>{
    let {author} = this.props.data
    if(author){
      return(
        <CardItem>
          <TouchableWithoutFeedback onPress={this.handleClick}>
          <View style={styles.authorContainer}>
            <Text style={styles.authorText}>
               {author}
            </Text>
          </View>
          </TouchableWithoutFeedback>
        </CardItem>
      )
    }
  }

  handleClick=()=>{
    // console.log("l")
    Linking.openURL(this.props.data.url).catch((err) => console.error('An error occurred', err));
  }
  render() {
    let {title,urlToImage,description} = this.props.data
    return (
      <>
       <Card>
        <CardItem>
          <View style={styles.titleContatiner}>
          <TouchableWithoutFeedback onPress={this.handleClick}>
            <Text style={styles.titleText}>{title}</Text>
          </TouchableWithoutFeedback>
          </View>
        </CardItem>
        <CardItem>
        <TouchableWithoutFeedback onPress={this.handleClick}>
          <Image source={{uri:urlToImage}} style={styles.imgContainer} resizeMode={"contain"} />
        </TouchableWithoutFeedback>
        </CardItem>
        <CardItem>
        <TouchableWithoutFeedback onPress={this.handleClick}>
          <View style={styles.contentConatainer}>
            <Text style={styles.contentText}>
              {description}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        </CardItem>
        {this.renderAuthor()}
      </Card> 
      </>
    )
  }
}
