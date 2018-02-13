import React, {Component}  from 'react';
import axios from 'axios';
import {BASE_URL, AuthToken} from '../../utils/Constants';
import {Redirect, withRouter} from 'react-router-dom';

class Recipes extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipes: [],
            per_page: '',
            total_items_returned: '',
            term: '',
            id: this.props.id
        }
    }

    pageChanged(page_id){
        const {id} = this.state;
        axios.get(`${BASE_URL}categories/recipes/${id}?page=${page_id}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({recipes: response.data})
        })
        .catch(error => {
            console.log(error)
        });
    }

    handleClick = (event) => {
        this.pageChanged(event.target.id)
    }

    componentDidMount(){
        this.default();
    }

    default(){
        axios.get(`${BASE_URL}categories/recipes/${this.state.id}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({recipes: response.data})
            const {recipes} = this.state;
            this.setState({per_page: recipes[0].per_page})
            this.setState({total_items_returned: recipes[0].total_items_returned})
        })
        .catch(error => {
            console.log(error)
        });
    }

    OnInputChange = (event) => {
        if(!event.target.value){
            this.default()
            return
        } 
        const {id, recipes} = this.state;
        axios.get(`${BASE_URL}categories/recipes/search/${id}?q=${event.target.value}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            this.setState({recipes: response.data})
            this.setState({per_page: recipes[0].per_page})
            this.setState({total_items_returned: recipes[0].total_items_returned})
        })
        .catch(error => {
            this.setState({recipes: []})
            alert('Search item does not exist');
            this.default()
        });
    }

    addClicked = (event) => {
        this.props.history.push('/add_recipe/'+this.state.id);
    }

    editClicked = (event) => {
        const {name, details, ingredients} = this.state.recipes[0] 
        this.props.history.push('/edit_recipe/'+this.state.id+'/'+event.target.id+'/'+name+'/'+details+'/'+ingredients);
    }

    deleteClicked = (event) => {
        event.preventDefault();
        axios.delete(`${BASE_URL}recipes/${event.target.id}`, {headers: {Authorization: AuthToken}})
        .then(response => {
            alert('Recipe Deleted');
            this.default()
        })
        .catch(error => {
            alert('Delete recipe error: ' + error);
        })
    }

    render(){
        const {recipes, per_page, total_items_returned, id} = this.state;
        if (recipes.length > 0){
        const rec_ipes = recipes.map((recipes) => {
            return(
                <tbody key={recipes.id}>
                <tr>
                    <td>{recipes.name}</td>
                    <td>{recipes.details}</td>
                    <td>{recipes.ingredients}</td>
                    <td>{recipes.date_created}</td>
                    <td>{recipes.date_modified}</td>
                    <td><input type="submit" className="btn btn-info" value="Edit" id={recipes.id} onClick={this.editClicked}/></td>
                    <td><input type="submit" className="btn btn-danger" value="Delete" id={recipes.id} onClick={this.deleteClicked}/></td>
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
            <div className="container">
                <h2>Recipes</h2>
                <div>
                    <input type="submit" value="ADD" className="btn btn-warning" onClick={this.addClicked} />
                </div>
                <div className="search-bar">
                <input onChange={this.OnInputChange} />
                </div>                             
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Recipe Name</th>
                        <th>Details</th>
                        <th>Ingredients</th>
                        <th>Date Created</th>
                        <th>Last Edited</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    { rec_ipes }
                </table>
                <div className="text-center">
                        <ul className="pagination">
                            {pages}
                        </ul>
                </div>
            </div>
        );
    } else {
        return(
            <div className="container">
                <p className="text-center"> User has no Recipes for this Category</p>
                <input type="submit" value="ADD" className="center-block btn-warning btn-lg" onClick={this.addClicked}/>
            </div>
        )   
    }
    }
}
Recipes = withRouter(Recipes);

export default Recipes;