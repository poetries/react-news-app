import React, { Component } from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Row, Col, BackTop} from 'antd';
import CommonComments from '../pc/common_comments';

class MobileNewsDetails extends Component {
  state = {
    newsItem: ''
  }
  componentDidMount(){
    const myFetchOptions = {
			method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
    })
  }
  createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
  render() {
    return (
      <div id='mobileDetailsContainer'>
        <MobileHeader />
        <div className='ucmobileList'>
          <Row>
            <Col span={24} className="container">
              <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
              <hr />
              <CommonComments uniquekey={this.props.match.params.uniquekey} />
            </Col>
          </Row>
          <MobileFooter></MobileFooter>
          <BackTop/>
        </div>
    </div>
    );
  }
}

export default MobileNewsDetails;
