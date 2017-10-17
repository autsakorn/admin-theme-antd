import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './index.css';
import './responsive.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router routes={routes} history={browserHistory} />, document.getElementById('root')
);
// registerServiceWorker();
