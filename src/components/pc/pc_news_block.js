import React from 'react';
import {Card,Spin} from 'antd';
import { Link} from 'react-router'
import axios from 'axios'

export default class PCNewsBlock extends React.Component {
  state = {
    news:''
  }
  componentWillMount(){
    const myFetchOptions = {
			method: 'GET'
    };
    // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
    axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(res =>{
      this.setState({news: res.data})
    });

  }
  render() {
    const newsList = this.state.news.length ? this.state.news.map((item,index)=>(
      <li key={index}>
          <Link to={`details/${item.uniquekey}`} target='_blank'>{item.title}</Link>
      </li>
    )): <Spin style={{margin:'0px auto'}} />;

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
