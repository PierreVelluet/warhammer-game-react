import React from 'react';
import { connect } from 'react-redux';
import classes from './Deck.module.css';
import * as actionCreators from '../../store/actions/index';

const deck = (props) => (

		<div onClick={props.revealHandler}className={classes.PlayingCards}>
	    	<ul className={classes.deck}>
	    		<li><div className={classes.card}></div></li>
	    		<li><div className={classes.card}></div></li>
	    		<li><div className={classes.card}></div></li>
	    		<li><div className={classes.card}>?</div></li>
	    	</ul>
    	</div>

);

const mapDispatchToProps = dispatch => {
    return {
		revealHandler: () => dispatch(actionCreators.revealHandler())
		
    }
};

export default connect(null, mapDispatchToProps)(deck);

