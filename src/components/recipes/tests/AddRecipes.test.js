import React from 'react';
import {shallow} from 'enzyme';
import AddRecipe from '../AddRecipe';

describe('Add recipe tests', () => {
    const props = {
        match: {
            params: {

            }
        }
    }
    const event={
        target:{
            value:{}
        }
    }
    it('has divs', () => {
        const wrapper = shallow(<AddRecipe {...props}/>)
        expect(wrapper.find('div').length).toBe(10)
    })

    it('has title', () => {
        const wrapper = shallow(<AddRecipe {...props}/>)
        const title = <h4 className="modal-title">YUMMY RECIPES: Add Recipe</h4>
        expect(wrapper.contains(title)).toEqual(true)
    })

    it('has h4', () => {
        const wrapper = shallow(<AddRecipe {...props}/>)
        expect(wrapper.find('h4').length).toBe(1)
    })

    it('has form', () => {
        const wrapper = shallow(<AddRecipe {...props}/>)
        expect(wrapper.find('form').length).toBe(1)
    })

    it('has input', () => {
        const wrapper = shallow(<AddRecipe {...props}/>)
        expect(wrapper.find('input').length).toBe(2)
    })

    it('has span', () => {
        const wrapper = shallow(<AddRecipe {...props}/>)
        expect(wrapper.find('span').length).toBe(4)
    })

    it('has i', () => {
        const wrapper = shallow(<AddRecipe {...props}/>)
        expect(wrapper.find('i').length).toBe(4)
    })

    it('has br', () => {
        const wrapper = shallow(<AddRecipe {...props}/>)
        expect(wrapper.find('br').length).toBe(1)
    })

    it('gets recipe id', () => {
        const wrapper = shallow(<AddRecipe {...props}/>); 
        wrapper.instance().getRecipeId()
    })

    it('component mounts', () => {
        const wrapper = shallow(<AddRecipe {...props}/>); 
        wrapper.instance().componentDidMount()
    })

    it('handles select changed', () => {
        const wrapper = shallow(<AddRecipe {...props}/>); 
        wrapper.instance().handleSelectChanged(event)
    })

    it('handles recipe name changed', () => {
        const wrapper = shallow(<AddRecipe {...props}/>); 
        wrapper.instance().handleRecipeNameChanged(event)
    })

    it('handles details changed', () => {
        const wrapper = shallow(<AddRecipe {...props}/>); 
        wrapper.instance().handleDetailsChanged(event)
    })

    it('handles ingredients changed', () => {
        const wrapper = shallow(<AddRecipe {...props}/>); 
        wrapper.instance().handleIngredientsChanged(event)
    })
})