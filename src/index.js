import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieComponent from './Movie/MovieComponent';
import registerServiceWorker from './registerServiceWorker';
import MovieGridComponent from './MovieGrid/MovieGridComponent';

ReactDOM.render(<MovieGridComponent />, document.getElementById('root'));
registerServiceWorker();
