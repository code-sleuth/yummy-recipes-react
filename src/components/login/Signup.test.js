import React from 'react';
import {shallow} from 'enzyme';
import Signup from './Signup';

describe('signup tests', () => {
    const event={
        target:{
            value:{}
        }
    }
    it('has divs', () => {
        const wrapper = shallow(<Signup />)
        expect(wrapper.find('div').length).toBe(10)
    })

    it('has a title', () => {
        const wrapper = shallow(<Signup />)
        const title = <h4 className="modal-title">SIGN UP</h4>
        expect(wrapper.contains(title)).toEqual(true)
    })

    it('has h4', () => {
        const wrapper = shallow(<Signup />)
        expect(wrapper.find('h4').length).toBe(1)
    })

    it('has a form', () => {
        const wrapper = shallow(<Signup />)
        expect(wrapper.find('form').length).toBe(1)
    })

    it('has inputs', () => {
        const wrapper = shallow(<Signup />)
        expect(wrapper.find('input').length).toBe(6)
    })

    it('has spans', () => {
        const wrapper = shallow(<Signup />)
        expect(wrapper.find('span').length).toBe(5)
    })
    it('has i', () => {
        const wrapper = shallow(<Signup />)
        expect(wrapper.find('i').length).toBe(5)
    })
    it('has br', () => {
        const wrapper = shallow(<Signup />)
        expect(wrapper.find('br').length).toBe(1)
    })

    it('handles username changed', () => {
        const wrapper = shallow(<Signup />); 
        wrapper.instance().handleUsernameChanged(event)
    })

    it('handles fullname changed', () => {
        const wrapper = shallow(<Signup />); 
        wrapper.instance().handleFullnameChanged(event)
    })

    it('handles password changed', () => {
        const wrapper = shallow(<Signup />); 
        wrapper.instance().handlePasswordChanged(event)
    })

    it('handles confirm password changed', () => {
        const wrapper = shallow(<Signup />); 
        wrapper.instance().handleConfirmPasswordChanged(event)
    })
            
})