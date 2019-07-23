import React, { PureComponent } from 'react'
import { FlatList } from 'react-native'

import News from '../../Components/NewsComponent'
import Bar from '../../Components/HeaderSearch'
import Alert from '../../Components/Alert'

import FetchNews from '../../Services/FetchNews'

import SpinnerScreen from '../../Components/SpinnerScreen'


export default class Search extends PureComponent {
  static navigationOptions = {
    header: null
}

  constructor(props){
    super(props)
    this.news = new FetchNews()
    this.newsType=this.props.navigation.getParam('title',null)
    this.fetchNews()
    this.arrayholder=[]
  }

  state={
    isLoading:true,
    newsData:[],
    error:false,
    refreshing:false,
    value:null
  }

  

  fetchNews=async ()=>{
    try {
      let data = await this.news.fetchNews(this.newsType)
      this.arrayholder = data
      // console.log(data)
      this.setState({
        isLoading:false,
        newsData:data,
        refreshing:false,
      })  
    } catch (error) {
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
  searchFilterFunction = (text) => {    
    this.setState({
      value: text,
    });
    const newData = this.arrayholder.filter(item => {      
      const itemData = item.title.toLowerCase()
      
       const textData = text.toLowerCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ newsData: newData });  
    
    // this.arrayholder.filter(item=>{
    //   const itemData = item.title.lowecase
    // })
  };

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
        <>
        {(this.state.error?<Alert confirmBtnText="Ok" handleCancelAction={this.handleAlertState} handleConfirmAction={this.handleAlertState}  />:null)}
          <FlatList
          data={this.state.newsData}
          renderItem={({item})=> <News data={item} />}
          ListHeaderComponent={<Bar value={this.state.value} searchFilter={this.searchFilterFunction} /> }
          keyExtractor={(item)=>item.id.toString()}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          />
        </>
      </>
    )
  }
}
