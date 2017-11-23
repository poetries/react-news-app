import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './stores';

import 'antd/dist/antd.css';
import './styles/mobile.css';
import './styles/pc.css';


// Render the main component into the dom
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));
