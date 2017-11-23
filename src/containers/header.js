import React, { Component } from 'react';
import { connect } from 'react-redux';
import PCHeader from '../components/pc/pc_header';
import {doLoggin} from '../actions'

// todo
function mapStateToProps(state) {
  console.log(state)
  return {
    doLogin:state.doLogin
  };
}


export default connect(
  mapStateToProps,
  {
    doLoggin
  }
)(PCHeader);
