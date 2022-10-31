import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/core/Menu';

import logo from '../assets/img/branding.png';

const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '50%'
    }
}));

function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        AMR Robot interface
                    </Typography>
                    <IconButton color="inherit">
                        <img
                            src={logo}
                            alt="Logo"
                            width="40px"
                            height="40px"
                            className={classes.imagen}
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;