import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieGridComponent from './MovieGridComponent';

var assert = require('assert');

configure({ adapter: new Adapter() });

describe('MovieGridComponent', () => {
    it('should call the MovieComponent', () => {
        var component = mount(<MovieGridComponent />);
        
        assert.equal(component.find('MovieComponent').length, 1);
    });
});