import React, {Component}  from 'react';
import axios from 'axios';
import {BASE_URL, AuthToken} from '../../utils/Constants';
import { Redirect } from 'react-router-dom';
import Navbar from '../common/Navbar';
import EditCategory from './EditCategory';
import EditRecipe from '../recipes/EditRecipe';

class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            per_page: '',
            total_items_returned: ''
        }
    }

    pageChanged(id){
        axios.get(`${BASE_URL}categories?page=${id}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({categories: response.data})
        })
        .catch(error => {
            alert('click :' + error);
        });
    }


    handleClick = (event) => {
        this.pageChanged(event.target.id)
    }

    componentDidMount(){
        this.default();
    }

    default(){
        const {categories, per_page, total_items_returned} = this.state;
        axios.get(BASE_URL+'categories', {headers: {Authorization: AuthToken}})
        .then(response => {
            console.log(response.data)
            this.setState({categories: response.data})
            this.setState({per_page: this.state.categories[0].per_page})
            this.setState({total_items_returned: this.state.categories[0].total_items_returned})
        })
        .catch(error => {
            console.log(error)
            if (error){
                //this.handleError();
                alert(error)
            }
        });
    }

    // handleError(){
    //     //localStorage.removeItem('token')
    //     //window.location.reload();
    //     alert('here from cats')
    // }

    OnInputChange = (event) => {
        const {categories, per_page, total_items_returned} = this.state
        if(!event.target.value){
            this.default()
            return
        } 
        axios.get(`${BASE_URL}categories/search?q=${event.target.value}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({categories: response.data})
            this.setState({per_page: this.state.categories[0].per_page})
            this.setState({total_items_returned: categories[0].total_items_returned})
        })
        .catch(error => {
            this.setState({categories: []})
            alert('Search item does not exist');
            this.default()
        });
    }

    handleRowClicked = (event) => {
        this.props.history.push('/recipe/'+event.target.id)    
    }

    addClicked= (event) => {
        this.props.history.push('/add_categories')
    }

    editClicked = (event) => {
        this.props.history.push('/edit_categories/'+event.target.id);
    }

    deleteCategory = (event) => {
        axios.delete(`${BASE_URL}categories/${event.target.id}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            alert('Category deleted')
            this.setState()
        })
        .catch(error => {
            alert(error);
        });
    }
      

    render(){
        console.log(this.props)
        const {categories, per_page, total_items_returned} = this.state
        if (categories.length > 0){
        const cat = categories.map((category) => {
            return(
                <tbody key={category.id}>
                <tr>
                    <td>{category.name}</td>
                    <td>{category.date_created}</td>
                    <td>{category.date_modified}</td>
                    <td><input type="submit" className="btn btn-success" value="View" id={category.id} onClick={this.handleRowClicked}/></td>
                    <td><input type="submit" className="btn btn-info" name={category.name} value="Edit" id={category.id} onClick={this.editClicked}/></td>
                    <td><input type="submit" className="btn btn-danger" value="Delete" id={category.id} onClick={this.deleteCategory}/></td>
                </tr>
                </tbody>
            );
        });

        const pageNumbers = [];
        if(total_items_returned > 5){
            for (let i = 1; i <= Math.ceil(total_items_returned / per_page); i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1);
        }


        const pages = pageNumbers.map((number) => {
            return(
                <li key={number}><a onClick={this.handleClick} key={number} id={number}>{number}</a></li>
            );
        });
        
        return(
           <div>
               <Navbar /> 
           <div className="container">
                <h2>Categories</h2>
                <div>
                    <input type="submit" value="ADD" className="btn btn-warning" onClick={this.addClicked} />
                </div>
                <div className="search-bar">
                <input placeholder="SEARCH" onChange={this.OnInputChange} />
                </div>                             
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Date Created</th>
                        <th>Last Edited</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    { cat }
                </table>
                <div className="text-center">
                    <ul className="pagination">
                        {pages}
                    </ul>
                </div>
            </div>
            </div>
        );
    } else {
        return(
            <p> User has no Categories or No resultset from search</p>
        )
    }
    }
}

export default Category;