import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import App from './MovieComponent';
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

  it('should show movie rating', () => {
    const wrapper = mount(<App />);

    const actual = wrapper.find('.movie-rating').text();
    const expected = 82;

    assert.equal(actual, expected.toString());
  });

  it('should show movie overview', () => {
    const wrapper = mount(<App />);

    const actual = wrapper.find('.movie-overview').text();
    const expected = 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed…';

    assert.equal(actual, expected.toString());
  });
});
