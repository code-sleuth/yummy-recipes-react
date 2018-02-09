import React, {Component}  from 'react';
import axios from 'axios';
import {BASE_URL, AuthToken} from '../../utils/Constants';
import Navbar from '../common/Navbar';
class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            per_page: '',
            total_items_returned: ''
        }
    }
    // function called when changing page
    // it takes an id which will be the page to redirect to
    pageChanged(id){
        axios.get(`${BASE_URL}categories?page=${id}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({categories: response.data})
        })
        .catch(error => {
            alert('click :' + error);
        });
    }

    // function called when user clicks on page links
    // in turn it gets the page id and passes it ti pageChanged function
    handleClick = (event) => {
        this.pageChanged(event.target.id)
    }

    // life cycle function for when component loads for the first time
    componentDidMount(){
        this.default();
    }

    // this function loads the default values of categories in the api
    default(){
        axios.get(BASE_URL+'categories', {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({categories: response.data})
            const {categories} = this.state;
            this.setState({per_page: categories[0].per_page})
            this.setState({total_items_returned: categories[0].total_items_returned})
        })
        .catch(error => {
            
        });
    }

    // function called every time user changes input in the search bar 
    OnInputChange = (event) => {
        if(!event.target.value){
            this.default()
            return
        } 
        axios.get(`${BASE_URL}categories/search?q=${event.target.value}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({categories: response.data})
            const {categories, per_page, total_items_returned} = this.state
            this.setState({per_page: categories[0].per_page})
            this.setState({total_items_returned: categories[0].total_items_returned})
        })
        .catch(error => {
            this.setState({categories: []})
            alert('Search item does not exist');
            this.default()
        });
    }

    // function called when row is clicked
    handleRowClicked = (event) => {
        this.props.history.push('/recipe/'+event.target.id)    
    }

    // function called when add button is clicked
    addClicked= (event) => {
        this.props.history.push('/add_categories')
    }

    // function called when the edit button is clicked
    editClicked = (event) => {
        this.props.history.push('/edit_categories/'+event.target.id);
    }

    // function called when the delete button is clicked
    deleteCategory = (event) => {
        axios.delete(`${BASE_URL}categories/${event.target.id}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            alert('Category deleted')
            this.default();
        })
        .catch(error => {
            alert(error);
        });
    }
      
    // function that renders the entie component.
    render(){
        const {categories, per_page, total_items_returned} = this.state;
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
            <div className="container">
                <p className="text-center"> User has no Registered Categories</p>
                <input type="submit" value="ADD" className="center-block btn-warning btn-lg" onClick={this.addClicked} />
            </div>
        )
    }
    }
}

export default Category;