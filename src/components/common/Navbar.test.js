import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Nav bar tests', () => {
    const props={
        history:{
            push:{

            }
        }
    }
    it('has divs', () => {
        const wrapper = shallow(<Navbar />)
        expect(wrapper.find('div').length).toBe(2)
    });

    it('has nav tag', () => {
        const wrapper = shallow(<Navbar />)
        expect(wrapper.find('nav').length).toBe(1)
    });

    it('has title', () => {
        const wrapper = shallow(<Navbar/>)
        const title = <a className='navbar-brand'>Yummy Recipes</a>
        expect(wrapper.contains(title)).toEqual(true)
    });

    it('has ul tag', () => {
        const wrapper = shallow(<Navbar />)
        expect(wrapper.find('ul').length).toBe(1)
    });

    it('has li tags', () => {
        const wrapper = shallow(<Navbar />)
        expect(wrapper.find('li').length).toBe(3)
    });

    it('has a button', () => {
        const wrapper = shallow(<Navbar />)
        expect(wrapper.find('button').length).toBe(1)
    });

    it('has spans', () => {
        const wrapper = shallow(<Navbar />)
        expect(wrapper.find('span').length).toBe(4)
    });

    it('handles toggle', () => {
        const wrapper = shallow(<Navbar {...props}/>); 
        wrapper.instance()._onToggleNav()
    })
});