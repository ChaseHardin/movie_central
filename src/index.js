import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieComponent from './App/MovieComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovieComponent />, document.getElementById('root'));
registerServiceWorker();
