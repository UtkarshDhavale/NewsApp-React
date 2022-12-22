import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsy04rrnJGvxl-Ke02b2ZQYGRxYiHaHM0_NQ&usqp=CAU" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
