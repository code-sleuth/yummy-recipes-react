import React from 'react';
import {shallow} from 'enzyme';
import Routes from './routes';

describe('routes tests', () => {
    it('has div', () => {
        const wrapper = shallow(<Routes />)
        expect(wrapper.find('div').length).toBe(1)
    })

    it('has switch', () => {
        const wrapper = shallow(<Routes />)
        expect(wrapper.find('Switch').length).toBe(1)
    })

    it('has private routes', () => {
        const wrapper = shallow(<Routes />)
        expect(wrapper.find('PrivateRoute').length).toBe(7)
    })
    it('has public routes', () => {
        const wrapper = shallow(<Routes />)
        expect(wrapper.find('Route').length).toBe(2)
    })

})