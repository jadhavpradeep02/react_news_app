import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

    constructor() {
        super();
        this.state = ({
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        })
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(this.state.page)
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.articles.totalResults,
            page: this.state.page + 1,
            loading: false
        });
    }

    async updateData() {
        this.setState({loading: true})
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.articles.totalResults,
            loading: false
        });
    }

    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        })
        console.log(this.state.page);
        this.updateData();
    }

    handleNextClick = async () => {
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            this.setState({
                page: this.state.page + 1
            })
            console.log(this.state.page)
            this.updateData();
        } else {
            this.setState({
                page: this.state.page - 1
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                {this.state.loading && <Spinner />}
                <h2>News Monkey - Top headliner</h2>
                <div className='row'>
                {!this.state.loading && this.state.articles.map((element) => {
                    return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0,45): ""} description={element.description ? element.description.slice(0,88) : ""} imageUrl={element.urlToImage} 
                            newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
                        </div>
                })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        )
    }
}
