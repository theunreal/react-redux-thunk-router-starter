import React, { Component } from 'react';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    toolbarHeader: {
        color: 'white'
    },
};

class Header extends Component {

  render() {

    return (
        <div className={this.props.classes.root}>
            <AppBar position="static">
                <Toolbar classes={{
                    root: ''
                }}>
                    <Link to='/'>
                        <Typography variant="title" color="inherit" className={this.props.classes.toolbarHeader}>
                            Index
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
  }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
