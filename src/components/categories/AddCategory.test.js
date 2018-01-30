import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from './AddCategory';

describe('These are add category tests', () =>{
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
});