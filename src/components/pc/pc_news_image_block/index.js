
import React, { Component } from 'react'
import {Card,Spin } from 'antd';
// import {Link} from 'react-router'
import {Link} from 'react-router-dom';
import axios from 'axios'
import PropTypes from 'prop-types';

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
    // alert(this.props.match) // '/'
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
      {/*或者location.path === '/'*/}
        <Link to={this.props.match === '/' ? `details/${newsItem.uniquekey}` : `${this.props.match&&this.props.match.substring(0,8)}/${newsItem.uniquekey}`} target="_blank">
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
PCNewsImageBlock.PropTypes = {
  count:PropTypes.number,
  type:PropTypes.string,
  cardTitle:PropTypes.string,
  imageWidth:PropTypes.string.isRequired
}