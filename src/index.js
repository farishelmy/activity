import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/sea.css';
import '../src/css/fontastic.css';
 


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
