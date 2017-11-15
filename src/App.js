import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PCIndex from './components/pc/pc_index';
import MobileIndex from './components/mobile/mobile_index';
import MediaQuery from 'react-responsive';

export default class App extends Component{
      render() {
        return (
          <div>
              <MediaQuery query='(min-device-width:1224px)'>
                <PCIndex />
              </MediaQuery>
              <MediaQuery query='(max-device-width:1224px)'>
                <MobileIndex />
              </MediaQuery>  
          </div>
        );
      }
}