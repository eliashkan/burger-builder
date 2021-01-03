import React from 'react';
import burgerLogo from '../../assets/hamblogo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div
        className={classes.Logo}
        style={{height: props.height}}
    >
        <img src={burgerLogo} alt="Logo of a hamburger emoji"/>
    </div>
);

export default logo;
