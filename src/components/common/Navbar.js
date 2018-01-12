import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 
class Navbar extends Component {
    state = {
        navCollapsed: true
      }
    
      _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
      }

    render(){
        const {navCollapsed} = this.state
        return(
            <div>
            <nav className='navbar navbar-default'>
            <div className='navbar-header'>
            <a className='navbar-brand' href='/'>Yummy Recipes</a>
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            </div>
        </nav>
        </div>
        );
    }   
}
    
export default Navbar;