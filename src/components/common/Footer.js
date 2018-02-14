import React from 'react';
import '../../styles/styles.css'

const Footer = () => {
    return(
        <footer>
            <div className="footer-top"> 
                <div className="container">
                    <div className="row text-center">
                        <a href="https://github.com/code-sleuth/yummy-recipes-react"><i className="fa fa-github fa-2x"></i>GitHub</a>
                    </div>
                    <div className="row text-center">
                        <p>Yummy Recipes&trade; </p>
                    </div>
                </div> 
            </div>  
        </footer>
    );
};

export default Footer;