import React, {Component}  from 'react';
import axios from 'axios';
import RecipeImage from '../../styles/assets/recipe.jpg';

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
        //console.log(localStorage.getItem('token'))
        if (this.state.recipes){
        const rec_ipes = this.state.recipes.map((recipes) => {
            return(
                <div className="col-xs-12 col-sm-6 col-md-3" key={recipes.id}>
                    <div className="thumbnail">
                        <img src={RecipeImage} />
                        <div className="caption">
                            <h3>{recipes.category_id}</h3>
                            <h4 className="text-uppercase">{recipes.name}</h4>
                            <p className="text-justify">{recipes.details}</p>
                            <h5>Ingredients:</h5>
                            <ul>
                                <li>{recipes.ingredients}</li>
                            </ul>

                            <hr />
                            <p className="small"><em>Created: {recipes.date_created}</em></p>
                            <p className="small"><em>Last Modified: {recipes.date_modified}</em></p>
                        </div>
                    </div>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row text-left">
                { rec_ipes }
                </div>
            </div>
        );
    }
    }
}

export default Recipes;