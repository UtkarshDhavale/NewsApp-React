import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  constructor(props){
    super(props);
    this.state={
      article: [],
      loading:false,
      pageNumber: 1,
      totalResults: 0
    }
    document.title = `News App - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase()+string.substring(1);
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b544636c9d7b42ea9c49cc19db812d65&page=${this.state.pageNumber}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      article:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    });
  }

  async componentDidMount(){
    this.updateNews();
  }

  handleNextClick=async()=>{
    this.setState({pageNumber:this.state.pageNumber+1});
    this.updateNews();
  }

  handlePrevClick=async()=>{
    this.setState({pageNumber:this.state.pageNumber-1});
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <div className="text-center" style={{margin:'40px 0px'}}>
          <h1>NewsApp - Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</h1>
        </div>

        {this.state.loading && <Spinner/>}

        <div className = "row">
          {!this.state.loading && this.state.article.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
          })}
        </div>
        <div className="container d-flex justify-content-center my-5">
            <button type="button" disabled={this.state.pageNumber<=1?true:false} onClick={this.handlePrevClick} className="btn btn-primary">&larr; Prev</button>
            <button type="button" className="btn">{this.state.pageNumber}</button>
            <button type="button" disabled={this.state.pageNumber>=Math.ceil(this.state.totalResults/this.props.pagesize)?true:false} onClick={this.handleNextClick} className="btn btn-primary">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

News.defaultProps={
  country:"in",
  pagesize:3,
  category:"general"
}

News.propTypes={
  country: PropTypes.string,
  category:PropTypes.string
}

export default News
