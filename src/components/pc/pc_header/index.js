import React from 'react';
import {Header,Span} from '../../common/Tags';
import {A} from './style';
import {Row, Col} from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
    Modal
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
// import {Router, Route, Link, browserHistory} from 'react-router'
import {Link} from 'react-router-dom';

class PCHeader extends React.Component{
    state = {
        current: 'top',
        modalVisible: false,
        action:'login',
        hasLogined:false,
        userNickName:'',
        userid:0
    }
    setModalVisible(value) {
        this.setState({
            modalVisible:value
        })
    }
    componentWillMount(){
      if (localStorage.userid='') {
        this.setState({hasLogined:true,userNickName:localStorage.userNickName,userid:localStorage.userid})
      }
    }
    handleClick(e){
        if(e.key == 'register') {
            this.setState({
                current:'register'
            })
            this.setModalVisible(true)
        } else {
            this.setState({
                current:e.key
            })
        }
    }
    handleSubmit(e) {
        // 页面向API发起请求
        e.preventDefault();
        const myFetchOptions = {
            method:'GET'
        }
        const formData = this.props.form.getFieldsValue();
        // console.log(formData);
          fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
              + "&username="+formData.userName+"&password="+formData.password
              +"&r_userName=" + formData.r_userName + "&r_password="
              + formData.r_password + "&r_confirmPassword="
              + formData.r_confirmPassword, myFetchOptions)
              .then(response => response.json())
              .then(json => {
                this.setState({userNickName: json.NickUserName, userid: json.UserId});
              });
        if (this.state.action=="login") {
          this.setState({hasLogined:true});
        }
        message.success("请求成功！");
        this.setModalVisible(false);
    }
    callback(key) {
        if (key == 1) {
          this.setState({action: 'login'});
        } else if (key == 2) {
          this.setState({action: 'register'});
        }
    }
    logout(){
      localStorage.userid= '';
      localStorage.userNickName = '';
      this.setState({hasLogined:false});
    }
    render(){
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined?
            <Menu.Item key='logout' className='register' style={{color:'#fff',borderBottom:'none'}}>
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Link target="_blank" to={`/usercenter`}>
                  <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type='ghost' htmlType='button' onClick={this.logout.bind(this)}>退出</Button>
            </Menu.Item>:
            <Menu.Item key='register' className='register'>
                <Icon type='appstore' />注册/登录
            </Menu.Item>
        return (
           <Header style={{paddingTop:10}}>
            <Row>
                <Col span={2}></Col>
                <Col span={4}>
                    <A href="/">
                        <img src="../images/logo.png" alt="logo"/>
                        <Span>ReactNews</Span>
                    </A>
                </Col>
                <Col span={16}>
                    <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
                        <Menu.Item key="top" >
                             <Icon type="appstore" />头条
                        </Menu.Item>
                        <Menu.Item key="shehui">
                             <Icon type="appstore" />社会
                        </Menu.Item>
                        <Menu.Item key="guonei">
                             <Icon type="appstore" />国内
                        </Menu.Item>
                        <Menu.Item key="guoji">
                             <Icon type="appstore" />国际
                        </Menu.Item>
                        <Menu.Item key="yule">
                             <Icon type="appstore" />娱乐
                        </Menu.Item>
                        {/*<Menu.Item key="tiyu">
                             <Icon type="appstore" />体育
                          </Menu.Item>*/}
                        <Menu.Item key="keji">
                             <Icon type="appstore" />科技
                        </Menu.Item>
                        <Menu.Item key="shishang">
                             <Icon type="appstore" />时尚
                        </Menu.Item>
                        {userShow}
                    </Menu>
                    <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">

                       <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                           <TabPane tab="登录" key="1">
                              <Form  layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                  <FormItem label='账户'>
                                          <Input placeholder='请输入您的账号' {...getFieldDecorator('r_userName')}/>
                                      </FormItem>
                                      <FormItem label='密码'>
                                          <Input type='password' placeholder='请输入您的密码' {...getFieldDecorator('r_password')}/>
                                      </FormItem>
                                      <FormItem label='确认密码'>
                                          <Input type='password'  placeholder='请再次输入您的密码' {...getFieldDecorator('r_confirmPassword')}/>
                                  </FormItem>
                                  <Button type='primary' htmlType='submit'>登录</Button>
                              </Form>
                           </TabPane>
                           <TabPane tab="注册" key="2">
                              <Form  layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                  <FormItem label='账户'>
                                          <Input placeholder='请输入您的账号' {...getFieldDecorator('r_userName')}/>
                                      </FormItem>
                                      <FormItem label='密码'>
                                          <Input type='password' placeholder='请输入您的密码' {...getFieldDecorator('r_password')}/>
                                      </FormItem>
                                      <FormItem label='确认密码'>
                                          <Input type='password'  placeholder='请再次输入您的密码' {...getFieldDecorator('r_confirmPassword')}/>
                                  </FormItem>
                                  <Button type='primary' htmlType='submit'>注册</Button>
                              </Form>
                           </TabPane>
                       </Tabs>
                    </Modal>
                </Col>
                <Col span={2}></Col>
             </Row>
           </Header>
        )
    }
}

export default PCHeader = Form.create({})(PCHeader);
