import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('header tests', () => {
    it('has div tag', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('div').length).toBe(1)
    });
    it('has a title', () => {
        const wrapper = shallow(<Header />)
        const title = <h1 className="text-center">Yummy Recipes React App</h1>
        expect(wrapper.contains(title)).toEqual(true)
    });
})