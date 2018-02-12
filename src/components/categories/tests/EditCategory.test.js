import React from 'react';
import { shallow } from 'enzyme';
import EditCategory from '../EditCategory';

describe('these are edit category component tests', () => {
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
    it('component did mount', () => {
        const wrapper = shallow(<EditCategory {...props}/>); 
        wrapper.instance().componentDidMount()
    })
    it('getCategoryId', () => {
        const wrapper = shallow(<EditCategory {...props}/>); 
        wrapper.instance().getCategoryId()
    })

    it('handles input change', () => {
        const wrapper = shallow(<EditCategory {...props}/>); 
        wrapper.instance().handleChange(event)
    })
});