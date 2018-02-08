import React from 'react';
import { shallow } from 'enzyme';
import Info from './Info';

describe('Info tests', () => {
    const year = (new Date()).getFullYear();
    it('has divs', () => {
        const wrapper = shallow(<Info />)
        expect(wrapper.find('div').length).toBe(3)
    })

    it('has info paragraph', () => {
        const wrapper = shallow(<Info />)
        const info = <p>Copyright © {year} All rights reserved. Ibrahim Mbaziira</p>
        expect(wrapper.contains(info)).toEqual(true)
    })

    it('has paragraph tag', () => {
        const wrapper = shallow(<Info />)
        expect(wrapper.find('p').length).toBe(1)
    })
})