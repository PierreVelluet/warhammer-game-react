import React from 'react';
import classes from './LevelUp.module.css';

const levelUp = (props) => (
    <div className={classes.LevelUp}>
    <h1 style={{marginLeft: '30px'}}><strong>You just won a level !</strong></h1>
    <div className={classes.Img}></div>
        <p style={{marginLeft: '25px'}}>You are now level <strong>{props.level} ! </strong>It grants you + <strong>1</strong> strengh, + <strong>1</strong> defense, and you can claim a special reward !</p>
        <button style={{marginLeft: '135px'}} onClick={()=>props.claimSuperRewards('super')}>Claim super reward</button>
        
    </div>
);

export default levelUp;