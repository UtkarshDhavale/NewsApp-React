import React, { Component } from 'react'
import img from './NoPreview.png'

export class NewsItem extends Component {

  render() {
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="container my-3">
            <div className="card" style={{width: "18rem"}}>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}
            </span>
                <img src={imgUrl?imgUrl:img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-danger">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
