import React, { PureComponent } from 'react'
import { FlatList,TouchableWithoutFeedback,Image,View } from 'react-native'

import SpinnerScreen from '../../Components/SpinnerScreen'
import Alert from '../../Components/Alert'
import News from '../../Components/NewsComponent'

import FetchNews from '../../Services/FetchNews'

export default class NewsView extends PureComponent {


  static navigationOptions = ({ navigation }) => {
    // console.log(navigation.getParam('data',null))
    onPress=()=>navigation.navigate('SearchScreen',{title:navigation.getParam('title',null)})
    return {
      title: navigation.getParam('title', null),
      headerRight: (
      <View style={{width: 30,height: 25,marginTop: -70,marginRight: 20}}>
       <TouchableWithoutFeedback onPress={onPress}>
         <Image source={require('../../Assets/searchIcon.webp')} style={{width: "100%"}} resizeMode={"contain"} />
       </TouchableWithoutFeedback>
       </View>
      )
    };
  };

  constructor(props){
    super(props)
    this.news = new FetchNews()
    this.newsType=this.props.navigation.getParam('title',null)
    this.fetchNews()
    this.arrayHolder
  }

  state={
    isLoading:true,
    newsData:[],
    error:false,
    refreshing:false,
  }

  

  fetchNews=async ()=>{
    try {
      let data = await this.news.fetchNews(this.newsType)
      this.arrayHolder = data
      // console.log(data)
      this.setState({
        isLoading:false,
        newsData:data,
        refreshing:false,
      })  
    } catch (error) {
      // console.log(error)
      this.setState({
        isLoading:false,
        error:true,
        refreshing:false,
      })
    }
  }
  handleAlertState=()=>{
    this.setState(prevState=>{
      return {error:!prevState.error}
    })
  }

  handleRefresh=()=>{
    this.setState({
      refreshing:true,
      newsData:[]
    },()=>{
      this.fetchNews()
    })
  }

  render() {
    if(this.state.isLoading){
      return <SpinnerScreen message="Loading News" />
    }
    if(this.state.refreshing){
      return (
        <SpinnerScreen message="Refreshing content" />
      )
    }
    return (
      <>
        {(this.state.error?<Alert title="Error while fetching news" body="An unexpected error occurred while trying to fetch news articles" confirmBtnText="Ok" handleCancelAction={this.handleAlertState} handleConfirmAction={this.handleAlertState}  />:null)}
        <>
          <FlatList
          data={this.state.newsData}
          renderItem={({item})=> <News data={item} />}
          keyExtractor={(item)=>item.id.toString()}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          />
        </>
      </>
    )
  }
}
