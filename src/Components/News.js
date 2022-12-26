import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {

  constructor(){
    super();
    this.state={
      article: [],
      loading:false,
      pageNUmber: 1,
      totalResults: 0
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b544636c9d7b42ea9c49cc19db812d65&pagesize=6";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article:parsedData.articles,
      totalResults:parsedData.totalResults
    });
  }

  handleNextClick=async()=>{
    console.log("Handle Next Click");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b544636c9d7b42ea9c49cc19db812d65&page=${this.state.pageNUmber+1}&pagesize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article:parsedData.articles,
      pageNUmber:this.state.pageNUmber+1,
      totalResults:parsedData.totalResults
    });
  }

  handlePrevClick=async()=>{
    console.log("Handle Prev Click");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b544636c9d7b42ea9c49cc19db812d65&page=${this.state.pageNUmber-1}&pagesize=6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article:parsedData.articles,
      pageNUmber:this.state.pageNUmber-1,
      totalResults:parsedData.totalResults
    });
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
            <button type="button" disabled={this.state.pageNUmber<=1?true:false} onClick={this.handlePrevClick} className="btn btn-primary">&larr; Prev</button>
            <button type="button" className="btn">{this.state.pageNUmber}</button>
            <button type="button" disabled={this.state.pageNUmber>=this.state.totalResults/6?true:false} onClick={this.handleNextClick} className="btn btn-primary">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default NewsComponent
