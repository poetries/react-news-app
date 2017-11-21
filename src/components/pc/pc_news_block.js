import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'

export default class PCNewsBlock extends React.Component {
  state = {
    news:''
  }
  componentWillMount(){
    const myFetchOptions = {
			method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));

  }
  render() {
    const newsList = this.state.news.length ? this.state.news.map((item,index)=>(
      <li key={index}>
          <Link to={`details/${item.uniquekey}`} target='_blank'>{item.title}</Link>
      </li>
    )): '没有加载到任何新闻';

    return (
      <div className='topNewsList'>
          <Card>
             <ul>
                 {newsList}
             </ul>
          </Card>
      </div>
    )
  }
}
