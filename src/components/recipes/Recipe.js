import React, { Component } from 'react';
import Navbar from '../common/Navbar';

class Recipe extends Component{
    render(){
        return(
            <div>
                <Navbar />

                {/* ADD RECIPE */ }

                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Add Recipe</h4>
                        </div>
                        <div className="modal-body">
                            <form action="/add_recipe" method="POST">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>                                        
                                    <select className="form-control" name="category" required="required">
                                        <option value="">SELECT CATEGORY TO ATTACH</option>
                                        <option value="" ></option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                    <input type="text" name="recipename" placeholder="RECIPE NAME" className="form-control" id="recipename" required />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list-alt"></i></span>
                                    <textarea type="text" name="description" placeholder="RECIPE DESCRIPTION" className="form-control" id="description" required></textarea>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-glass"></i></span>
                                    <textarea type="text" name="ingredients" placeholder="RECIPE INGREDIENTS" className="form-control" id="ingredients"  required></textarea>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-success btn-md" type="submit" name="submitrecipe" value="CREATE RECIPE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* EDIT RECIPE */}

                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Edit Recipe</h4>
                        </div>
                        <div className="modal-body">
                            <form action="/edit_recipe" method="POST">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>                                        
                                    <select className="form-control" name="edit_recipe" required="required">
                                        <option value="">SELECT RECIPE TO EDIT</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>                                        
                                    <select className="form-control" name="new_category" required="required">
                                        <option value="">SELECT CATEGORY</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                    <input type="text" name="recipe_name" placeholder="RECIPE NAME" className="form-control" id="recipe_name"
                                            required />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-list-alt"></i></span>
                                    <textarea type="text" name="new_description" placeholder="RECIPE DESCRIPTION" className="form-control" id="new_description"  required></textarea>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-glass"></i></span>
                                    <textarea type="text" name="new_ingredients" placeholder="RECIPE INGREDIENTS" className="form-control"
                                                id="new_ingredients"  required></textarea>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-info btn-md" type="submit" name="updaterecipe" value="UPDATE RECIPE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* DELETE RECIPE */}

                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">YUMMY RECIPES: Delete Recipe</h4>
                        </div>
                        <div className="modal-body">
                            <form action="/delete_recipe" method="POST">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                    <select className="form-control" name="recipe" required="required">
                                        <option value="">SELECT RECIPE TO DELETE</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <input className="btn btn-danger btn-md" type="submit" name="deleterecipe" value="DELETE RECIPE" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Recipe;