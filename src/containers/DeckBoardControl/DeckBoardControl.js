import React from 'react';
import { connect } from 'react-redux';
import classes from './DeckBoardControl.module.css';

const deckBoardControl = (props) => (

			<div style ={{backgroundImage: 'url(' + props.areaState[props.generalState.area].background + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgoundRepeat: 'no-repeat'}} className={classes.DeckDiv}>
				{props.children}
			</div>
	
);

const mapStateToProps = state => {
    return {
        generalState: state.generalReducer,
        areaState: state.areaReducer
    };
};

export default connect(mapStateToProps)(deckBoardControl);