import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}

export default Header;