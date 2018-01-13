import React from 'react';
import '../../styles/styles.css'

const Info = () => {
    const year = (new Date()).getFullYear();
    return(
        <div className="copyright">
            <div className="container">
                <div className="row text-center">
                    <p>Copyright © {year} All rights reserved. Ibrahim Mbaziira</p>
                </div>
            </div>
        </div>
    );
};

export default Info;