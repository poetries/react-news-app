import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import {Router, Route,hashHistory} from 'react-router';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import PCIndex from './components/pc';
import MobileIndex from './components/mobile';
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
                  { // react-router 2.xx
                    /*<Router history={hashHistory}>
                    <Route path='/' component={PCIndex} />
                    <Route path='/details/:uniquekey' component={PCNewsDetails} />
                    <Route path="/usercenter" component={PCUserCenter}></Route>
        </Router>*/}

              {/*react-router4.xx*/}
              <Router>
                <Switch>
                    <Route exact path='/' component={PCIndex} />
                    <Route exact path='/details/:uniquekey' component={PCNewsDetails}/>
                    <Route path='/usercenter' component={PCUserCenter} />
                </Switch>
              </Router>

              </MediaQuery>
              {/*移动端*/}
              <MediaQuery query='(max-device-width:1224px)'>
                 {/** <Router history={hashHistory}>
                    <Route path='/' component={MobileIndex} />
                    <Route path='/details/:uniquekey' component={MobileNewsDetails} />
                    <Route path="/usercenter" component={MobileUserCenter}></Route>
      </Router>*/}
                  <Router>
                      <Switch>
                         {/*exact精准匹配*/}
                          <Route path='/' exact component={MobileIndex} />
                          {/*传递过去的参数这样获取 this.props.match.params.unique*/}
                          <Route path='/details/:uniquekey' component={MobileNewsDetails} />
                          <Route path="/usercenter" component={MobileUserCenter}></Route>
                      </Switch>
                 </Router>
              </MediaQuery>
          </div>
        );
      }
}
