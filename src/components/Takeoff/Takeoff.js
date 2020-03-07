import React from 'react';
import { connect } from 'react-redux';
import classes from './Takeoff.module.css';
import * as actionCreators from '../../store/actions/index';

const takeoff = (props) => (

        <div className={classes.Takeoff}>
            <h1 className={classes.Title}><strong>Takeoff of your spaceship</strong></h1>
            <p>You managed your way though this area nicely, and you even killed a war chief who might have been a problem in the future, for the {props.generalState.race} race. You can be prood of yourself.</p>
            <div className={classes.Img} style={{backgroundImage: "url('https://www.muralswallpaper.co.uk/app/uploads/atlantis-takeoff-space-plain-3-825x535.jpg')"}}></div>
            <p><em>Though, you didnt find any ressources, hence, your mission is not over and you need to explore other planets...</em></p>
            <button className={classes.Btn} onClick={props.continue}>Continue</button>
        </div>

);

const mapStateToProps = state => {
    return {
        generalState: state.generalReducer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
		continue: () => dispatch(actionCreators.continueHandler()),
		
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(takeoff);