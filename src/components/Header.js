import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {

  render() {
    return (
        <h2>
            <Link to='/'>Index</Link>
        </h2>
    );
  }
}

export default Header;
