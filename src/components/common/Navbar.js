import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
 
class Navbar extends Component {
    state = {
        navCollapsed: true
      }
    
      _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
      }

      handleLogout(){
          localStorage.removeItem('token');
          this.setState()
      }

      isAuthenticated(){
          const token = localStorage.getItem('token');
          return token && token.length > 10;
      }

    render(){
        const isAlreadyAuthenticated = this.isAuthenticated();
        const {navCollapsed} = this.state
        return(   
            <div>
                { !isAlreadyAuthenticated ? <Redirect to="/login" /> :(
                    <nav className='navbar navbar-default'>
                        <div className='navbar-header'>
                        <a className='navbar-brand'>Yummy Recipes</a>
                        <button
                            aria-expanded='false'
                            className='navbar-toggle collapsed'
                            onClick={this._onToggleNav}
                            type='button'
                            >
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        </div>
                        <div
                        className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}
                        >
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/dashboard/categories">Category</Link></li>
                            <li><Link to="/login" onClick={this.handleLogout.bind(this)}>Logout</Link></li>
                        </ul>
                        </div>
                    </nav>
                )}
            </div>
        );
    }   
}
    
export default Navbar;