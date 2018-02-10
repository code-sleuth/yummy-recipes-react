import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../AddCategory';

describe('These are add category tests', () =>{
    const event={
        target:{
            value:{}
        }
    }
    it('renders without crashing', () => {
        const wrapper = shallow(<AddCategory />)
        const header = <h4 className="modal-title">YUMMY RECIPES: Add Category</h4>
        expect(wrapper.contains(header)).toEqual(true);
    });

    it('has a title', () => {
        const wrapper = shallow(<AddCategory />)
        expect(wrapper.find('h4').length).toBe(1)
    });

    it('renders the form', () => {
        const wrapper = shallow(<AddCategory />)
        expect(wrapper.find('form').length).toBe(1)
    });

    it('renders form input', () => {
        const wrapper = shallow(<AddCategory />)
        expect(wrapper.find('input').length).toBe(2)
    });
    it('has divs', () => {
        const wrapper = shallow(<AddCategory />)
        expect(wrapper.find('div').length).toBe(7)
    });
    it('has h4', () => {
        const wrapper = shallow(<AddCategory />)
        expect(wrapper.find('h4').length).toBe(1)
    });
    it('has span', () => {
        const wrapper = shallow(<AddCategory />)
        expect(wrapper.find('span').length).toBe(1)
    });
    it('has i', () => {
        const wrapper = shallow(<AddCategory />)
        expect(wrapper.find('i').length).toBe(1)
    });
    it('has br', () => {
        const wrapper = shallow(<AddCategory />)
        expect(wrapper.find('br').length).toBe(1)
    });
    it('has navbar', () => {
        const wrapper = shallow(<AddCategory />)
        expect(wrapper.find('Navbar').length).toBe(1)
    });

    it('reload', () => {
        const wrapper = shallow(<AddCategory />); 
        wrapper.instance().reloadPage()
    })

    it('handle category name changed', () => {
        const wrapper = shallow(<AddCategory />); 
        wrapper.instance().handleCategoryNameChanged(event)
    })

});