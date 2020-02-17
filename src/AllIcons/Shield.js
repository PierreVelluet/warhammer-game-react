import React from 'react';
import shieldLogo from './shield.png'
import classes from './Shield.module.css';

const shield = () => (
	<div className={classes.Shield}>
		<img src={shieldLogo} alt="littleShieldIcon"/>
	</div>
);

export default shield;