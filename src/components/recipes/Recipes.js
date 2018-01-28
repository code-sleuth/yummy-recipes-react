import React, {Component}  from 'react';
import axios from 'axios';

class Recipes extends Component {
    constructor(){
        super();
        this.state = {
            recipes: [],
            per_page: '',
            total_items_returned: ''
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
        axios.get('http://127.0.0.1:5000/recipes', {headers: {Authorization: this.getAuthenticationToken()}})
        .then(response => {
            this.setState({recipes: response.data})
            this.setState({per_page: this.state.recipes[0].per_page})
            this.setState({page_number: this.state.recipes[0].page_number})
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
    }

    render(){
        if (this.state.recipes){
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
        console.log(pageNumbers);
        return(
            <div class="container">
                <h2>Recipes</h2>
                <p>A list of all created Recipes</p>                              
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
    }
    }
}

export default Recipes;