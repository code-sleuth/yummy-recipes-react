import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
 
class Navbar extends Component {
    state = {
        navCollapsed: true
      }
    
      _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
      }

      handleLogout = (event) => {
          localStorage.removeItem('token');
          this.props.history.push('/login')
      }

    render(){
        const {navCollapsed} = this.state
        return(   
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
                <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                <ul className='nav navbar-nav navbar-right'>
                    <li><Link to="/categories">Categories</Link></li>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/login" onClick={this.handleLogout}>Logout</Link></li>
                </ul>
                </div>
            </nav>
        );
    }   
}
    
export default Navbar;