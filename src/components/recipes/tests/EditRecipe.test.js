import React from 'react';
import {shallow} from 'enzyme';
import EditRecipe from '../EditRecipe';


describe('edit recipe tests', () => {
    const props = {
        match: {
            params: {

            }
        }
    }
    const event={
        target:{
            value:{}
        },
        preventDefault: () => {

        }
    }
    it('has divs', () => {
        const wrapper = shallow(<EditRecipe {...props}/>)
        expect(wrapper.find('div').length).toBe(9)
    })
    it('has navbar', () => {
        const wrapper = shallow(<EditRecipe {...props}/>)
        expect(wrapper.find('Navbar').length).toBe(1)
    })
    it('has title', () => {
        const wrapper = shallow(<EditRecipe {...props}/>)
        const title = <h4 className="modal-title">YUMMY RECIPES: Edit Recipe</h4>
        expect(wrapper.contains(title)).toEqual(true)
    })
    it('has h4', () => {
        const wrapper = shallow(<EditRecipe {...props}/>)
        expect(wrapper.find('h4').length).toBe(1)
    })
    it('has form', () => {
        const wrapper = shallow(<EditRecipe {...props}/>)
        expect(wrapper.find('form').length).toBe(1)
    })
    it('has span', () => {
        const wrapper = shallow(<EditRecipe {...props}/>)
        expect(wrapper.find('span').length).toBe(3)
    })
    it('has i', () => {
        const wrapper = shallow(<EditRecipe {...props}/>)
        expect(wrapper.find('i').length).toBe(3)
    })
    it('has textarea', () => {
        const wrapper = shallow(<EditRecipe {...props}/>)
        expect(wrapper.find('textarea').length).toBe(2)
    })
    it('has input', () => {
        const wrapper = shallow(<EditRecipe {...props}/>)
        expect(wrapper.find('input').length).toBe(2)
    })
    it('has br', () => {
        const wrapper = shallow(<EditRecipe {...props}/>)
        expect(wrapper.find('br').length).toBe(1)
    })

    it('component mounts', () => {
        const wrapper = shallow(<EditRecipe {...props}/>); 
        wrapper.instance().componentDidMount()
    })

    it('component mounts', () => {
        const wrapper = shallow(<EditRecipe {...props}/>); 
        wrapper.instance().componentDidMount()
    })

    it('gets recipe id', () => {
        const wrapper = shallow(<EditRecipe {...props}/>); 
        wrapper.instance().getId()
    })

    it('gets category id', () => {
        const wrapper = shallow(<EditRecipe {...props}/>); 
        wrapper.instance().getCategoryId()
    })

    it('handle change', () => {
        const wrapper = shallow(<EditRecipe {...props}/>); 
        wrapper.instance().handleChange(event)
    })

    it('handle submit', () => {
        const wrapper = shallow(<EditRecipe {...props}/>); 
        wrapper.instance().handleSubmit(event)
    })
})
