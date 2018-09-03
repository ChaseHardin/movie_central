import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('Movies', () => {
  it('should show a movie title', () => {
    const wrapper = mount(<App />);

    const actual = wrapper.find('.movie-title').text();
    const expected = 'The Lord of the Rings: The Fellowship of the Ring';

    assert.equal(actual, expected);
  });

  it('should show release date', () => {
    const wrapper = mount(<App />);

    const actual = wrapper.find('.movie-release-date').text();
    const expected = 'December 18, 2001';

    assert.equal(actual, expected);
  });
});
