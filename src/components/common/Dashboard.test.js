import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import Recipes from '../recipes/Recipes';

describe('these are category component tests', () => {
    const props={
        params:{
            match:{
            }
        } 
    }
    it('renders AddCategory component', () => {
        const wrapper = shallow(<Navbar />)
        const header = <a className='navbar-brand'>Yummy Recipes</a>
        expect(wrapper.contains(header)).toEqual(true)
    });

    // it('renders Recipes component', () => {
    //     const wrapper = shallow(<Recipes {...props}/>)
    //     expect(wrapper.find('h2').length).toBe(12)
    // });
});