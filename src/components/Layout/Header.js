import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="hero">
                            <h1 className="app-name">Dev Community</h1>
                            <h4 className="app-subname">This is a React, Redux Community</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;