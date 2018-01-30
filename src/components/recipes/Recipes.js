import React, {Component}  from 'react';
import axios from 'axios';

class Recipes extends Component {
    constructor(){
        super();
        this.state = {
            recipes: [],
            per_page: '',
            total_items_returned: '',
            term: '',
            fail_safe: []
        }
    }

    pageChanged(id){
        axios.get(`http://127.0.0.1:5000/recipes?page=${id}`, {headers: {Authorization: this.getAuthenticationToken()}})
        .then(response => {
            this.setState({recipes: response.data})
        })
        .catch(error => {
            alert('click :' + error);
        });
    }

    handleClick = (event) => {
        this.pageChanged(event.target.id)
    }

    onPageNumberChanged = (event) => {
    }

    componentDidMount(){
        this.default();
    }

    default(){
        axios.get('http://127.0.0.1:5000/recipes', {headers: {Authorization: this.getAuthenticationToken()}})
        .then(response => {
            this.setState({recipes: response.data})
            this.setState({fail_safe: response.data})
            this.setState({per_page: this.state.recipes[0].per_page})
            this.setState({total_items_returned: this.state.recipes[0].total_items_returned})
        })
        .catch(error => {
            console.log(error)
            if (error){
                this.handleError();
            }
        });
    }

    getAuthenticationToken(){
        return localStorage.getItem('token');
    }

    handleError(){
        localStorage.removeItem('token')
        window.location.reload();
        alert('here')
    }

    OnInputChange = (event) => {
        if(!event.target.value){
            this.default()
            return
        } 
        axios.get(`http://127.0.0.1:5000/recipes/search?q=${event.target.value}`, {headers: {Authorization: this.getAuthenticationToken()}})
        .then(response => {
            this.setState({recipes: response.data})
            this.setState({per_page: this.state.recipes[0].per_page})
            this.setState({total_items_returned: this.state.recipes[0].total_items_returned})
        })
        .catch(error => {
            this.setState({recipes: []})
            alert('Search item does not exist');
            this.default()
        });
    }

    render(){
        if (this.state.recipes.length > 0){
        const rec_ipes = this.state.recipes.map((recipes) => {
            return(
                <tbody>
                <tr>
                    <td>{recipes.category_id}</td>
                    <td>{recipes.name}</td>
                    <td>{recipes.details}</td>
                    <td>{recipes.ingredients}</td>
                    <td>{recipes.date_created}</td>
                    <td>{recipes.date_modified}</td>
                </tr>
                </tbody>
            );
        });

        const pageNumbers = [];
        if(this.state.total_items_returned > 4){
            for (let i = 1; i <= Math.ceil(this.state.total_items_returned / this.state.per_page); i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1);
        }


        const pages = pageNumbers.map((number) => {
            return(
                <li><a onClick={this.handleClick} key={number} id={number}>{number}</a></li>
            );
        });
        
        return(
            <div class="container">
                <h2>Recipes</h2>
                <div className="search-bar">
                <input onChange={this.OnInputChange} />
                </div>                             
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Recipe Name</th>
                        <th>Details</th>
                        <th>Ingredients</th>
                        <th>Date Created</th>
                        <th>Last Edited</th>
                    </tr>
                    </thead>
                    { rec_ipes }
                </table>
                <div class="text-center">
                        <ul class="pagination">
                            {pages}
                        </ul>
                </div>
            </div>
        );
    } else {
        return(
            <p> User has no Recipes or No resultset from search</p>
        )
    }
    }
}

export default Recipes;