import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import MovieComponent from './MovieComponent';
import Adapter from 'enzyme-adapter-react-16';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('Movies', () => {
  var wrapper;
  const expectedTitle = 'The Lord of the Rings: The Fellowship of the Ring';
  const expectedReleaseDate = 'December 18, 2001';
  const expectedRating = 82;
  const expectedOverview = 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed…';

  beforeEach(() => {
    const mockedMovie = {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      releaseDate: 'December 18, 2001',
      rating: 82,
      overview: expectedOverview
    };

    wrapper = mount(<MovieComponent movie={mockedMovie} />);
  });

  it('should show a movie title', () => {
    assert.equal(wrapper.find('.card-title').text(), expectedTitle);
  });

  it('should show release date', () => {
    assert.equal(wrapper.find('.movie-release-date').text(), expectedReleaseDate);
  });

  it('should show movie rating', () => {
    assert.equal(wrapper.find('.movie-rating').text(), expectedRating.toString());
  });

  it('should show movie overview', () => {
    assert.equal(wrapper.find('.card-text').text(), expectedOverview);
  });
});
