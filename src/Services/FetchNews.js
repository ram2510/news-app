
export default class News{
  /**
   * 
   * @param {number} page  The page at which the user is requesting starts with 0 
   */
  async fetchNews(newsType){
    let url
    switch (newsType) {
      case "Bitcoin":
        url = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-23&sortBy=publishedAt&apiKey=*************"
        break;
      case "Us News":
        url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey==*************"
        break;
      default:
        url = "https://newsapi.org/v2/everything?q=apple&from=2019-07-22&to=2019-07-22&sortBy=popularity&apiKey==*************"
        break;
    }
    try {
      let response =await fetch(url,{
        method:"GET",
      })
      let data = await response.json()
      // console.log(data)
      counter = 1;
      data.articles.forEach(d => {
        d["id"]=counter
        counter++;
      });
      return data.articles 
  
    } catch (error) {
      // console.log(error)
      throw new Error("lil")
    }
  }

}
