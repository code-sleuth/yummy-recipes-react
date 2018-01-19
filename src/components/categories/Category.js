import React, { Component } from 'react';
import Navbar from '../common/Navbar';

class Category extends Component{
    render(){
        return(
            <div>

            {/* ADD CATEGORY */}
            <Navbar />
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">YUMMY RECIPES: Add Category</h4>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                <input type="text" name="category" placeholder="CATEGORY" className="form-control"
                                
                                required />
                            </div>
                            <br />
                            <div className="form-group text-center">
                                <input className="btn btn-success btn-md" type="submit" name="submit" value="CREATE CATEGORY"
                                 />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* EDIT CATEGORY */}

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">YUMMY RECIPES: Edit Category</h4>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>                                        
                                <select className="form-control" name="select_item"  required="required">
                                    <option value="">SELECT CATEGORY TO EDIT</option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                <input type="text" name="optcategory" placeholder="CATEGORY" className="form-control" 
                                required />
                            </div>
                            <br />
                            <div className="form-group text-center">
                                <input className="btn btn-info btn-md" type="submit" name="updatecategory" value="UPDATE CATEGORY" 
                                onClick={this.onClickSave}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* DELETE CATEGORT */}

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">YUMMY RECIPES: Delete Category</h4>
                    </div>
                    <div className="modal-body">
                        <form action="/delete_category" method="POST">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-plus"></i></span>
                                <select className="form-control" name="item"  required="required">
                                    <option value="">SELECT CATEGORY TO DELETE</option>
                                    <option value="" ></option>
                                </select>
                            </div>
                            <br />
                            <div className="form-group text-center">
                                <input className="btn btn-danger btn-md" type="submit" name="deletecategory" value="DELETE CATEGORY" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            </div>

        );
    }
}

export default Category;