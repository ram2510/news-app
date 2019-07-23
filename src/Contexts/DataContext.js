import React, { Component,createContext } from 'react'

export const DataContext = createContext() 

export class DataProvider extends Component {

  state={
   data:[]
  }

  changeData=()=>{
    
  }

  render(){
    return (
    <DataContext.Provider 
      value={{...this.state}}
    >
      {this.props.children}
    </DataContext.Provider>
    )
  }
}

