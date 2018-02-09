import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import Recipes from '../recipes/Recipes';
import Dashboard from './Dashboard';

describe('these are category component tests', () => {
    const props={
        match:{
            params:{

            }
        } 
    }
    it('renders  navbar', () => {
        const wrapper = shallow(<Navbar />)
        const header = <a className='navbar-brand'>Yummy Recipes</a>
        expect(wrapper.contains(header)).toEqual(true)
    });

    it('has navbar', () => {
        const wrapper = shallow(<Dashboard {...props}/>)
        expect(wrapper.find('Navbar').length).toBe(1)
    })

    it('has div', () => {
        const wrapper = shallow(<Dashboard {...props}/>)
        expect(wrapper.find('div').length).toBe(1)
    })
});