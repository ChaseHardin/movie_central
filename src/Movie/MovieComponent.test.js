import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import MovieComponent from './MovieComponent';
import Adapter from 'enzyme-adapter-react-16';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('MovieComponent', () => {
  var component;
  const expectedTitle = 'The Lord of the Rings: The Fellowship of the Ring';
  const expectedReleaseDate = 'December 18, 2001';
  const expectedRating = 82;
  const expectedOverview = 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed…';

  beforeEach(() => {
    const mockedMovie = {
      title: expectedTitle,
      releaseDate: expectedReleaseDate,
      rating: expectedRating,
      overview: expectedOverview
    };

    component = mount(<MovieComponent movie={mockedMovie} />);
  });

  it('should show a movie title', () => {
    assert.equal(component.find('.card-title').text(), expectedTitle);
  });

  it('should show release date', () => {
    assert.equal(component.find('.movie-release-date').text(), expectedReleaseDate);
  });

  it('should show movie rating', () => {
    assert.equal(component.find('.movie-rating').text(), expectedRating.toString());
  });

  it('should show movie overview', () => {
    assert.equal(component.find('.card-text').text(), expectedOverview);
  });
});
