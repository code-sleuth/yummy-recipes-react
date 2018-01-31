import React from 'react';
import { shallow } from 'enzyme';
import Category from './Category';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';

describe('these are category component tests', () => {
    it('renders AddCategory component', () => {
        const wrapper = shallow(<AddCategory />)
        const header = <h4 className="modal-title">YUMMY RECIPES: Add Category</h4>
        expect(wrapper.contains(header)).toEqual(true)
    });

    // it('renders EditCategory component', () => {
    //     const wrapper = shallow(<EditCategory />)
    //     const header = <h4 className="modal-title">YUMMY RECIPES: Edit Category</h4>
    //     expect(wrapper.contains(header)).toEqual(true)
    // });
});