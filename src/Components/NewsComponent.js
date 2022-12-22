import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Daily News</h2>
        <div className = "row">
            <div className="col-md-4 my-3">
                <NewsItem title = "myTitle" Description = "myDescription"/>
            </div>
            <div className="col-md-4 my-3">
                <NewsItem title = "myTitle" Description = "myDescription"/>
            </div>
            <div className="col-md-4 my-3">
                <NewsItem title = "myTitle" Description = "myDescription"/>
            </div>
            <div className="col-md-4 my-3">
                <NewsItem title = "myTitle" Description = "myDescription"/>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsComponent
