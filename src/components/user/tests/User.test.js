import React from 'react';
import {shallow} from 'enzyme';
import User from '../User';


describe('user tests', () => {
    const event={
        target:{
            value:{}
        }
    }
    it('has divs', () => {
        const wrapper = shallow(<User />)
        expect(wrapper.find('div').length).toBe(9)
    })
    it('has navbar', () => {
        const wrapper = shallow(<User />)
        expect(wrapper.find('Navbar').length).toBe(1)
    })
    it('has title', () => {
        const wrapper = shallow(<User />)
        const title = <h4 className="modal-title">EDIT USER DETAILS</h4>
        expect(wrapper.contains(title)).toEqual(true)
    })
    it('has h4', () => {
        const wrapper = shallow(<User />)
        expect(wrapper.find('h4').length).toBe(1)
    })
    it('has form', () => {
        const wrapper = shallow(<User />)
        expect(wrapper.find('form').length).toBe(1)
    })
    it('has span', () => {
        const wrapper = shallow(<User />)
        expect(wrapper.find('span').length).toBe(3)
    })
    it('has i', () => {
        const wrapper = shallow(<User />)
        expect(wrapper.find('i').length).toBe(3)
    })
    it('has input', () => {
        const wrapper = shallow(<User />)
        expect(wrapper.find('input').length).toBe(4)
    })
    it('has br', () => {
        const wrapper = shallow(<User />)
        expect(wrapper.find('br').length).toBe(1)
    })

    it('component mounts', () => {
        const wrapper = shallow(<User />); 
        wrapper.instance().componentDidMount()
    })

    it('default function', () => {
        const wrapper = shallow(<User />); 
        wrapper.instance().default()
    })

    it('handle fullname changed', () => {
        const wrapper = shallow(<User />); 
        wrapper.instance().handleFullnameChanged(event)
    })

    it('handle old password changed', () => {
        const wrapper = shallow(<User />); 
        wrapper.instance().handleOldPasswordChanged(event)
    })

    it('handle new password changed', () => {
        const wrapper = shallow(<User />); 
        wrapper.instance().handleNewPasswordChanged(event)
    })
})