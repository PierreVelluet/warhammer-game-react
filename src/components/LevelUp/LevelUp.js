import React from 'react';
import { connect } from 'react-redux';
import classes from './LevelUp.module.css';

const levelUp = (props) => (
    <div className={classes.LevelUp}>
    <h1 style={{marginLeft: '30px'}}><strong>You just won a level !</strong></h1>
    <div className={classes.Img}></div>
        <p style={{marginLeft: '25px'}}>You are now level <strong>{props.generalState.level} ! </strong>It grants you + <strong>1</strong> strengh, + <strong>1</strong> defense, and you can claim a special reward !</p>
        <button style={{marginLeft: '135px'}} onClick={props.claimReward}>Claim super reward</button>
        
    </div>
);

const mapStateToProps = state => {
    return {
        generalState: state.generalReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        claimReward: () => dispatch({type: 'CLAIM_REWARDS'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(levelUp);