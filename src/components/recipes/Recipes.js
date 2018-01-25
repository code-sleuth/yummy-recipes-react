import React, {Component}  from 'react';
import axios from 'axios';

class Recipes extends Component {
    constructor(){
        super();
        this.state = {
            recipes: [

            ]
        }
    }


    componentDidMount(){
        axios.get('http://127.0.0.1:5000/recipes', {headers: {Authorization: this.getAuthenticationToken()}})
        .then(response => {
            console.log(this.getAuthenticationToken())
            console.log(response.data)
            this.setState({recipes: response.data})
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
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                        </ul>
                </div>
            </div>
        );
    }
    }
}

export default Recipes;