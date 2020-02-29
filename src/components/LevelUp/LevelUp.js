import React from 'react';
import { connect } from 'react-redux';
import classes from './LevelUp.module.css';
import * as actionCreators from '../../store/actions/index';

const levelUp = (props) => (
    <div className={classes.LevelUp}>
    <h1 style={{marginLeft: '30px'}}><strong>You just won a level !</strong></h1>
    <div className={classes.Img}></div>
        <p style={{marginLeft: '25px'}}>You are now level <strong>{props.generalState.level} ! </strong>It grants you + <strong>1</strong> strengh and + <strong>1</strong> defense ! You become stronger !</p>
        <button className={classes.Btn} onClick={props.continue}>Continue</button>
        
    </div>
);

const mapStateToProps = state => {
    return {
        generalState: state.generalReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        continue: () => dispatch(actionCreators.continueThenCheckUpdates())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(levelUp);