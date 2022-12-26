import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {

  constructor(){
    super();
    this.state={
      article: [],
      loading:false,
      PageNumber: 1
    }
  }

  async componentDidMount(){
     let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b544636c9d7b42ea9c49cc19db812d65&page="+this.state.PageNumber;
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData);
     this.setState({article:parsedData.articles});
  }

  handleNextClick=async()=>{
    this.setState({PageNumber:this.state.PageNumber+1});
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b544636c9d7b42ea9c49cc19db812d65&page=${this.state.PageNumber}`;
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData);
     this.setState({article:parsedData.articles});
  }

  handlePrevClick=async()=>{
    this.setState({PageNumber:this.state.PageNumber-1});
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Daily News</h2>
        <div className = "row">
          {this.state.article.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
          })}
        </div>
        <div className="container d-flex justify-content-center">
          <div class="btn-group mr-2" role="group" aria-label="Second group">
            <button type="button" onclick={this.handlePrevClick} class="btn btn-primary">&larr; Prev</button>
            <button type="button" class="btn">1</button>
            <button type="button" onclick={this.handleNextClick} class="btn btn-primary">Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsComponent
