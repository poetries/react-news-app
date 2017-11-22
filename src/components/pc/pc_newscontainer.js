import React,{ Component } from 'react'
import {
  Row,
  Col,
  Tabs,
  Carousel
} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends Component {
  render() {

    const params = {
      dots:true,
      infinite:true,
      speed: 500,
      slidesToShow:1,
      autoplay:true,
      effect:'fade'
    }
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className='container'>
            <div className='leftContainer'>
              <div className='carousel'>
                  <Carousel {...params}>
                    <div><img src="../../images/carousel_1.jpg"/></div>
                    <div><img src="../../images/carousel_2.jpg"/></div>
                    <div><img src="../../images/carousel_3.jpg"/></div>
                    <div><img src="../../images/carousel_4.jpg"/></div>
                  </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px" match={this.props.match} />
            </div>
            <Tabs className="tabs_news">
							<TabPane tab="头条新闻" key="1">
								<PCNewsBlock count={22} type="top" width="100%" bordered="false" match={this.props.match}/>
							</TabPane>
							<TabPane tab="国际" key="2">
								<PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
							</TabPane>
            </Tabs>
            <div>
							<PCNewsImageBlock count={20} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"  match={this.props.match} />
							<PCNewsImageBlock count={40} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"  match={this.props.match} />
						</div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}
