import React, { Component } from 'react'
import { Row, Col } from 'antd';

export default class PCFooter extends Component{
    render(){
        return (
           <header>
            <Row>
                <Col span={2}></Col>
                <Col span={20} className='footer'>
                    &copy;&nbsp;&nbsp;2017 React News. All Rights Reseved
                </Col>
                <Col span={2}>
                   
                </Col>
             </Row>
           </header>
        )
    }
}