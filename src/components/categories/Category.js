import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import DeleteCategory from './DeleteCategory';

class Category extends Component{

    componentDidMount(){

    }

    render(){
        
        return(
            <div>
            <Navbar />
            {/* ADD CATEGORY */}
            <AddCategory />
            {/*EDIT CATEGORY*/}
            <EditCategory />
            {/* DELETE CATEGORT */}
            <DeleteCategory />
            </div>
        );
    }
}

export default Category;