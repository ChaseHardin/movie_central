import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('Movies', () => {
  it('should show a movie title', () => {
    const wrapper = mount(<App />);

    var actual = wrapper.find('.movie-title').text();
    var expected = 'The Lord of the Rings: The Fellowship of the Ring';

    assert.equal(actual, expected);
  });
});
