import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'

import Category from '../../Components/Category'
import Header from '../../Components/Header'

export default class CategoriesScreen extends PureComponent {

  static navigationOptions = {
    header: null
}

  renderCategory=()=>{
    let data = [{imgURL:require('../../Assets/bitcoin.webp'),title:"Bitcoin"},{imgURL:require('../../Assets/usNews.webp'),title:"Us News"},{imgURL:require('../../Assets/apple.webp'),title:"Apple"}]
    return data.map(d=><Category data={d} key={d.title} />)
  }

  render() {

    return (
      <>
      <Header title="Choose news" />
      <ScrollView>
        {this.renderCategory()}
      </ScrollView> 
      </>
    )
  }
}
