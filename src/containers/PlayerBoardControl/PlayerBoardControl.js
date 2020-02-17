import React from 'react';
import classes from './PlayerBoardControl.module.css';


const playerBoardControl = (props) => (

			<div className={classes.Container}>
				{props.children}
			</div>
);

export default playerBoardControl;