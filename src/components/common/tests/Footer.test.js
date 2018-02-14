import React from 'react';
import { shallow } from  'enzyme';
import Footer from '../Footer';

describe('footer component tests', () => {
    it('has divs', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('div').length).toBe(4)
    })
    it('has footer tag', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.find('footer').length).toBe(1)
    })
})