import React, { Component } from 'react'
import { Row, Col } from 'antd';
import {Header} from '../../common/Tags';
import {Footer} from './style';

export default class PCFooter extends Component{
    render(){
        return (
           <Header>
                <Row>
                    <Footer span={20} offset={2}>
                        &copy;&nbsp;&nbsp;2017 React News. All Rights Reseved
                    </Footer>
                    <Col span={2}></Col>
                </Row>
           </Header>
        )
    }
}
