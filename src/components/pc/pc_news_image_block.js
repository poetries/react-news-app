
import React, { Component } from 'react'
import {Card,Spin } from 'antd';
import {Link} from 'react-router'
import axios from 'axios'

export default class PCNewsImageBlock extends Component {
  state = {
    news:''
  }
  componentWillMount(){
    const myFetchOptions = {
			method: 'GET'
		};
    // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
    
    axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => this.setState({news: response.data}));
  }
  render() {
    const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "90px"
		};
		const styeH3 = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
    const {news} = this.state;
    const newsList = news.length
    ? news.map((newsItem, index) => (
      <div key={index} className="imageblock">
        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
          <div className="custom-image">
            <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
          </div>
          <div className="custom-card">
            <h3 style={styeH3}>{newsItem.title}</h3>
            <p>{newsItem.author_name}</p>
          </div>
        </Link>
      </div>
    ))
    : <Spin style={{margin:'0px auto'}} />;

    return (
      <div className="topNewsList">
        <Card title={this.props.cartTitle} bordered={true} style={{
          width: this.props.width
        }}>
          {newsList}
        </Card>
    </div>
    )
  }
}
