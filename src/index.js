import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MovieGridComponent from './MovieGrid/MovieGridComponent';

ReactDOM.render(<MovieGridComponent />, document.getElementById('root'));
registerServiceWorker();
