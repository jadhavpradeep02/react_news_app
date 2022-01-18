import React, { Component } from 'react'

export default class NewsItem extends Component {
    constructor(){
        super();
    }

    render() {
        let {title, description, imageUrl, newsUrl, author, publishedAt} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={ imageUrl ? imageUrl : "https://images.hindustantimes.com/tech/img/2022/01/16/1600x900/asteroid_(Flickr)_1638627105271_1642341331093.jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text">{author}</p>
                            <p className="card-text">{new Date(publishedAt).toGMTString()}</p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">See Details</a>
                        </div>
                </div>
            </div>
        )
    }
}
