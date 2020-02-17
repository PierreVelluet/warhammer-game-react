import React from 'react';
import classes from './Deck.module.css';

const deck = (props) => (

		<div onClick={props.clicked}className={classes.PlayingCards}>
	    	<ul className={classes.deck}>
	    		<li><div className={classes.card}></div></li>
	    		<li><div className={classes.card}></div></li>
	    		<li><div className={classes.card}></div></li>
	    		<li><div className={classes.card}>?</div></li>
	    	</ul>
    	</div>

);

export default deck;

