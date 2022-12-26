import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="container my-3">
            <div className="card" style={{width: "18rem"}}>
                <img src={imgUrl?imgUrl:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/jio_2_0-sixteen_nine.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
