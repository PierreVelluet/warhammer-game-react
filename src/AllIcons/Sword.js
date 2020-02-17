import React from 'react';
import swordLogo from './sword.png'
import classes from './Sword.module.css';

const sword = (props) => (
	<div className={classes.Sword}>
		<img src={swordLogo} alt="littleSwordIcon"/>
	</div>
);

export default sword;