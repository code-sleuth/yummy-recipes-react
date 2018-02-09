import React from 'react';
import { shallow } from 'enzyme';
import Category from './Category';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import Navbar from '../common/Navbar';

describe('these are category component tests', () => {
    const props={
        history:{
            push:'/edit'
        },
        match:{
            params:{
            
            } 
        }
    }
    const event={
        target:{
            value:{}
        }
    }
    it('renders AddCategory component', () => {
        const wrapper = shallow(<AddCategory />)
        const header = <h4 className="modal-title">YUMMY RECIPES: Add Category</h4>
        expect(wrapper.contains(header)).toEqual(true)
    });

    it('renders EditCategory component', () => {
        const wrapper = shallow(<EditCategory {...props}/>)
        const header = <h4 className="modal-title">YUMMY RECIPES: Edit Category</h4>
        expect(wrapper.contains(header)).toEqual(true)
    });

    it('has a title', () => {
        const wrapper = shallow(<EditCategory {...props}/>)
        expect(wrapper.find('h4').length).toBe(1)
    });

    it('renders the form', () => {
        const wrapper = shallow(<EditCategory {...props}/>)
        expect(wrapper.find('form').length).toBe(1)
    });

    it('renders form input', () => {
        const wrapper = shallow(<EditCategory {...props}/>)
        expect(wrapper.find('input').length).toBe(2)
    });

    it('renders search bar', () => {
        const wrapper = shallow(<Category />)
        expect(wrapper.find('input').length).toBe(1)
    });

    it('renders divs', () => {
        const wrapper = shallow(<Category />)
        expect(wrapper.find('div').length).toBe(1)
    });

    it('has input', () => {
        const wrapper = shallow(<Category />)
        expect(wrapper.find('input').length).toBe(1)
    });

    it('default function', () => {
        const wrapper = shallow(<Category />); 
        wrapper.instance().default()
    })

    it('component did mount', () => {
        const wrapper = shallow(<Category />); 
        wrapper.instance().componentDidMount()
    })

    it('on input change', () => {
        const wrapper = shallow(<Category />); 
        wrapper.instance().OnInputChange(event)
    })

    it('delete category', () => {
        const wrapper = shallow(<Category />); 
        wrapper.instance().deleteCategory(event)
    })
});