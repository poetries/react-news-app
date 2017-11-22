import React, { Component } from 'react'
import {Row,Col,Spin} from 'antd';
// import {Router, Route, Link, browserHistory} from 'react-router'
import {Link} from 'react-router-dom';
import Tloader from 'react-touch-loader';

export default class MobileList extends Component {
  state = {
    news:'',
    count:5,
    hasMore:0,
    initializing:1,
    refreshedAt:Date.now()
  }
  componentWillMount(){
    var myFetchOptions = {
      method: 'GET'
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
  }
  onLoadMore(resolve) {
    setTimeout(()=>{
      var count = this.state.count;
      this.setState({
        count:count+5
      })
      var myFetchOptions = {
        method: 'GET'
      }
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.state.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));

      this.setState({
        hasMore:count>0&&count<50
      })
      resolve()
    },2e3)
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        hasMore:1,
        initializing:2
      })
    },2e3)
  }
  render() {
    const {hasMore,initializing,refreshedAt} = this.state;
    const sectionStyle = {
      margin:'10px auto 2px',
      width:'90%'
    }
    const {news} = this.state;
    const newList = news.length ?news.map((item,index)=>(
      <section key={index} className='m_article list-item special_section clearfix' style={sectionStyle}>
        <Link to={`details/${item.uniquekey}`}>
          <div className='m_article_img'>
            <img src={item.thumbnail_pic_s} alt={item.title}/>
          </div>
          <div className='m_article_info'>
            <div className='m_article_title'>
              <span>{item.title}</span>
            </div>
            <div className='m_article_desc clearfix'>
              <div className='m_article_desc_l'>
                <span className='m_article_channel'>{item.realtype}</span>
                <span className='m_article_time'>{item.date}</span>
              </div>
            </div>
          </div>
        </Link>
      </section>
    )):<Spin />;

    return (
      <div>
        <Row>
          <Col span={24}>
            <Tloader className='main' onLoadMore={this.onLoadMore.bind(this)} hasMore={hasMore} initializing={initializing}>
               {newList}
            </Tloader>
          </Col>
        </Row>
      </div>
    )
  }
}
