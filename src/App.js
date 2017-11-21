import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {Router, Route,hashHistory} from 'react-router';
import PCIndex from './components/pc/pc_index';
import MobileIndex from './components/mobile/mobile_index';
import PCNewsDetails from './components/pc/pc_news_details';
import MobileNewsDetails from './components/mobile/mobile_news_details';
import PCUserCenter from './components/pc/pc_usercenter';
import MobileUserCenter from './components/mobile/mobile_usercenter';
import MediaQuery from 'react-responsive';

export default class App extends Component{
      render() {
        return (
          <div>
             {/*PC端*/}
              <MediaQuery query='(min-device-width:1224px)'>
                  <Router history={hashHistory}>
                    <Route path='/' component={PCIndex} />
                    <Route path='/details/:uniquekey' component={PCNewsDetails} />
                    <Route path="/usercenter" component={PCUserCenter}></Route>
                  </Router>
              </MediaQuery>
              {/*移动端*/}
              <MediaQuery query='(max-device-width:1224px)'>
                  <Router history={hashHistory}>
                    <Route path='/' component={MobileIndex} />
                    <Route path='/details/:uniquekey' component={MobileNewsDetails} />
                    <Route path="/usercenter" component={MobileUserCenter}></Route>
                  </Router>
              </MediaQuery>
          </div>
        );
      }
}
