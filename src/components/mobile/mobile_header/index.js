import React from 'react';
import {
  Row,
  Col,
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
import axios from 'axios'

class MobileHeader extends React.Component{
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
        //   fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
        //       + "&username="+formData.userName+"&password="+formData.password
        //       +"&r_userName=" + formData.r_userName + "&r_password="
        //       + formData.r_password + "&r_confirmPassword="
        //       + formData.r_confirmPassword, myFetchOptions)
        //       .then(response => response.json())
        //       .then(json => {
        //         this.setState({userNickName: json.NickUserName, userid: json.UserId});
        //       });
        axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
        + "&username="+formData.userName+"&password="+formData.password
        +"&r_userName=" + formData.r_userName + "&r_password="
        + formData.r_password + "&r_confirmPassword="
        + formData.r_confirmPassword, myFetchOptions)
        .then(response => {
          this.setState({userNickName: response.data.NickUserName, userid: response.data.UserId});
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
    login(){
      this.setModalVisible(true);
    };
    render(){
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined ?
        <Link>
          <Icon type="inbox"/>
        </Link>
        :
        <Icon type="setting" onClick={this.login.bind(this)}/>
        return (
           <div id='mobileheader'>
              <header>
                    <Link to='/'><img src="../images/logo.png" alt="logo"/></Link>
                    <span>ReactNews</span>
                    {userShow}
              </header>
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
           </div>
        )
    }
}

export default MobileHeader = Form.create({})(MobileHeader);
