import React from 'react';
import classes from './DeckBoardControl.module.css';

const deckBoardControl = (props) => (

			<div style ={{backgroundImage: 'url(' + props.background[props.area] + ')', backgroundSize: 'cover'}} className={classes.DeckDiv}>
				{props.children}
			</div>
	
);
export default deckBoardControl;