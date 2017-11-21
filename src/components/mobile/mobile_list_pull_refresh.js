import React, { Component } from 'react'
import {Row,Col,Spin} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
import ReactPullToRefresh from 'react-pull-to-refresh'

export default class MobileList extends Component {
  state = {
    news:''
  }
  componentWillMount(){
    var myFetchOptions = {
      method: 'GET'
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
  }
  
  handleRefresh(resolve){
    var myFetchOptions = {
        method: 'GET'
      }
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=yule"+ "&count=20", myFetchOptions).then(response => response.json()).then(json => {
        this.setState({news: json})
        resolve()
      });
  }
  render() {
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
            <ReactPullToRefresh onRefresh={this.handleRefresh.bind(this)} style={{textAlign:'center'}}>
                <span className='genericon genericon-next'></span>
                <div>{newList}</div>
            </ReactPullToRefresh>
          </Col>
        </Row>
      </div>
    )
  }
}
