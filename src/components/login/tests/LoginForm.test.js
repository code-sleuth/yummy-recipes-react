import React from 'react';
import {shallow} from 'enzyme';
import LoginForm from '../LoginForm';

describe('Login form tests', () => {
    const event={
        target:{
            value:{}
        }
    }
    it('has divs', () => {
        const wrapper = shallow(<LoginForm />)
        expect(wrapper.find('div').length).toBe(8)
    })

    it('has legend', () => {
        const wrapper = shallow(<LoginForm />)
        expect(wrapper.find('legend').length).toBe(1)
    })

    it('has legend titlt', () => {
        const wrapper = shallow(<LoginForm />)
        const legend = <legend>SIGN IN</legend>
        expect(wrapper.contains(legend)).toEqual(true)
    })

    it('has form', () => {
        const wrapper = shallow(<LoginForm />)
        expect(wrapper.find('form').length).toBe(1)
    })

    it('has br', () => {
        const wrapper = shallow(<LoginForm />)
        expect(wrapper.find('br').length).toBe(2)
    })
    it('has link', () => {
        const wrapper = shallow(<LoginForm />)
        expect(wrapper.find('Link').length).toBe(1)
    })

    it('has input', () => {
        const wrapper = shallow(<LoginForm />)
        expect(wrapper.find('input').length).toBe(3)
    })

    it('has span', () => {
        const wrapper = shallow(<LoginForm />)
        expect(wrapper.find('span').length).toBe(2)
    })

    it('has p', () => {
        const wrapper = shallow(<LoginForm />)
        expect(wrapper.find('p').length).toBe(1)
    })

    it('handles input changed', () => {
        const wrapper = shallow(<LoginForm />); 
        wrapper.instance().handleChange(event)
    })
})