import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'antd/dist/antd.css';
import './styles/mobile.css';
import './styles/pc.css';


// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
